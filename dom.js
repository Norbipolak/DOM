/*
dom.js-re hivatkozunk ai index.html-ben->
<script src="dom.js"></script>
*/

/*
A Document Object Modelt a document nevű objektum reprezentálja
ez az, aminek a segítségével el tudjuk érni a dokumentumunkat 
*/
console.log(document);//a böngésző console-jában teljesen leképezte az index HTML-t 
/*
Mi van a document nevű objektumunkban -> minden ami a html-ünkben
és a document objektum rendelkezik mindenféle tulajdonságokkal és metódusokkal, amiker tudunk használni,
hogyha szeretnénk hozzáférni a DOM-hoz pl.getElementById -> 
egy olyan metódus, ami Id alapján menti le nekünk a DOM-nak az egyes elemeit objektumokban
const btn1_1 egy objektum lesz 
*/ 

//getElementById metódussal lementjük btn-1 id-val rendelkező a gombot 
const btn1_1 = document.getElementById("btn1");//objektum 
console.log(btn1_1);//null
/*
Miért null ->
Akkor szokott null lenni egy objuktumnak az értéke ha üres, jelen esetben ha nem találja meg az adott 
tag-et, html elemet 
de miért nem találja meg ha ott van, azt írtuk be, hogy btn1, ami ott van
-> 
azért nem müködik ez a kód, mert a dokumentumoknak, az index.html vagy minden html fájlnak a betöltése felülről lefelé 
következik és amikor hivatkozunk a dom.js-re és betöltjük azt, akkor a dokumentumnak, csak az a része létezik, ami 
felette van, ezért a javascript mindig csak azt látja a dokumetumból, ami felette van 
ha szeretnénk, hogy mindent lásson
-> 
<script src="dom.js"></script> a html dokumentum alján kell hivatkozni rá 
így viszont már a böngésző konzolján láthatjuk -> 
<button id="btn1">Nyomd meg!</button>
*/

//le lehet másképpen is menteni ezt a gombot -> querySelector metódus segítségével 
const btn1_2 = document.querySelector("#btn1");

/*
A querySelector annyivel tud többet a getElementById-nél, hogy ő nem csak id, hanem 
class alapján tag-név, name alapján stb. jellemző alapján képes menteni a documentumból 
ahhoz, hogy id alapján férjünk hozzá a buttonünkhőz, abban az esetben 
-> 
#
azért, mert az id-t a css-ben #-vel jelöljük 
#btn1-vel a querySelectorban ugyanugy visszakapjuk a buttonunkat ebben a másik változóban
-> <button id="btn1">Nyomd meg!</button>
*/
console.log(btn1_2);

/******************************************************************************************************************************************/

/*
Hogyan tudunk class alapján hozzáférni -> 
class az annyiban más az id-tól, hogy a class az osztályba sorolást jelent, ami annyit tesz, hogy a class
nem egy egyedi azonosító, azt sok osztálynak megadhatjuk és besorolhatjuk a tag-eket több osztályba is

létrehozunk 3 div-et, mindegyiket azzal a class-val, hogy div
és megprobálunk class alapján menteni, akkor sokszor azt vehetem észre, hogy mindhármat lementettem,
mindháromhoz hozzá tudok férni 
*/

//Háromféleképpen tudunk class alapján menteni
const divs_1 = document.getElementsByClassName("div");
/*
nem véletlen a többesszám, ha beírjuk, hogy div, akkor az összes elemet lementi
ami be van sorolva a div osztályba
*/
console.log(divs_1);
/*
kaptunk egy HTML collection-t 
HTMLCollection(3) [div.div, div.div, div.div]
0: div.div
1: div.div
2: div.div
length: 3
[[Prototype]]: HTMLCollection

A HTMLCollection egy tömb-szerű objektum, 
ami HTMLElement-eket tartalmaz 
és ugyanugy címezhető pl.index alapján, mint a rendes tömbök 
->
*/
console.log(divs_1[0]);//visszakapjuk az első elemünket -> <div class="div">1</div>
console.log(divs_1[1]);//visszakapjuk a második elemünket -> <div class="div">2</div>

//querySelector
const firstDiv = document.querySelector(".div");
/*
A querySelector is képes a class alapján menteni
Mindig egy elemet ment le és mindig az elsőt, amit megtalált a dokumentumban 
*/
console.log(firstDiv);//<div class="div">1</div>

/*
!!!!!!!!!!!querySelectorAll
Rendelkezik egy változattal querySelectorAll, ami mindegyiket lementi
*/
const divs_2 = document.querySelectorAll(".div");
//pontot használtunk, azért, mert egy class és a css-ben úgy hivatkozunk az osztályokra, hogy ponttal
console.log(divs_2);
/*
Itt nem egy HTMLCollection-t, hanem egy NodeList-et kapunk vissza 
NodeList(3) [div.div, div.div, div.div]
0: div.div
1: div.div
2: div.div
length: 3
[[Prototype]]: NodeList
*/

/*
Mi a különbség a kettő között
->
Ha megnézzük a Prototype-ot a HTMLCollectionben, akkor ez van benne ->
item: f item()
length: (...)
namedItem: f namedItem
constructor: f HTMLCollection
Symbol(Symbol.iterator): f values()
Symbol(Symbol.toStringTag): "HTMLCollection"
get length: f length()
[[Prototype]]: Object 

Prototype -> azokat a metódusokat és tulajdonságokat, amelyeket az ősobjektumától vagy a szűlőobjektumától örökölt HTMLCollection

NodeList
entries: f entries()
forEach: f forEach()
item: f item()
keys: f keys()
length: (...)
values: f values()
constructor: f NodeList()
Symbol(Symbol.iterator): f values()
Symbol(Symbol.toStringTag): "NodeList"
get length: f length()
[[Prototype]]: Object

A HTMLCollection kevesebb féle ilyesmit örökölt (ami hátrányt jelent)

pl. NodeList-ben ott van az entries, forEach, keys
entries -> 
*/
console.log(divs_2.entries());//kapunk egy arrayIterator, nem mutatja meg nekünk a böngésző -> ezért majd a for ciklus entriesre lejjebb
/*
Visszakapunk ennek az objektumnak a kulcsait és az értékeit 
kulcsok -> indexek 
mert a tömbök nagyon hasonlítanak az objektumokra, az a különbség, hogy az objektumoknál nem index-vel
jelöljük az egyes elemeket, hanem kulcsokkal(pl.brand, type, stb.)
értékei -> 
jelen esetben a div class-vel ellátott html elemek
*/ 
//hogy megnézzük mi van az entriesben
for(const entry of divs_2.entries()){
    console.log(entry);
}
/*
Csinált 3 tömböt ->
[0, div.div]
0: 0
1: div.div
lenght:2
[[Prototype]]:Array(0)

[1, div.div]
0: 1
1: div.div
lenght:2
[[Prototype]]:Array(0)

[2, div.div]
0: 2
1: div.div
lenght:2
[[Prototype]]:Array(0)

div.div
-> 
div class-vel ellátott div, azért mert ez egy div és a .div ennek div a class-e
ha mondjuk #div, akkor div id-val rendelkezik 

ennek, így sok értelme nincsen, az entries inkább olyan objektumoknál jöhet jól, mint pl. a Car 
amit csináltunk az objektumok.js-ben, mert ott visszakapjuk, hogy 
brand:"Opel"
type:"Astra"
meg is nézzük az objektumok.js-ben 
*/

/*
itt az entries nincsen hasznunkra de a values() igen 
values az az összes div, az összes eleme ennek a NodeList-nek
->
*/
const values = divs_2.values();
console.log(values); //ez is egy ArrayIterator, ezért végigmegyünk rajta egy for of-val, hogy megnézzük, hogy mi van benne 

for(const value of values) {
    console.log(value);
}
/*
Végigmentünk ezeken az elemeken 
    <div class="div">1</div>
    <div class="div">2</div>    
    <div class="div">3</div>
*/
//ugyanugy végig lehet menni a keys(kulcs)-eken is 

/*
!!!!!!!!!!!!!!
Legfontosabb itt a forEach()
*/
divs_2.forEach(function(el,index,array) { //megadhatjuk mindhármat, de bőven elég általában az elementet megadni
    console.log(el);
    /*
    <div class="div">1</div>
    <div class="div">2</div>    
    <div class="div">3</div>
    */
});

/*
!!!!!!!!!!!!!!
Összefoglalva ezek léteznek a NodeListnél, de viszont a HTMLCollectionnál nem
forEach, entries....querySelector egy modernebb dolog, mint a getElementBy
*/

//Tagnév alapján való mentés
//mentés getElementsByTagname-vel
const spans_1 = document.getElementsByTagName("span");
/*
Akkor lementi nekünk egy HTMLCollectionben az összes spant (tagünket)
*/
console.log(spans_1);
/*
HTMLCollection(3) [span, span, span]
0: span
1: span
2: span
length: 3
[[Prototype]]: HTMLCollection 
*/

//mentés querySelector-val
const spans_2 = document.querySelectorAll("span");
console.log(spans_2);
/*
Ezzel visszakapunk egy NodeList-et
NodeList(3) [span, span, span]
0: span
1: span
2: span
length: 3
[[Prototype]]: NodeList 
*/

//Mentés name alapján -> csinéltunk egy input mezőt, aminek megadtunk egy name-t
const firstNameInput = document.querySelector("[name=firstName]"); //!!!![name=firstName] -y színtaktika 
console.log(firstNameInput);
/*
<input type="text" name="firstName">
*/

//Meg van a HTML elemekhez való hozzáférés
/***************************************************************************************************************************/

/*
Mit lehet csinálni ezekkel a HTML elemekkel, miután hozzáfértünk
->
lehet őket manipulálni az egyes attributumait 
új classeket, type-ot, id-t hozzáadni...bármelyik attributumát képesek vagyunk módosítani 
és mellette létrehozhatunk különböző eseménykezelőket is
-> 
eventListener
<button onclick="alert('Jön a zombiapokalipszis!')"></button>

onclick is egy eseménykezelő, azt jelenti, hogy rákattintottunk 
és tudunk, így attributumként megadni eseménykezelőt 

alert('Jön a zombiapokalipszis!')
egy beépített függvény, ami vár egy paramétert és ez a paraméter 
ez a szöveg, string amit ide beírtunk az meg fog jelenni
egy felugró ablakban, ha rákattintunk erre a button-re 
de amugy tudunk hivatkozni saját függvényekre is 

Ha szeretnénk saját függvényre hivatkozni, akkor azt itt el tudjuk készíteni 
*/ 

function consoleFunc() {
    console.warn("Valami hiba történt");
}

/*
<button onclick="consoleFunc()">zombiapokalipszis!</button>

és a böngésző konzoljára ki lesz írva, hogy Valami hiba történt, és azert mert console.warn sárgán írja ki 
kisebb hibát tud jelezni
*/

/*
Ezek voltak az eseménykezelők HTML attributumként 
->
most jönnek az Eseménykezelők DOM element-ből!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

/*
Készítettünk a HTML-ben egy <button id="click-btn">Click here!</button>
amit lementünk ide id alapján a querySelector segítségével
*/ 

const clickBtn = document.querySelector("#click-btn");
/*
Van egy olyan metódusa az összes HTML elementnek, hogy addEventListener
Ezt a documentumtól örökli, neki is van ilyenje
*/

//clickBtn.addEventListener("click", consoleFunc);
/*
Vár 2 vagy 3 paramétert 
1. paraméter -> az eseménynek a típusa - jelen esetben a "click"
fajtái ->
click: Ezt az eseménytípust a felhasználó kattintására (egérrel vagy érintőképernyővel) váltódik ki az elemen.
mouseover: Ez az esemény akkor következik be, amikor az egérkurzor rámutat az elemre.
keydown: Amikor egy billentyűt lenyomnak, az eseményt kiváltja az elem.
submit: Az esemény kiváltódik, amikor egy űrlapot elküldenek.
change: Amikor egy input, select vagy textarea elem értéke megváltozik, ezt az eseményt kapjuk.
2. paraméter pedig egy callback function, ugyanugy meg lehet csinálni, hogy egy névtelen function legyen vagy egy normál 
itt az elöbb megírt consoleFunc-ot fogjuk használni
-> 
és ha rákkitantunk a böngészőben a gombra, akkor ki fogja írni a konzolra, hogy valami hiba történt!
teljesen, úgy amikor ezt a functions megadtuk attributumként az egyik button-nek HTML-ben
*/

//de az is megoldás, hogy névtelen callback functiont adunk neki
clickBtn.addEventListener("click", function() {
    alert("Rákattintottál a gombra!");
});

/*
Klikkelés(click) után csinálunk egy értékváltozós(change) addEventListener-t is 

    <select id="changeSelect">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

megjelent a legördülős menű 4 értékkel (0,1,2,3)

Azt szeretnénk, hogy amikor megváltozik az értéke, (amikor kiválasztunk valamit)akkor fusson le egy esemény
*/
//lementjük az id alapján 
const changeSelect = document.querySelector("#changeSelect");

changeSelect.addEventListener("change", function() {
    /*
    az a fontos, hogy megnézzük, hogy ebben a functionben mi lesz a this!!!!!!!!!!!!!
    itt is van egy this
    */
   console.log(this);
   /*
   A this a callback functionben az mindig az az elem, amiből inditottuk az eventListener-t 
   ->
       <select id="changeSelect">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
   */ 
    console.log(this.value);
    /*
    Ha pedig azt, mondjuk, hogy this.value, akkor azokat az értékeket kapjuk vissza, ami meg van adva <option value="2">2</option>
    pl. ha a kettesen van a legördülő menü, akkor a konzolon 2 lesz 
    mindig az a szám, ami ki van választva a legördülős menüben 
    */
});

//A kurzor elem felé helyezése(mouseover)
/*
    <h3>A kurzor elem fölé helyezése</h3>
    <div id="square1"></div>

Csináltuk ezt a négyzetet és azt szeretnénk, ha felévisszük a kurzort, akkor történjen valami
*/
const square1 = document.querySelector("#square1");

square1.addEventListener("mouseover", function() {
    console.log("Az elem fölött van a kurzor!");//ahányszor az elem felé visszuük, ki fogja írni a konzolra ->Az elem fölött van a kurzor
});
/*
Ha attritubumként határozzuk meg az eventListenert, akkor mindig egy on van előtte
pl. ha HTML-ben csináljuk attributumként akkor onmouseover, onclick stb 
itt meg csak click, mouseover, change stb.
*/

//azt is meg tudjuk csinálni, hogy a square1-re csinálunk még egy eseménykezelőt
square1.addEventListener("mouseleave", function() {
    //amikor elözőleg felévittük a kurzort és utána lehozzuk róla
    console.log("Már nincs a kurzor az elem fölött!");//amikor levisszük róla a böngésző konzoljában ezt fogja kiírni
});
/********************************************************************************************************************************/

//Eseménykezelők törlése -> removeEventListener
square1.removeEventListener("mouseover");//második paraméter hiányzik, mert névtelen function
/*
Egy probléma van a törléssel, hogyha névtelen functiont adtunk meg, akkor ez nem
fog müködni, mert hogy törlésnél az első paraméter az a típus a második, ennek 
meg kell egyeznie a törlendő event típusával 
második pedig az a metódus, függvény amit megadtunk
viszont, ha itt névtelen functiont csinálunk, arra nem tudunk újra hivatkozni
*/

//csak ugy tudjuk kitörölni a névtelen mouseleave eventListenert, hogy készítünk egy függvényt -> 
function mouseLeaveFunc() {
    console.log("Az elem fölött van a kurzor!")
}

square1.addEventListener("mouseover", mouseLeaveFunc)

square1.removeEventListener("mouseover", mouseLeaveFunc);
/*
Függvényt, amit készítettünk megadjuk az addEventListenernek 
és akkor annak a testében már nem lesz semmi, mert azt megoldja a függvény, nem úgy mint a névtelen functionnál

Ha ki szeretnénk törölni, akkor ugyanugy megadjuk ezt a két értéket mint az addEventListener-nél
csak a removeEventListener-nek
********************************************************************************************************************************************/

//Atributumok manipulációja

/*
HTML-ben csináltunk egy square2-t és alá három darab gombot amiket majd lementünk és csinálunk nekik eventListenereket 
    <div id="square2" class="blue"></div>
    <button id="click-green">Váltás zöldre!</button>
    <button id="click-blue">Váltás kékre!</button>
    <button id="click-toggle">Váltakozás!</button>

    HTML-ben csináltunk style taget amiben formáztuk a sqaure meg a green és blue osztályt 
            #square2 {
            width: 200px;
            height: 200px; 
            margin: 15px; 
        }
        .blue {
            background-color: blue;
        }
        .green {
            background-color: green;
        }
*/
const square2 = document.querySelector("#square2");

const clickGreen = document.querySelector("#click-green");
const clickBlue = document.querySelector("click-blue");
const clickToggle = document.querySelector("click-toggle");

clickGreen.addEventListener("click", function() {
    /*
    összes HTML elementnek van egy olyan tulajdonsága, hogy classList
    és ez a classList az tartalmazza azokat az osztályokat amikbe besoroltuk 
    magát az elemet
    */
    //console.log(square2.classList);
    /*
        DOMTokenList['blue', value: 'blue']
        0: "blue"
        length: 1
        value: "blue"
        [[Prototype]]: DOMTokenList

    Van egy TokenList-ünk, ami tartalmazza, hogy blue nevű class-ben soroltuk ezt az elemet
    */
    /*
    Itt azt szeretnénk csinálni, hogy elöször is leszedjük róla a blue class-t ->  
    */
    square2.classList.remove("blue");//ide a zárójelbe pedig megadjuk neki az a class-t amit szeretnénk törölni 
    //letöröltük a blue class-t, innentől kezdve már nem lesz kék -> nem lesz színe, nem fog látszodni a weboldalon 

    //hozzá akarjuk adni az add metódussal a green-t 
    square2.classList.add("green");
    //és akkor igy kékből atvált zöldre, ha megnyomjuk a gombot, amire itt készítettük az eventListenert
});

/*
Eddig a négyzetet ami kék volt az első gombnyomásra az elöbbi eventListener segítségével átváltottuk zöldre 
és most azt szeretnénk, hogy ha megnyomjuk a második gombot, akkor legyen újra zöldből kék 
ehhez csinálunk a második gombnak egy eventListenert
*/

clickBlue.addEventListener("click", function() {
    
    square2.classList.remove("green"); 
    square2.classList.add("blue");

    /*
    Itt teljesen ugyanazt csináltuk, csak az eventListener -> clickBlue lesz, mert így mentettük le a második gombunkat 
    és a classListel most pont fordítva a green osztályt remove-oljuk és a blue osztályt add-oljuk 
    */
});

/*
Harmadik gomb a váltakozás lesz, tehát ha megnyomjuk és zöld a négyzet,
akkor zöldről kék lesz, ha kék, akkor kékről zöld
*/

clickToggle.addEventListener("click", function() {
//contains egy olyan metódus, aminek boolean a visszatérési értéke, és hogy rendelkezik egy bizonyos osztállyal az elem
    if(square2.classList.contains("green")) {
        square2.classList.remove("green"); 
        square2.classList.add("blue");
    /*
    Ha rendelkezik egy olyan osztállyal, hogy green, akkor remove-oljuk a green-t
    és hozzáadjuk a blue-t
    */
    } else {
        //különben remove-oljuk a blue-t és hozzáadjuk a green-t 
        square2.classList.remove("green"); 
        square2.classList.add("blue");
    }

/*
De ezt egyszerűbben is meg lehet oldani, mert van egy olyan metódus, hogy toggle 
->
azt csinálja, hogyha be van sorolva a blue-ba az elemünk, akkor leszedi róla 
ha nincsen besorolva, akkor pedig rárakja 
*/
    square1.classList.toggle("blue");//önmagában csak azt csinálja, hogy kattintás leszedi a blue-t még egy kattintás rárakja a blue-t
    /*
    és ha megcsináljuk ugyanezt a green-vel, mivel ezek nincsenek soha egyidejűleg rajta 
    akkor először leszedi a blue-t és rárakja a green-t, majd fordítva
    */
    square1.classList.toggle("green");
});

/************************************************************************************************************************************/

//style attributum, gyakorlatilag az inline css-t tudjuk módosítani vele
square2.style.border = "3px solid black";