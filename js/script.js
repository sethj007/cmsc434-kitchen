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

// Choice Page

document.getElementById('choices-btn').addEventListener('click', () => {
    const camera1 = document.querySelector('input[name="camera1"]:checked').value;
    const camera2 = document.getElementById('camera2').value;
    document.getElementById('choices-result').textContent = 
        `You chose ${camera1} for #1 and ${camera2} for #2!`
})

// TODO List

// Close button (x) on each item
const myNodelist = document.querySelectorAll("#myUL li");
for (let i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click close button to hide item
const close = document.getElementsByClassName("close");
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('close')) {
    const div = e.target.parentElement;
    div.style.display = "none";
  }
});

// Check mark on selected item
const list = document.querySelector('#myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create new list item when click Add button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}