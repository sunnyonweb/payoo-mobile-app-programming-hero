
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

// function to toggole
function handleToggle(id){
     const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display= 'block' ;
}

// active button
function activeBtn(id){
    const formBtns =document.getElementsByClassName('form-btn') ;
    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]')
}



// add Money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault() ;

    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value ;

    const amount = getInputValueNumber('add-amount');
    if(isNaN(amount) || amount <= 0){
        alert('Invalid Amount')
        return;
    }

    const pinNumber = getInputValueNumber('add-pin');

    const pin =parseInt(pinNumber)

    const availableBallance = getInnertext('available-ballance') ;


    if(accountNumber.length !== 11){
        alert('please provide valid account Number')
        return;
    }
    if(pin !==validpin){
        alert('Please Provide Valid Pin Number')
        return;
    }

    
    const totalNewBallance = amount + availableBallance ;

    document.getElementById('available-ballance').innerText = totalNewBallance ;


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

    

    if (isNaN(amount) || amount <= 0) {
        alert('Please provide a valid withdrawal amount');
        return;
    }

    const availableBallance = getInnertext('available-ballance');

    if (amount > availableBallance) {
    alert('Your balance is insufficient.');
    return;
    }

    const pinNumber = document.getElementById('w-pin').value ;

    const agentNumber = document.getElementById('agent-number').value ;

    const pin =parseInt(pinNumber)

    if(agentNumber.length !== 11){
        alert('please provide valid account Number')
        return;
    }
    if(pin !==validpin){
        alert('Please Provide Valid Pin Number')
        return;
    }


    const totalNewBallance = availableBallance - amount ;

    document.getElementById('available-ballance').innerText = totalNewBallance;

    // after Withdraw

    document.getElementById('withdraw-amount').value = '';
    document.getElementById('w-pin').value = '';
    document.getElementById('agent-number').value = '';

    
    alert('Withdrawal successful! Your new balance is: ' + totalNewBallance);
})

// trasfer money Features

document.getElementById('t-btn').addEventListener('click',function(e){
    e.preventDefault() ;

    const amount = getInputValueNumber('transfer-amount');

    

    if (isNaN(amount) || amount <= 0) {
        alert('Please provide a valid amount');
        return;
    }

    const availableBallance = getInnertext('available-ballance');

    if (amount > availableBallance) {
    alert('Your balance is insufficient.');
    return;
    }

    const pinNumber = document.getElementById('t-pin').value ;

    const userNumber = document.getElementById('u-number').value ;

    const pin =parseInt(pinNumber)

    if(userNumber.length !== 11){
        alert('please provide valid account Number')
        return;
    }
    if(pin !==validpin){
        alert('Please Provide Valid Pin Number')
        return;
    }


    const totalNewBallance = availableBallance - amount ;

    document.getElementById('available-ballance').innerText = totalNewBallance;

    // after transfer

    document.getElementById('transfer-amount').value = '';
    document.getElementById('t-pin').value = '';
    document.getElementById('u-number').value = '';

    
    alert('Transfer Money successful! Your new balance is: ' + totalNewBallance);
})






// Toggoling Features

// for add money
document.getElementById('money-btn').addEventListener('click', function(e){
    handleToggle('add-money-parent')
    activeBtn('money-btn')
})

// for Cahout
document.getElementById('cash-out-btn').addEventListener('click', function(e){
    handleToggle('cash-out-parent')
    activeBtn('cash-out-btn')
})

// for Transfer money
document.getElementById('transfer-btn').addEventListener('click', function(e){
    handleToggle('transfer-money-parent')
    activeBtn('transfer-btn')
})

// for get Bonus 
document.getElementById('bonus-btn').addEventListener('click', function(e){
    handleToggle('get-bonus-parent')
    activeBtn('bonus-btn')
})




// aita copy from chatgpt


const validCoupons = {
  'BONUS50': 50,
  'FREE100': 100,
  'DISCOUNT20': 20
};

document.getElementById('B-btn').addEventListener('click', function(e){
    e.preventDefault();

    const couponInput = document.getElementById('bonus-amount').value.trim().toUpperCase();
    const availableBalance = getInnertext('available-ballance'); // আগের মতোই getInnertext ফাংশন ব্যবহার করলাম

    if (!couponInput) {
        alert('Please enter a coupon code');
        return;
    }

    if (!(couponInput in validCoupons)) {
        alert('Invalid coupon code');
        return;
    }

    const bonusAmount = validCoupons[couponInput];
    const newBalance = availableBalance + bonusAmount;

    document.getElementById('available-ballance').innerText = newBalance;

    // কুপন ইনপুট ফিল্ড ক্লিয়ার
    document.getElementById('bonus-amount').value = '';

    alert(`Congrats! Your bonus ₹${bonusAmount} has been added. New balance: ₹${newBalance}`);
});