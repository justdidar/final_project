function btn1(){
    document.getElementById('D21').innerHTML = '<form action="Php.php"><br><label for="" class="ll1">First Name</label><input type="text" id="lb1" name="fname" value=""><br><br><br><label for="">Last Name</label><input type="text" id="lb2" name="lname" value=""></form>'
    document.getElementById('D1').innerHTML = 'LOGIN INFORMATION (2/3)'
    document.getElementById('D3').innerHTML = '<button class="btn1" onclick="back1()">Back</button><button class="btn" onclick="btn2()">Next</button>'
}

function btn2(){
    document.getElementById('D21').innerHTML = '<form action="Php.php"><br><label for="" class="ll2">Phone Number</label><input type="number" name="phone-number" value="" placeholder="+7 777 777 7777"><br><br><br><label for="">Username</label><input type="text" name="username" value=""></form>'
    document.getElementById('D1').innerHTML = 'LOGIN INFORMATION (3/3)'
    document.getElementById('D3').innerHTML = '<button class="btn1" onclick="back2()">Back</button><a href="mainpage.html"><button class="btn">Confirm</button></a>'
}



function back1(){
    document.getElementById('D21').innerHTML = '<form action="Php.php"><br><label for="">Email</label><input type="text" name="Email" value="" placeholder="12345678@gmail.com"><br><br><br><label for="">Password</label><input type="password" name="Password" value=""></form>'
    document.getElementById('D1').innerHTML = 'LOGIN INFORMATION (1/3)'
    document.getElementById('D3').innerHTML = '<button class="btn" onclick="btn1()">Next</button>'
}

function back2(){
    document.getElementById('D21').innerHTML = '<form action="Php.php"><br><label for="" class="ll1">First Name</label><input type="text" name="fname" value=""><br><br><br><label for="">Last Name</label><input type="text" name="lname" value=""></form>'
    document.getElementById('D1').innerHTML = 'LOGIN INFORMATION (2/3)'
    document.getElementById('D3').innerHTML = '<button class="btn1" onclick="back1()">Back</button><button class="btn" onclick="btn2()">Next</button>'
}

