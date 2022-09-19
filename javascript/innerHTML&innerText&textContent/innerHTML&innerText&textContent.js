const container = document.querySelector('#container');
const inputDiv = document.querySelector('#inputDiv');

inputDiv.children[0].addEventListener('click', () => {
    alert(container.innerHTML);
})

inputDiv.children[1].addEventListener('click', () => {
    alert(container.innerText);
})

inputDiv.children[2].addEventListener('click', () => {
    alert(container.textContent);
})