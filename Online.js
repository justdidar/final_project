function btn1(){
    document.getElementById('D21').innerHTML = '<form action="Php.php"><label for=""><pre>FIRST NAME</pre></label><input type="text" name="fname" value=""><label for=""><pre>LAST NAME</pre></label><input type="text" name="lname" value=""></form>'
    document.getElementById('D1').innerHTML = '<pre>LOGIN INFORMATION (2/3)</pre>'
    document.getElementById('D3').innerHTML = '<button class="btn" onclick="btn2()">Next</button>'
}

function btn2(){
    document.getElementById('D21').innerHTML = '<form action="Php.php"><label for=""><pre>PHONE NUMBER</pre></label><input type="text" name="phone-number" value="" placeholder="+7 (777) 777 7777"><label for=""><pre>USERNAME</pre></label><input type="text" name="username" value=""></form>'
    document.getElementById('D1').innerHTML = '<pre>LOGIN INFORMATION (3/3)</pre>'
    document.getElementById('D3').innerHTML = '<a href="#"><button class="btn">Confirm</button></a>'
}