let Vatly;
let Hoahoc;
let Sinhhoc;

Vatly = prompt("nhập điểm vật lý");
Hoahoc = prompt("Nhập điểm hóa học");
Sinhhoc = prompt("Nhập điểm Sinh học");

let x = parseInt(Vatly);
let y = parseInt(Hoahoc);
let z = parseInt(Sinhhoc);
var total =x + y + z;
var average = (x + y + z) / 3;

document.write("điểm tổng là : " + total);
document.write('<br>');
document.write("điểm trung bình là : " + average);

