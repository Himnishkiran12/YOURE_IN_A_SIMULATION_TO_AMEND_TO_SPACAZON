canvas = document.getElementById("caanvaas");
ctx = canvas.getContext("2d");
var an = 0;
var na = 4;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
document.getElementById("abe_yaar").innerHTML = "WELCOME TO SPACAZON DRONES LTD. ONE OF THE DRONES HAS LOST IT'S SELF-PILOT AI, SO YOU NEED TO DRIVE IT MANUALLY. GOOD LUCK.";
back_image = "SPACAZON_SIM1.jpeg";
rover_image = "https://th.bing.com/th/id/R.ef5b17be42a6a4fcfc58c0fe790e17b9?rik=3caPrDcxUsxHig&riu=http%3a%2f%2f3.bp.blogspot.com%2f-cg1jtrxaZ8Y%2fUfl5SmFUVaI%2fAAAAAAAAAzY%2fKBxNVcMmOB0%2fs1600%2fF5S4.png&ehk=lw2O63Ra0%2fk5YYnlfrwgofPZQTARBh0E2SaIvFYWS%2fQ%3d&risl=&pid=ImgRaw&r=0";
rover_x = 600;
rover_y = 500;
rover_h = 90;
rover_w = 70;

function aed() {
    back_img = new Image();
    back_img.onload = uploadBackground;
    back_img.src = back_image;
    rover_img = new Image()
    rover_img.onload = uploadrover;
    rover_img.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(back_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_w, rover_h);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("U P");
    }
    if (keyPressed == '40') {
        down();
        console.log("D O W N");
    }
    if (keyPressed == '37') {
        left();
        console.log("L E F T");
    }
    if (keyPressed == '39') {
        right();
        console.log("R I G H T");
    }
    if (rover_x == 60 && rover_y == 250 && a == 0) {
        a = 1;
        an = an + 1;
        na = na - 1;
        document.getElementById("abe_yaar").innerHTML = an + " DOWN," + na + " TO GO";
        console.log(an + " DOWN," + na + " TO GO");
    }
    if (rover_x == 370 && rover_y == 270 && b == 0) {
        b = 1;
        an = an + 1;
        na = na - 1;
        document.getElementById("abe_yaar").innerHTML = an + " DOWN," + na + " TO GO";
        console.log(an + " DOWN," + na + " TO GO");
    }
    if (rover_x == 700 && rover_y == 230 && c == 0) {
        c = 1;
        an = an + 1;
        na = na - 1;
        document.getElementById("abe_yaar").innerHTML = an + " DOWN," + na + " TO GO";
        console.log(an + " DOWN," + na + " TO GO");
    }
    if (rover_x == 1020 && rover_y == 260 && d == 0) {
        d = 1;
        an = an + 1;
        na = na - 1;
        document.getElementById("abe_yaar").innerHTML = an + " DOWN," + na + " TO GO";
        console.log(an + " DOWN," + na + " TO GO");
    }
    if (an == 4 && na == 0) {
        document.getElementById("abe_yaar").innerHTML = "WELL DONE, YOU'VE DONE GREAT IN THIS SIM...UH I MEAN THE DRONE JOB, SEE YOU NEXT TIME OR YOU CAN DO THIS AGAIN BY REFRESHING THE PAGE. OR JUST PLAY WITH THE DRONE, BECAUSE IT'S SO FUN TO PLAY";
        console.log("WELL DONE, YOU'VE DONE GREAT IN THIS SIM...UH I MEAN THE DRONE JOB, SEE YOU NEXT TIME OR YOU CAN DO THIS AGAIN BY REFRESHING THE PAGE. OR JUST PLAY WITH THE DRONE, BECAUSE IT'S SO FUN TO PLAY");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 507) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 1165) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}