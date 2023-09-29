//ex1
const year = 365;
const month = 30;
const week = 7;
const day = 1;

const timeForMakeCar = 6;

if (timeForMakeCar / year>1){
    console.log(Math.floor(timeForMakeCar/year),'Year', Math.floor(timeForMakeCar % year / month), 'Month' );
    
}else if (month < timeForMakeCar &&  timeForMakeCar < year ){
    console.log(Math.floor(timeForMakeCar/month),'Month', Math.floor(timeForMakeCar % month / week), 'Week' )
}else if (timeForMakeCar / month < 1){
    console.log(Math.floor(timeForMakeCar / week), 'Week', Math.floor(timeForMakeCar % week), 'Day')
}else {
    console.log("ERROR")
}


//ex2 
 const obj1 = {
    name: 'Andrei',
    hobby: 'Tenis'
 }

 const obj2 = {
    name: 'Tanea',
    hobby: 'Fotbal'
 }
 const obj3 = {
    name: 'Nicoleta',
    hobby: 'Dansuri'
 }
 const obj4 = {
    name: 'Petru',
    hobby: 'Jocuri'
 }
 const obj5 = {
    name: 'Maria',
    hobby: 'Desen'
 }

 let  nameFromObj = 'Petru'
 if (obj1.name == nameFromObj){
    console.log(obj1.hobby)
 }else if (obj2.name == nameFromObj){
    console.log(obj2.hobby)
 }else if (obj3.name == nameFromObj){
    console.log(obj3.hobby)
 }else if (obj4.name == nameFromObj){
    console.log(obj4.hobby)
 }else if (obj5.name == nameFromObj){
    console.log(obj5.hobby)
 } else console.log('Nu sa gasit hobby')

//Metoda switch 
switch(nameFromObj){
    case obj1['name'] == nameFromObj:
        console.log(obj1['hobby']);
    break;
    case obj2['name'] == nameFromObj:
        console.log(obj2['hobby']);
    break;
    case obj3['name']  == nameFromObj:
        console.log(obj3['hobby']);
    break;
    case obj4['name']   == nameFromObj:
        console.log(obj4['hobby']);
    break;
    case obj5['name']  == nameFromObj:
        console.log(obj5['hobby']);
    break;
    default:
     console.log("N-a gasit nimic");
}

//ex3
let numeAnotimp = 'Iarna'

switch(numeAnotimp){
    case 'Iarna':
        console.log('Iarna este unul din cele patru anotimpuri ale zonei temperate. Vremea este mai rece în perioada iernii, fiind anotimpul cu cele mai mici temperaturi')
    break;
    case 'Primavara':
        console.log('Primavara este unul din cele patru anotimpuri ale zonei temperate, marcand tranzitia de la iarna spre vara. Calendaristic primavara incepe in 1 Martie')
    break;
    case 'Vara':
        console.log('În zonele cu climă temperată, vara este cel mai cald dintre cele patru anotimpuri. Solstițiul ce are loc în timpul său se numește solstițiul de vară')
    break;
    case 'Toamna':
        console.log('Toamna este unul din cele patru anotimpuri ale climei temperate. Este anotimpul care face legătura între vară și iarnă')
    break
    default:
        console.log('Nu este denumire de anotimp')

}

//ex4

class Animale{
    constructor(date){
        this.rasa = date.rasa
        this.catePicoare = date.catePicoare
        this.areCoada = date.areCoada
        this.culoare = date.culoare

    }
}

class Pisica extends Animale {
    constructor(date){
        super(date)
        this.sunet = date.sunet
    }

}

const Pisica1 = new Pisica({
    rasa: 'Sfinx',
    catePicoare: 4,
    areCoada: 'da',
    culoare: 'neagra',
    sunet: 'miauna'

})

class Caine extends Pisica{
    constructor(date){
        super(date)
        this.viteza = date.viteza
    }
    
}

const Caine1 = new Caine({
    rasa: 'Germana',
    catePicoare: 4 ,
    areCoada: 'da',
    culoare: 'neagra',
    sunet: 'latra',
    viteza: '40 km/ora'
})

console.log(Pisica1)
console.log(Caine1)
