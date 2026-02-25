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

document.getElementById('choices-btn').addEventListener('click', () => {
    const camera1 = document.querySelector('input[name="camera1"]:checked').value;
    const camera2 = document.getElementById('camera2').value;
    document.getElementById('choices-result').textContent = 
        `You chose ${camera1} for #1 and ${camera2} for #2!`
})