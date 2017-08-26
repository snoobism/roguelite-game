var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillRect(x,y,width,height)
//x si y au ca origine coltul din stanga sus
// c.beginPath();
// c.fillStyle = 'blue';

// c.rect(100,100,100,100);
// c.strokeStyle= 'red';
// c.stroke();
// c.fill();


// c.beginPath();
//c.moveTo(x,y);   <--- punct initial
//c.lineTo(x,y);	<--- punct urmator
//c.stroke();		<--- creaza linia
// c.moveTo(50,300);
// c.lineTo(300,50);
// c.lineTo(1000,300);
// c.strokeStyle = 'red';
// c.stroke();



//c.arc(x,y,raza,unghi_start,unghi_final,sens_de_creare)  <--- functioneaza cu radiani


// c.beginPath();

// c.arc(500,500,100,0,Math.PI*2,1);
// c.fillStyle='orange';
// c.strokeStyle='green';
// c.stroke();
// c.fill();



function Circle(x, y, v_x, v_y, r) { // <--- declara clasa

    this.x = x;
    this.y = y;
    this.v_x = v_x;
    this.v_y = v_y;
    this.r = r; //<--- declara atribute


    this.draw = function () { // <--- declara functia de actualizare/creare
        c.beginPath(); // <--- declara inceperea unei noi constructii
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false); // <--- creaza un cerc
        c.fillStyle = 'red'; // <--- il coloreaza
        c.fill();


    }
    this.update = function () { // <--- declara functia de schimbare
        this.x += this.v_x; // <--- mareste coordonata obiectului cu o unitate 
        this.y += this.v_y;
        if (this.x < this.r || this.x + this.r > innerWidth) {
            this.v_x = this.v_x * (-1);
        }
        if (this.y < this.r || this.y + this.r > innerHeight) {
            this.v_y = this.v_y * (-1);
        }
        this.draw(); // <--- actualizeaza coordonatele
    }
}

var circleArray = [];

for (var i = 0; i <= 150; i++) {
    circleArray.push(new Circle(Math.random() * innerWidth * 0.9, Math.random() * innerHeight * 0.9, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, Math.random() * 40));
}

function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i <= circleArray.length - 1; i++) {
        circleArray[i].update();
    }

}
animate();
