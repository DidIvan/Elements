<!--Checkbox-->
function checking() {
    let checkbox = document.getElementById("one");
    if (checkbox.checked) {
        alert("checked")
    } else {
        alert("not checked")
    }

}

<!--Radiobuttons-->
function radioChecking() {
    let radiobutton = document.querySelectorAll('[name="group1"]');
console.log(radiobutton)
    for (let i = 0; i <radiobutton.length ; i++) {
        if (radiobutton[i].checked) {
            alert("radio checked " + i);
        }
    }

}