function getDetails() {
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var roll = document.getElementById("roll").value;
    var clas = document.getElementById("class").value;
    var sub = document.getElementById("sub").value;
    var registration = document.getElementById("registration").value;
    registration = Math.random();

    document.getElementById("name1").innerHTML = name;
    document.getElementById("fname1").innerHTML = fname;
    document.getElementById("roll1").innerHTML = roll;
    document.getElementById("class1").innerHTML = clas;
    document.getElementById("sub1").innerHTML = sub;
    document.getElementById("reg1").innerHTML = registration;


}