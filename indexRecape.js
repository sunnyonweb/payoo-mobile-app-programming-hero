document.getElementById('login-btn').addEventListener('click' ,function(e){
    e.preventDefault()
    const mobailNumber = 12345678910 ;
    const pin = 1234 ; 

    const mobailNumberValue = document.getElementById('mobail').value ;
    const mobailNumberValueConverted = parseInt(mobailNumberValue);

    const pinNumbervalue = document.getElementById('pin').value ;
    const pinNumberValueConverted = parseInt(pinNumbervalue);
    
    if( mobailNumberValueConverted === mobailNumber && pinNumberValueConverted === pin){
        window.location.href="./home.html"
    }
    else{
        alert('Invalid Number or Pin')
    }
})