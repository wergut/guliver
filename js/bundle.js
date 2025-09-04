document.addEventListener('DOMContentLoaded', function () {
  const catalogBtn = document.querySelector('.catalog-btn');
  const closeCatalogBtn = document.querySelector('.btn-close-catalog');
  const catalogWrapper = document.querySelector('.catalog-wrapper');
  function openCatalog() {
    catalogWrapper.classList.add('open');
  }
  function closeCatalog() {
    catalogWrapper.classList.remove('open');
  }
  catalogBtn.addEventListener('click', openCatalog);
  closeCatalogBtn.addEventListener('click', closeCatalog);
  document.addEventListener('click', function (event) {
    if (catalogWrapper.classList.contains('open') && !event.target.closest('.catalog-wrapper') && !event.target.closest('.catalog-btn')) {
      closeCatalog();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && catalogWrapper.classList.contains('open')) {
      closeCatalog();
    }
  });
});
var swiper1 = new Swiper(".projects-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 24,
  effect: "fade",
  navigation: {
    nextEl: ".projects-slider .swiper-button-next",
    prevEl: ".projects-slider .swiper-button-prev"
  }
});
var swiper2 = new Swiper(".header-service-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: ".header-service-slider .swiper-button-next",
    prevEl: ".header-service-slider .swiper-button-prev"
  }
});
var swiper3 = new Swiper(".mobile-services-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1.05,
  spaceBetween: 8,
  navigation: {
    nextEl: ".mobile-services-slider .swiper-button-next",
    prevEl: ".mobile-services-slider .swiper-button-prev"
  }
});
var swiper3 = new Swiper(".mobile-news-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1.05,
  spaceBetween: 8
});
var swiper4 = new Swiper(".directions-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1.05,
  spaceBetween: 8
});
document.addEventListener('DOMContentLoaded', function () {
  const tabsBlock = document.querySelector('.tabs-block');
  const tabButtons = tabsBlock.querySelectorAll('.tab-nav-button');
  const tabPanels = tabsBlock.querySelectorAll('.tab-panel');
  function initializeTabs() {
    if (tabButtons.length > 0 && tabPanels.length > 0) {
      const firstTabId = tabButtons[0].getAttribute('data-tab-id');
      const firstPanel = tabsBlock.querySelector(`.tab-panel[data-tab-id="${firstTabId}"]`);
      tabButtons[0].classList.add('active');
      firstPanel.style.display = 'block';
      firstPanel.style.opacity = '1';
      tabPanels.forEach((panel, index) => {
        if (index !== 0) {
          panel.style.display = 'none';
          panel.style.opacity = '0';
        }
      });
    }
  }
  function switchTab(tabId) {
    tabPanels.forEach(panel => {
      if (panel.style.display === 'block') {
        panel.style.opacity = '0';
        setTimeout(() => {
          panel.style.display = 'none';
        }, 300);
      }
    });
    tabButtons.forEach(button => {
      button.classList.remove('active');
    });
    const activeButton = tabsBlock.querySelector(`.tab-nav-button[data-tab-id="${tabId}"]`);
    activeButton.classList.add('active');
    const activePanel = tabsBlock.querySelector(`.tab-panel[data-tab-id="${tabId}"]`);
    setTimeout(() => {
      activePanel.style.display = 'block';
      setTimeout(() => {
        activePanel.style.opacity = '1';
      }, 10);
    }, 300);
  }
  initializeTabs();
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab-id');
      switchTab(tabId);
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const searchContainer = document.querySelector('.search-small-screens');
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-small-screens input[type="search"]');
  searchButton.addEventListener('click', function (e) {
    e.stopPropagation();
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    }
  });
  document.addEventListener('click', function (e) {
    if (!searchContainer.contains(e.target) && searchInput.classList.contains('active')) {
      searchInput.classList.remove('active');
    }
  });
  searchInput.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      searchInput.classList.remove('active');
      searchInput.blur();
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-small-screens.header-small-btn');
  const closeButton = document.querySelector('.btn-close-menu');
  const menu = document.querySelector('.small-screens-menu');
  const body = document.body;
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);
  function openMenu() {
    menu.classList.add('show');
    overlay.classList.add('show');
    body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('show');
    overlay.classList.remove('show');
    body.style.overflow = '';
  }
  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('show')) {
      closeMenu();
    }
  });
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('show') && !menuButton.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });
  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');
  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';
      setTimeout(function () {
        modalElem.classList.add('modal-opening');
        resolve();
      }, 0);
    });
  }
  async function closeModal(closeBtn) {
    return new Promise(resolve => {
      var modal = closeBtn.closest('.modal-dialog');
      modal.classList.remove('modal-opening');
      modal.classList.add('modal-closing');
      setTimeout(function () {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500);
    });
  }

  /* open modal */
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', async function (e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', async function (e) {
      await closeModal(closeBtn);
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', async function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        await closeModal(this);
      }
    });
  });
});

