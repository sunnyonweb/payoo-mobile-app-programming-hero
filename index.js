// login button function
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault()
    const mobaileNumber = '01643963952' ;
    const pinNumber = '1234' ;
    const mobaileNumberValue = document.getElementById('mobail').value ;

    const pinNumberValue = document.getElementById('pin').value ;

    if( mobaileNumberValue=== mobaileNumber && pinNumberValue === pinNumber){
        window.location.href = './home.html'
    }
    else{
        alert("Invalid Number or Pin!");
    }
});
