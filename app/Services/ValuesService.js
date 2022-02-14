import { ProxyState } from "../AppState.js";
import { Alpaca } from "../Models/AlpacaModel.js";
import { Bat } from "../Models/BatModel.js";
import { Cow } from "../Models/CowModel.js";
import { Dog } from "../Models/DogModel.js";
import { Elephant } from "../Models/ElephantModel.js";
import { Falcon } from "../Models/FalconModel.js";
import { Gorilla } from "../Models/GorillaModel.js";
import { Hyena } from "../Models/HyenaModel.js";
import { Iguana } from "../Models/IguanaModel.js";
import { Jaguar } from "../Models/JaguarModel.js";
import { Kangaroo } from "../Models/KangarooModel.js";
import { Lion } from "../Models/LionModel.js";
import { Monkey } from "../Models/MonkeyModel.js";
import { Newt } from "../Models/NewtModel.js";
import { Orangutan } from "../Models/OrangutanModel.js";
import { Puffin } from "../Models/PuffinModel.js";
import { Quail } from "../Models/QuailModel.js";
import { Rhino } from "../Models/RhinoModel.js";
import { Snake } from "../Models/SnakeModel.js";
import { Turtle } from "../Models/TurtleModel.js";
import { Uakari } from "../Models/UakariModel.js";
import { Value } from "../Models/Value.js";
import { Vulture } from "../Models/VultureModel.js";
import { Warthog } from "../Models/WarthogModel.js";
import { Xerus } from "../Models/XerusModel.js";
import { Yak } from "../Models/YakModel.js";
import { Zebra } from "../Models/ZebraModel.js";


let animalA = new Alpaca('Spitzer', 'grey', true, 300, false, 'medium')
let animalB = new Bat('Sonar', 'black', false, .5, false, 'extra small')
let animalC = new Cow('Bessie', 'black and white', false, 1500, false, 'large')
let animalD = new Dog('Puddles', 'gold and black', true, 190, true, 'medium')
let animalE = new Elephant('Bubbles', 'grey', true, 20000, false, 'extra large')
let animalF = new Falcon('Swifty', 'brown', false, 5, true, 'small')
let animalG = new Gorilla('Bobo', 'black', true, 1200, true, 'large')
let animalH = new Hyena('Ed', 'grey and black', true, 85, true, 'medium')
let animalI = new Iguana('Godzira', 'green', true, .4, false, 'extra small')
let animalJ = new Jaguar('Bageera', 'black', true, 170, true, 'medium')
let animalK = new Kangaroo('Ollie', 'brown', false, 250, false, 'medium')
let animalL = new Lion('Mufasa', 'light brown', true, 700, true, 'large')
let animalM = new Monkey('Marcell', 'black and white', true, 10, true, 'small')
let animalN = new Newt('Newl', 'green', false, .2, false, 'extra small')
let animalO = new Orangutan('Bilbo', 'tan and brown', true, 600, true, 'medium')
let animalP = new Puffin('Pippy', 'black and yellow', false, 15, false, 'small')
let animalQ = new Quail('Quiple', 'brown', false, 1.5, false, 'extra small')
let animalR = new Rhino('Rocksteady', 'grey', true, 6000, false, 'extra large')
let animalS = new Snake('Ka', 'grey', true, 80, true, 'medium')
let animalT = new Turtle('Tim', 'green', true, 200, false, 'medium')
let animalU = new Uakari('Oompa', 'brown and pink', false, 50, false, 'small')
let animalV = new Vulture('WhatchWannaDo', 'black and brown', true, 40, true, 'small')
let animalW = new Warthog('Beebop', 'brown', true, 120, false, 'small')
let animalX = new Xerus('Chip', 'tan', false, .2, false, 'extra small')
let animalY = new Yak('Yak', 'tan', false, 600, false, 'medium')
let animalZ = new Zebra('Marty', 'black and white', true, 350, false, 'medium')


let zooAnimals = [animalA, animalB, animalC, animalD, animalE, animalF, animalG, animalH, animalI, animalJ, animalK, animalL, animalM, animalN, animalO, animalP, animalQ, animalR, animalS, animalT, animalU, animalV, animalW, animalX, animalY, animalZ]
class ValuesService {
  showMeTheAnimals() {
    console.log(zooAnimals);
  }
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]

  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}


export const valuesService = new ValuesService();

