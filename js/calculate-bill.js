//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
console.log('it is connected');

const billStringElement = document.querySelector(".billString");
const calculateBtn = document.querySelector(".calculateBtn");
const newStyle = document.querySelector(".billTotal");

function calculateBtnClicked() {
    newStyle.classList.remove("warning");
    newStyle.classList.remove("danger");

    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call") {
            billTotal += 2.75;
        }
        else if (billItem === "sms") {
            billTotal += 0.75;
        }
    }
    newStyle.innerHTML = billTotal;
    if (billTotal >= 20 && billTotal<30) {
        newStyle.classList.add("warning");
    }
    else if (billTotal >= 30) {
        newStyle.classList.add("danger");
    }

}

calculateBtn.addEventListener('click', calculateBtnClicked);


