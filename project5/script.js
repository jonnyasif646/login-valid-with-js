function valid(){


    var email=document.getElementById('email');
    var pass=document.getElementById('pass');
    var valid=true

if(email.value ==""){

    valid=false
    document.getElementById('evalid').style.visibility="visible"
    document.getElementById('evalid').style.color='red'
    document.getElementById('email').style.border='3px solid red'

}else {

document.getElementById('email').style.border='3px solid green'
document.getElementById('evalid').innerHTML = '&#10004;';
}


if(pass.value ==""){

    valid=false
    document.getElementById('pvalid').style.visibility="visible"
    document.getElementById('pvalid').style.color='red'
    document.getElementById('pass').style.border='3px solid red'
}

else {
    
    document.getElementById('pass').style.border='3px solid green'
    document.getElementById('evalid').innerHTML = '&#10004;';
    }

  
return valid;

}