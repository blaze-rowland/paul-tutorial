const state = {};

// Initialize Layout
function initLayout() {
  const els = {
    dropdownBtns: document.querySelectorAll('a[data-dropdown'),
  };

  function createDropDowns() {
    function toggleDropdown(menu) {
        if (
          menu.style.display === 'none' || 
          menu.style.display === ''
        ) {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
    }
  
    els.dropdownBtns.forEach(el => {
      el.addEventListener('click', () => {
        const menu = document.getElementById(el.dataset.dropdown);
        toggleDropdown(menu);
      });
    });
  }

  createDropDowns();
}

// Initialize Application
function init() {
  initLayout();
}

init();