
const leftPannel = document.querySelector('#left-panel')

fetch('/dashboard-left.html')
.then(res => res.text())
.then(result => {
    leftPannel.innerHTML = result;
})


const header = document.querySelector('#header');

fetch('/dashboard-header.html')
.then(res=> res.text())
.then(result => {
    header.innerHTML = result;
})