function select() {
    let select = document.getElementById('select');
    let index = select.selectedIndex;
    let options = select.options;
    console.log(index);
    console.log(options);
    console.log('selected option ' + options[index].text);
}

function range() {
    let range = document.getElementById('range');
    let inputValue = document.getElementById('inputValue');
    inputValue.innerHTML = range.value;

    let inputOne = document.getElementById('inputOne');
    inputOne.value = range.value;
}