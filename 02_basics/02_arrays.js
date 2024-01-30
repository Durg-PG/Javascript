const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

//++++++++++++++++++++++ Concat ++++++++++++++++++++++++//

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

//+++++++++++++++++  Spread Operator +++++++++++++++++//

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);



console.log(Array.isArray("Durgesh"));
console.log(Array.from("Durgesh"));
console.log(Array.from({name: "Durgesh"})); //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));