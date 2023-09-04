const confirmBtnEl = document.querySelector('.m-confirm-button');

const nameInputEl = document.querySelector('.m-card-name-input');

const nameErrorMsg = document.querySelector('.m-card-name-error');

const cardName = document.querySelector('.m-card-name');

confirmBtnEl.addEventListener('click', ()=>{
    confirmNameMobile()
})

function confirmNameMobile() {
    const userName = nameInputEl.value;

    if (userName === '') {
        nameErrorMsg.style.visibility = 'visible';
        nameErrorMsg.innerHTML = 'name is required';
    } else if (!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameErrorMsg.style.visibility = 'visible';
        nameErrorMsg.innerHTML = 'write full name';
    } else {
        nameErrorMsg.style.visibility = 'hidden';
        cardName.innerHTML = userName.toUpperCase();
        //nameInputEl.value = '';
    }
}

////----------------------------------->


const cardNumber = document.querySelector('.m-card-number');

const cardInputEl = document.querySelector('.m-card-num-input');

const cardErrorMsg = document.querySelector('.m-card-number-error');

confirmBtnEl.addEventListener('click', ()=>{
    cardNumberMobile();
})

let i = 0

cardInputEl.addEventListener('input', ()=>{
    i++;
    
    let cardNumberl = cardInputEl.value;

    if (i % 4 === 0 && cardNumberl.length < 16) {
        cardInputEl.value += ' ';
    } 
})



function cardNumberMobile() {
    const userCardNumber = cardInputEl.value;

    let cleanedString = userCardNumber.replaceAll(/\s/g,"");

    let string2Number = Number(cleanedString);

    //console.log(isNaN(cleanedString))
    
    if (userCardNumber === '') {
        cardErrorMsg.style.visibility = 'visible';
        cardErrorMsg.innerHTML = 'cannot be empty';
    } else if (isNaN(string2Number)) {
        cardErrorMsg.style.visibility = 'visible';
        cardErrorMsg.innerHTML = 'wrong format';
    } else {
        cardErrorMsg.style.visibility = 'hidden';
        cardNumber.innerHTML = userCardNumber;
    }
  
}

////----------------------------------->




const expMonthInput = document.querySelector('.js-exp-date-input');

const expYearInput = document.querySelector('.js-exp-month-input');

const expDateErrorMsg = document.querySelector('.js-exp-date-error');

const cardExpireDate = document.querySelector('.js-card-exp-date')


confirmBtnEl.addEventListener('click', ()=>{
    cardExpDate();
})

function cardExpDate() {
    const expireDate = expMonthInput.value;
    const expireYear = expYearInput.value;

    if (expireDate === '' && expireYear === '') {
        expDateErrorMsg.style.visibility = 'visible';
        expDateErrorMsg.innerHTML = "can't be empty";
    } else if (expireDate === '' || expireYear === '') {
        expDateErrorMsg.style.visibility = 'visible';
        expDateErrorMsg.innerHTML = "can't be empty";
    } else if (expireYear < 23) {
        expDateErrorMsg.style.visibility = 'visible';
        expDateErrorMsg.innerHTML = "not a valid date";
    } else if (expireDate > 12 || expireDate < 0) {
        expDateErrorMsg.style.visibility = 'visible';
        expDateErrorMsg.innerHTML = "not a valid date";
    } else {
        expDateErrorMsg.style.visibility = 'hidden';
        cardExpireDate.innerHTML = `${expireDate}/${expireYear}`;
    }

}

///-------------------------------------->

const cvvInputEl = document.querySelector('.js-cvv-input');

const cvvErrorMsg = document.querySelector('.js-cvv-error');

const cardDetailsEl = document.querySelector('.card-details');

const cardBackCVV = document.querySelector('.js-cvv')


confirmBtnEl.addEventListener('click', ()=>{
    confirmCVV();
})


function confirmCVV() {
    const cvvInput = cvvInputEl.value;

    if (cvvInput === '') {
        cvvErrorMsg.style.visibility = 'visible';
        cvvErrorMsg.innerHTML = "can't be empty";
    } else if (isNaN(cvvInput)) {
        cvvErrorMsg.style.visibility = 'visible';
        cvvErrorMsg.innerHTML = "invalid";
    } else {
        cvvErrorMsg.style.visibility = 'hidden';
        cardBackCVV.innerHTML = cvvInput;
        cardDetailsEl.innerHTML = `
        
        <div class="mobile-thank-you">
            <div>
                <img class="
                complete-icon" src="images/icon-complete.svg" alt="">
            </div>

            <h2 class="thank-you">THANK YOU!</h2>
            <P class="added-text">We've added your card details</P>
            <button class="continue-button">Continue</button>
        </div>
        `
    }

    const continueBtnEl = document.querySelector('.js-continue-button').addEventListener('click', ()=>{
        location.reload();
    })
}

