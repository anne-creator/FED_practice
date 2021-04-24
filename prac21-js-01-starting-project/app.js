const btn = document.querySelector('button');
const input = document.querySelector('input');
const listEl = document.querySelector('ul');

function addBtn() {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listEl.appendChild(li);
    input.value = ''; //set to defualt

}
btn.addEventListener('click', addBtn);