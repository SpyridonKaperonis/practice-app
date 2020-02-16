function calc(){
    document.getElementById("error").innerHTML="";
    document.getElementById("total").style.borderColor = "grey";
    document.getElementById("rate").style.borderColor = "grey";
    let totalprice = parseFloat(document.getElementById('total').value);
    let rate = parseFloat(document.getElementById('rate').value);
    if(isNaN(rate)){
        rate = 0.0;
        document.getElementById("rate").style.borderColor = "red";
    }
    if(isNaN(totalprice)){
        document.getElementById("error").innerHTML = "Enter an integer value."
        document.getElementById("total").style.borderColor = "red";
    
    }

    let tip = parseFloat((totalprice) * (parseFloat(rate)) / 100);
    let tax = parseFloat((totalprice * 5.5)/100);
    let grandtotal = parseFloat(tip) + parseFloat(tax) + parseFloat(totalprice);

    if(isNaN(tax)){
        document.getElementById("tax").innerHTML = "$0.00";
    }
    else{
        document.getElementById("tax").innerHTML = "$" + tap.toFixed(2);
    }
    if(isNaN(tip)){
        document.getElementById("tip").innerHTML = "$0.00";
    }
    else{
        document.getElementById("tip").innerHTML = "$" + tip.toFixed(2);
    }
    if(isNaN(grandtotal)){
        document.getElementById("grandTotal").innerHTML = "$0.00";
    }
    else{
        document.getElementById("grandTotal").innerHTML = "$"+ grandtotal.toFixed(2);
    }
}
