import { skaiciai } from './data/skaiciai.js';
import { skaiciai2 } from './data/skaiciai2.js';
import { vidurkis } from './components/vidurkis/vidurkis.js';

const ats = vidurkis(skaiciai);
const ats2 = vidurkis(skaiciai2);

// Is pateiktu 4 skaiciu, vidurkis gaunasi: 6.
const atsString1 = `Is pateiktu ${skaiciai.length} skaiciu, vidurkis gaunasi: ${ats}.`;
const atsString2 = `Is pateiktu ${skaiciai2.length} skaiciu, vidurkis gaunasi: ${ats2}.`;


const rez1DOM = document.querySelector('#rez1');
const rez2DOM = document.querySelector('#rez2');

rez1DOM.innerText = atsString1;
rez2DOM.innerText = atsString2;