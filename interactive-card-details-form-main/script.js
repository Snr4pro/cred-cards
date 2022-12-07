function number() {
    const cardNumber = document.querySelector("#replacenum");
    const inputNumber = document.querySelector(".innumber");
    const inputValue = inputNumber.value;
    cardNumber.innerText = inputValue
}

function cardspace() {
    const carddigit = document.querySelector(".innumber").value;
    if(carddigit.length == 4 || carddigit.length == 9 || carddigit.length == 14){
        document.querySelector(".innumber").value = carddigit + " ";
        document.querySelector(".innumber").max = 1;
    }
}

function cName(){
    const cardName = document.getElementById("inname");
    const nameOutput = document.getElementById("replacename");
    const nameValue = cardName.value;
    nameOutput.innerText = nameValue;
}

function cMonth() {
    const inputMonth = document.getElementById("month");
    const outMonth = document.getElementById("mon");
    const monthValue = inputMonth.value + '/';
    outMonth.innerText = monthValue;
}

function cYear() {
    const inputYear = document.getElementById("year");
    const outYear = document.getElementById("yea");
    const yearValue = inputYear.value;
    outYear.innerText = yearValue;
}

function cVc() {
    const inputCvc = document.getElementById("cvc");
    const outCvc = document.getElementById("cvnumber");
    const cvcValue = inputCvc.value;
    outCvc.innerText = cvcValue;
}

function ThankYou(){
    const thanku = document.querySelector(".thankyou");
    const form = document.querySelector("form");
    const submitinfo = document.getElementById("submitinfo");
    submitinfo.onClick = form.style.display = 'none';
    thanku.style.display = 'flex';
    
}

submitinfo.addEventListener("click", function (e) {
    e.preventDefault();
})

function refresh() {
    const continueBtn = document.getElementById("continue");
    const thanku = document.querySelector(".thankyou");
    const form = document.querySelector("form");
    location.reload();
    /*continueBtn.onClick = thanku.style.display = 'none';
    form.style.display = 'flex';*/
}


