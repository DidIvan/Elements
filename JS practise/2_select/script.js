function select() {
    let select = document.getElementById('select');
    let index = select.selectedIndex;
    let options = select.options;
    console.log(index);
    console.log(options);
    console.log('selected option ' + options[index].text);
}