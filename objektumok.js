/*
    Az objektumok gyakorlatilag 
    kulcs-értékpárok
*/

//const brand = "";

const Car = {
    //property -> kulcs
    //value -> érték
    brand:"Opel",
    type:"Astra",
    color:"blue",
    year:2006,
    //az objktumoknak készíthetünk metódusokat, amik függvények az objektumon belül (kétféle színtaktika)
    goForward(speed) {
        //függvényen belül el szeretnén érni az objektum egyik kulcsát pl. brand-at
        //console.log(brand);
        /*
        és kivül meghívjuk a Car-ból a goForwardot, akkor kapunk egy hibaüzenetet, hogy brand is not defined
        azért, mert ha brandhez akarunk hozzáférni akkor az interpreterem vagy egy lokális változót vár -> 
        */
       //const brand = "";
       //vagy egy globális változó ugyanazon a szinten definiálva, ahol a Car van (car felett a változó)
       /*
       Ha mi a Car-on belüli brand-re, type-ra vagy goBackward akarunk hívatkozni akkor a this kulcsszót kell használnunk, 
       azért, mert a this az maga az objektum ->
       */
    console.log(this);
      /*
      this-vel visszakaptuk az egész objektumot
      {
        brand: 'Opel',
        type: 'Astra',
        color: 'blue',
        year: 2005,
        goForward: [Function: goForward],
        goBackward: [Function: goBackward]        
    }
    */
    console.log(this.brand);//Opel
    /*
    Tehát a this az maga az objektum és az objektomon belülről, úgy tudjuk elérni az objektumot, hogy this 
    úgy is müködik, hogy Car, simán az objektumon belül az objektumra magára is tudunk hivatkozni ezzel a névvel, hogy Car
    */
    console.log(Car);
    /*
    így is visszakaptuk az objektumot, ezzel nincsen gond, csak this-vel szoktuk
    {
        brand: 'Opel',
        type: 'Astra',
        color: 'blue',
        year: 2005,
        goForward: [Function: goForward],
        goBackward: [Function: goBackward]
    }
    */
    console.log(`A(z) ${this.brand} márkájú és ${this.type} típusú autó ${speed} km/h-val megy előre.`);
    /*
    A metódusok fogadhatnak paraméterek -> goForward(speed)
    és ha, így meghívjuk a Car.goForward-ot ls paraméterként megadjuk neki mondjuk a 80-at -> 
    A(z) Opel márkájú és Astra típusú autó 80 km/h-val megy előre.
    */
    },
    goBackward: function(speed) {
        console.log(`A(z) ${this.brand} márkájú és ${this.type} típusú autó ${speed} km/h-val megy hátra.`);
    }
};

Car.goForward(80);//Carban lévő goForwardnak a meghívása
/*
Ezekhez a kulcsokhoz kívülről hozzá tudunk férni és tudjuk őket módosítani 
és műveleteket végezni velük 
*/
console.log(Car.brand);//Opel

/*
Meg tudjuk változtatni a különböző jellemzőket 
*/ 
Car.year = 2005;
//innentől kezdve a year értéke 2005 lesz
console.log(Car.year);//2005
console.log(Car);//{ brand: 'Opel', type: 'Astra', color: 'blue', year: 2005 }

/*
Ilyen objektumokból fog felépülni nekünk ez a DOM (Document Object Model)
*/

const entries = Object.entries(Car);
console.log(entries);
/*
[
  [ 'brand', 'Opel' ],
  [ 'type', 'Astra' ],
  [ 'color', 'blue' ],
  [ 'year', 2005 ],
  [ 'goForward', [Function: goForward] ],
  [ 'goBackward', [Function: goBackward] ]
]

ez hasznos ha végig akarunk menni az elemein ennek az objektumnak 
*/
