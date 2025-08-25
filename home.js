
const validpin = 1234;

// function to get input values

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    
    return inputFieldValueNumber ;
}

function getInputValue(id){
    const inputField = document.getElementById(id) ;
    const inputFieldValue = inputField.value ;
    return inputFieldValue ;
}

function getInnertext(id){
    const element = document.getElementById(id)
    const elementInnertext = element.innerText
    const elementValueNumber = parseInt(elementInnertext)
    
    return elementValueNumber ;
}

function setInnertext(value){
    const availableBallanceElement = document.getElementById('available-ballance')
    availableBallanceElement.innerText = value ;
}



// add Money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault() ;

    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value ;

    const Amount = getInputValueNumber('add-amount');

    const pinNumber = getInputValueNumber('add-pin');

    const pin =parseInt(pinNumber)

    const availableBallance = getInnertext('available-ballance') ;


    if(accountNumber.length < 11){
        alert('please provide valid account Number')
        return;
    }
    if(pin !==validpin){
        alert('Please Provide Valid Pin Number')
        return;
    }

    
    const totalNewBallance = Amount + availableBallance ;

    setInnertext(totalNewBallance) ;


    // after add money
    document.getElementById('bank').value = '';
    document.getElementById('account-number').value = '';
    document.getElementById('add-amount').value = '';
    document.getElementById('add-pin').value = '';

    
    alert('Money added successfully! Your new balance is: ' + totalNewBallance);
})


// Cashout feature
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault() ;

    const amount = getInputValueNumber('withdraw-amount');

    const availableBallance = getInnertext('available-ballance');

    const pinNumber = document.getElementById('w-pin').value ;

    const agentNumber = document.getElementById('agent-number').value ;

    const pin =parseInt(pinNumber)

    if(agentNumber.length < 11){
        alert('please provide valid account Number')
        return;
    }
    if(pin !==validpin){
        alert('Please Provide Valid Pin Number')
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert('Please provide a valid withdrawal amount');
        return;
    }

    const totalNewBallance = availableBallance - amount ;

    setInnertext(totalNewBallance);

    // after Withdraw

    document.getElementById('withdraw-amount').value = '';
    document.getElementById('w-pin').value = '';
    document.getElementById('agent-number').value = '';

    
    alert('Withdrawal successful! Your new balance is: ' + totalNewBallance);
})


// Transfer Money feature







// Toggoling Features

// for add money
document.getElementById('money-btn').addEventListener('click', function(){
    const
})

// for Cahout
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
    document.getElementById('transfer-money-parent').style.display='none';
})

// for transfer money
document.getElementById('trasfer-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('transfer-money-parent').style.display='block';

})