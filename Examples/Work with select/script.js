function select() {
    var select = document.querySelector('#mySelect').selectedIndex;
    var options = document.querySelector('#mySelect').options;
    var selected = options[select].text;
    console.log(options);
    var h2 = document.querySelector('h2');
    h2.innerHTML=(`Selected element is ${selected}`);
}

function range() {
    rangeValue = document.querySelector('#myRange').value;
    var h3 = document.querySelector('h3');
    h3.innerHTML = rangeValue;
    h3.style.width = `${rangeValue}px`;
}