const ConfirmButtnEl = document.querySelector('.js-confirm-button-d');

const holderNameInputEl = document.querySelector('.js-card-name-input-d');

const holderNameError = document.getElementById('js-card-name-error-d');
console.log(holderNameError)

const nameOnCard = document.querySelector('.js-card-name-d');

ConfirmButtnEl.addEventListener('click', ()=>{
    validateNameInput();
});


function validateNameInput() {

    const cardName = holderNameInputEl.value;

    if (cardName === '') {
        holderNameError.style.visibility = 'visible';
        holderNameError.innerHTML = 'name is required';
        holderNameInputEl.classList.add('input-border-color');
    } else if (!cardName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        holderNameError.style.visibility = 'visible';
        holderNameError.innerHTML = 'first name and last name required';
        holderNameInputEl.classList.add('input-border-color')
    } else {
        holderNameError.style.visibility = 'hidden';
        holderNameInputEl.classList.remove('input-border-color');
        nameOnCard.innerHTML = cardName;
    }


}

///----------------------------------------->

const cardNumberInput = document.getElementById('js-card-num-input');

const cardNumberError = document.getElementById('js-card-number-error');

const numberOnCard = document.getElementById('js-card-number-d');

ConfirmButtnEl.addEventListener('click', ()=>{
    validateNumberInput();
});

let J = 0

cardNumberInput.addEventListener('input', ()=>{
    J++;
    
    let cardNumberD = cardNumberInput.value;

    if (J % 4 === 0 && cardNumberD.length < 16) {
        cardNumberInput.value += ' ';
    } 
})

function validateNumberInput() {

    cardNumberIn = cardNumberInput.value;

    let cleanedStringD = cardNumberIn.replaceAll(/\s/g,"");

    let string2NumberS = Number(cleanedStringD);
    
    if (cardNumberIn === '') {
        cardNumberError.style.visibility = 'visible';
        cardNumberError.innerHTML = "can't be blank";
        cardNumberInput.classList.add('input-border-color')
    } else if (isNaN(string2NumberS)) {
        cardNumberError.style.visibility = 'visible';
        cardNumberError.innerHTML = "wrong format";
        cardNumberInput.classList.add('input-border-color')
    } else {
        cardNumberError.style.visibility = 'hidden';
        cardNumberInput.classList.remove('input-border-color')
        numberOnCard.innerHTML = cardNumberIn;
    }

}

//------------------------------------------------------->

const expiryMonth = document.getElementById('js-exp-month-input');
const expiryYear = document.getElementById('js-exp-year-input');
const expiryDateError = document.getElementById('js-exp-date-error');
const expDateBack = document.getElementById('js-card exp-date-d');

function validateExpiryDate() {

    const expMonthValue = expiryMonth.value;
    const expYearValue = expiryYear.value;

    if (expMonthValue === '' && expYearValue === '') {
        expiryDateError.style.visibility = 'visible';
        expiryDateError.innerHTML = "can't be empty";
        expiryMonth.classList.add('expDate-border-color');
        expiryYear.classList.add('expDate-border-color'); 
     
    } else if (expMonthValue === '' || expYearValue === '') {
        expiryDateError.style.visibility = 'visible';
        expiryDateError.innerHTML = "can't be empty";
        expiryMonth.classList.add('expDate-border-color');
        expiryYear.classList.add('expDate-border-color');
    } else if (expYearValue < 23) {
        expiryDateError.style.visibility = 'visible';
        expiryDateError.innerHTML = "not a valid date";
        expiryYear.classList.add('expDate-border-color');
    } else if (expMonthValue > 12 || expMonthValue < 0) {
        expiryDateError.style.visibility = 'visible';
        expiryDateError.innerHTML = "not a valid date";
        expiryMonth.classList.add('expDate-border-color');
    } else {
        expiryDateError.style.visibility = 'hidden';
        expiryDateError.innerHTML = "not a valid date";
        expiryMonth.classList.remove('expDate-border-color');
        expiryYear.classList.remove('expDate-border-color');
        expDateBack.innerHTML = `${expMonthValue}/${expYearValue}`;
    }

}

ConfirmButtnEl.addEventListener('click', ()=>{
    validateExpiryDate();
});

//------------------------------------------------------->

const cvvInput = document.getElementById('js-cvv-input');
const cvvErrorMsgg = document.getElementById('js-cvv-error');
const backCVV = document.getElementById('js-d-cvv');
const cardDetailsDEl = document.getElementById('desktop-card-details');

function validateCVV() {
    cvvValue = cvvInput.value;

    if (cvvValue === '') {
        cvvErrorMsgg.style.visibility = 'visible';
        cvvErrorMsgg.innerHTML = "can't be empty";
        cvvInput.classList.add('cvv-border-color')
    } else if (isNaN(cvvValue)) {
        cvvErrorMsgg.style.visibility = 'visible';
        cvvErrorMsgg.innerHTML = "invalid input";
        cvvInput.classList.add('cvv-border-color')
    } else {
        cvvErrorMsgg.style.visibility = 'hidden';
        cvvInput.classList.remove('cvv-border-color');
        backCVV.innerHTML = cvvValue;

        cardDetailsDEl.innerHTML = `
        
        <div class="desktop-thank-you">
            <div>
                <img class="
                complete-icon" src="images/icon-complete.svg" alt="">
            </div>

            <h2 class="thank-you">THANK YOU!</h2>
            <P class="added-text">We've added your card details</P>
            <button id="confirm" class="js-continue-button">Continue</button>
        </div>
        `
    }

    const continueBttnEl = document.querySelector('.js-continue-button').addEventListener('click', ()=>{
        location.reload();
    })
}

ConfirmButtnEl.addEventListener('click', ()=>{
    validateCVV();
});