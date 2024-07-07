function addScore(score){
    let result;

if(score>=90){
    result='Selamat!Anda mendapatkan nilai A';
}
else if(score>=80 && score<=89){
    result='Anda mendapatkan nilai B';
}
else if(score>=70 && score<=79){
    result='Anda mendapatkan nilai C';
}
else if(score>=60 && score<=69){
    result='Anda mendapatkan nilai D';
}
else{
    result='Anda mendapatkan nilai E';
}
return result;
}

console.log(addScore(58));

const car={color:'red'}
console.log(car.color);
console.log(delete car.color);
console.log(car.color);

let a=5;
console.log(a+=3);
console.log(4>5?"hai":"hello");

for(let i=1;i<=11;i++){
    console.log("halo");
}

if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}

const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

console.log('Thank you');

const name = 'Dicoding';
const language = 'JavaScript';

console.log(`Hello $name. Welcome to $language!`);


function minimal(a,b){
	if(a < b){
      return a;}
	else if(b < a){
      return b;}
  	else{
    	return a;
    }
}
console.log(minimal(5,2));

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // Set a random chassis number
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
  }
   
  const car1 = new Car('BMW', 'red', 200);
  const car2 = new Car('Audi', 'blue', 220);
  const car3 = new Car('BMW', 'black', 250);
   
  console.log(car1);
  console.log(car2);
  console.log(car3);


class Makan{
    constructor(nama,lauk,minuman){
        this.nama=nama;
        this.lauk=lauk;
        this.minuman=minuman;
    }
    memakan(){
        console.log(`${this.nama} sedang memakan ${this.lauk} dan ${this.minuman}, dia sedang makan`);
    }
    meminum(){
        console.log(`${this.nama} sedang memakan ${this.lauk} dan ${this.minuman}, dia sedang minum`);
    }
    mengobrol(){
        console.log(`${this.nama} sedang memakan${this.lauk} dan ${this.minuman}, dia sedang mengobrol`);
    }
}
const nama1=new Makan('Salsa','tempe goreng','es teh');
const nama2=new Makan('Denis','soto','Boba tea');
const nama3=new Makan('Riska','bakso','lemon tea');

nama1.memakan();

console.log(nama1);



