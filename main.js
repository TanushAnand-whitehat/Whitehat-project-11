canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.PNG";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = upload_backdrop;
    background_image_tag.src = background_image;

    Car1_tag = new Image();
    Car1_tag.onload = upload_car1;
    Car1_tag.src = car1_image;

    Car2_tag = new Image();
    Car2_tag.onload = upload_car2;
    Car2_tag.src = car2_image;
}
function upload_backdrop() {
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}
function upload_car1() {
    ctx.drawImage(Car1_tag, car1_x, car1_y, car1_width, car1_height);
}
function upload_car2() {
    console.log(car2_tag, car2_x, car2_y, car2_width, car2_height);
    ctx.drawImage(car2_tag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
if(keypressed == '38') {
up();
}
if(keypressed == '40') {
down();
}
if(keypressed == '37') {
left();
}
if(keypressed == '39') {
right();
}

if(keypressed == '87') {
    W();
    }
    if(keypressed == '83') {
    S();
    }
    if(keypressed == '65') {
    A();
    }
    if(keypressed == '68') {
    D();
    }
}

function up() {
if(car1_y >= 0) {
car1_y = car1_y - 10;
upload_backdrop();
upload_car1();
upload_car2();
}
}
function W() {
    if(car2_y >= 0) {
    car2_y = car2_y - 10;
    upload_backdrop();
    upload_car1();
    upload_car2();
    }
    }

function down() {
    if(car1_y <= 500) {
    car1_y = car1_y + 10;
    upload_backdrop();
    upload_car1();
    upload_car2();
    }
    }
    function S() {
        if(car2_y <= 500) {
        car2_y = car2_y + 10;
        upload_backdrop();
        upload_car1();
        upload_car2();
        }
        }

    function left() {
        if(car1_x >= 0) {
        car1_x = car1_x - 10;
        upload_backdrop();
        upload_car1();
        upload_car2();
        }
        }
        function A() {
            if(car2_x >= 0) {
            car2_x = car2_x - 10;
            upload_backdrop();
            upload_car1();
            upload_car2();
            }
            }

        function right() {
            if(car1_x <= 700) {
            car1_x = car1_x + 10;
            upload_backdrop();
            upload_car1();
            upload_car2();
            }
            }
            function D() {
                if(car2_x <= 700) {
                car2_x = car2_x + 10;
                upload_backdrop();
                upload_car1();
                upload_car2();
                }
                }

                
