/**
 * Es Teh GiNăSTel - Interactive Scripts
 * Complies with PRD & UI/UX Specifications
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Mobile Menu Toggle
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // 2. Active Tab & Scrollspy
  // ==========================================
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();

  // ==========================================
  // 3. Menu Filtering (Katalog Menu Minuman)
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class on button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      menuCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || (filterValue === 'buah' && category === 'segar-buah')) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 4. Quick Action "Pesan Menu Ini"
  // ==========================================
  const orderItemBtns = document.querySelectorAll('.btn-pesan-item');
  orderItemBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const menuTitle = btn.getAttribute('data-menu-name') || 'Es Teh Ginastel';
      // Record SEM click event
      trackSemClick(`Menu: ${menuTitle}`, 15000);
      
      // Scroll smoothly to #order section
      const orderSection = document.getElementById('order');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // 5. WhatsApp Form Submission (Kemitraan / Kerja Sama)
  // ==========================================
  const partnerForm = document.getElementById('partnershipForm');
  if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('formNama').value.trim();
      const telepon = document.getElementById('formTelepon').value.trim();
      const jenis = document.getElementById('formJenis').value;
      const pesan = document.getElementById('formPesan').value.trim();

      if (!nama || !telepon || !pesan) {
        alert('Mohon lengkapi semua kolom formulir pengajuan kerja sama.');
        return;
      }

      // Format WhatsApp Message
      const waNumber = '6282322228006';
      const textMessage = `Halo Tim Kemitraan Es Teh GiNăSTel,\n\n` +
        `Saya tertarik mengajukan kerja sama dengan rincian berikut:\n` +
        `👤 Nama/Instansi: ${nama}\n` +
        `📱 No. WhatsApp: ${telepon}\n` +
        `🤝 Jenis Kerja Sama: ${jenis}\n` +
        `📝 Detail Pesan/Lokasi: ${pesan}\n\n` +
        `Mohon informasi lebih lanjut dan proposal penawarannya. Terima kasih!`;

      const encodedText = encodeURIComponent(textMessage);
      const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

      // Track SEM KPI conversion
      trackSemClick(`Kemitraan: ${jenis}`, 250000, true);

      // Open WhatsApp
      window.open(waUrl, '_blank');
    });
  }

  // ==========================================
  // 6. SEM & KPI Live Tracking Simulator (PRD Section 5)
  // ==========================================
  const kpiToggleBtn = document.getElementById('kpiToggleBtn');
  const kpiModal = document.getElementById('kpiModal');
  const kpiCloseBtn = document.getElementById('kpiCloseBtn');
  const kpiResetBtn = document.getElementById('kpiResetBtn');

  // Initial State
  const defaultKpiState = {
    impressions: 1250,
    clicks: 48,
    adSpend: 150000, // Rp 150.000
    revenue: 680000,  // Rp 680.000
    conversions: 14
  };

  let kpiState = { ...defaultKpiState };

  function calculateKpi() {
    // CTR = (Klik / Tayangan) * 100%
    const ctr = kpiState.impressions > 0 
      ? ((kpiState.clicks / kpiState.impressions) * 100).toFixed(2) 
      : '0.00';

    // CPC = Biaya Iklan / Jumlah Klik
    const cpc = kpiState.clicks > 0 
      ? Math.round(kpiState.adSpend / kpiState.clicks) 
      : 0;

    // ROAS = (Pendapatan / Biaya Iklan) * 100%
    const roas = kpiState.adSpend > 0 
      ? Math.round((kpiState.revenue / kpiState.adSpend) * 100) 
      : 0;

    // Conversion Rate = (Konversi / Klik) * 100%
    const cvr = kpiState.clicks > 0 
      ? ((kpiState.conversions / kpiState.clicks) * 100).toFixed(1) 
      : '0.0';

    // Update DOM
    const elCtr = document.getElementById('kpiCtr');
    const elCpc = document.getElementById('kpiCpc');
    const elRoas = document.getElementById('kpiRoas');
    const elClicks = document.getElementById('kpiClicks');
    const elSpend = document.getElementById('kpiSpend');
    const elRevenue = document.getElementById('kpiRevenue');

    if (elCtr) elCtr.textContent = `${ctr}%`;
    if (elCpc) elCpc.textContent = `Rp ${cpc.toLocaleString('id-ID')}`;
    if (elRoas) elRoas.textContent = `${roas}%`;
    if (elClicks) elClicks.textContent = kpiState.clicks;
    if (elSpend) elSpend.textContent = `Rp ${kpiState.adSpend.toLocaleString('id-ID')}`;
    if (elRevenue) elRevenue.textContent = `Rp ${kpiState.revenue.toLocaleString('id-ID')}`;
  }

  function trackSemClick(channelName, estimatedValue = 18000, isConversion = true) {
    kpiState.clicks += 1;
    if (isConversion) {
      kpiState.conversions += 1;
      kpiState.revenue += estimatedValue;
    }
    calculateKpi();

    // Append to Log Feed
    const logFeed = document.getElementById('kpiLogFeed');
    if (logFeed) {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const logItem = document.createElement('div');
      logItem.className = 'kpi-log-item';
      logItem.innerHTML = `<span>[${timeStr}] ${channelName}</span> <span>+Rp ${estimatedValue.toLocaleString('id-ID')}</span>`;
      logFeed.prepend(logItem);

      // Keep max 8 logs
      if (logFeed.children.length > 8) {
        logFeed.removeChild(logFeed.lastChild);
      }
    }
  }

  // Bind Merchant Trackers
  const merchantGofood = document.getElementById('btnGoFood');
  if (merchantGofood) {
    merchantGofood.addEventListener('click', () => {
      trackSemClick('Order: GoFood', 22000, true);
    });
  }

  const merchantShopee = document.getElementById('btnShopeeFood');
  if (merchantShopee) {
    merchantShopee.addEventListener('click', () => {
      trackSemClick('Order: ShopeeFood', 20000, true);
    });
  }

  const merchantGrab = document.getElementById('btnGrabFood');
  if (merchantGrab) {
    merchantGrab.addEventListener('click', () => {
      trackSemClick('Order: GrabFood', 24000, true);
    });
  }

  const btnPartyWa = document.getElementById('btnPartyWa');
  if (btnPartyWa) {
    btnPartyWa.addEventListener('click', () => {
      trackSemClick('Order WA: Partai Besar', 175000, true);
    });
  }

  // Toggle Modal
  if (kpiToggleBtn && kpiModal) {
    kpiToggleBtn.addEventListener('click', () => {
      kpiModal.classList.toggle('open');
    });
  }

  if (kpiCloseBtn && kpiModal) {
    kpiCloseBtn.addEventListener('click', () => {
      kpiModal.classList.remove('open');
    });
  }

  // Reset Simulator
  if (kpiResetBtn) {
    kpiResetBtn.addEventListener('click', () => {
      kpiState = { ...defaultKpiState };
      calculateKpi();
      const logFeed = document.getElementById('kpiLogFeed');
      if (logFeed) {
        logFeed.innerHTML = '<div class="kpi-log-item"><span>Status: Simulator di-reset</span></div>';
      }
    });
  }

  // Initial Calculation
  calculateKpi();
});

