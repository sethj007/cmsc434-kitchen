const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

// change tabs (visible page) by toggling 'active' class
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});