
const validpin = 1234;
// add Money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault() ;

    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value ;

    const Amount = parseInt(document.getElementById('add-amount').value) ;

    const pinNumber = document.getElementById('add-pin').value ;

    const pin =parseInt(pinNumber)

    const availableBallance = parseInt(document.getElementById('available-ballance').innerText) ;


    if(accountNumber.length < 11){
        alert('please provide valid account Number')
        return;
    }
    if(pin !==validpin){
        alert('Please Provide Valid Pin Number')
        return;
    }

    
    const totalNewBallance = Amount + availableBallance ;

    document.getElementById('available-ballance').innerText = totalNewBallance ;
})


// Cashout feature
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault() ;

    const amount = parseInt(document.getElementById('withdraw-amount').value)

    const availableBallance = parseInt(document.getElementById('available-ballance').innerText)

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

    const totalNewBallance = availableBallance - amount ;

    document.getElementById('available-ballance').innerText = totalNewBallance;
})





// Toggoling Features

// for add money
document.getElementById('money-btn').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})

// for Cahout
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
})