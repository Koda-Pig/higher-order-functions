const games = [
  {name: 'Jak 3', console: 'PS2', start: 2004, end: 2008},
  {name: 'Chess', console: 'N/A', start: 1600, end: 2022},
  {name: 'God of War', console: 'PSP', start: 2001, end: 2005},
  {name: 'Hollow Knight', console: 'PC', start: 2018, end: 2022},
  {name: 'Hyper Light Drifter', console: 'PC', start: 2016, end: 2019},
  {name: 'Wizard of Legend', console: 'PC', start: 2006, end: 2022},
  {name: 'Tetris', console: 'all', start: 1985, end: 2022},
  {name: 'Mortal Shell', console: 'all', start: 2019, end: 2022},
  {name: 'Tak 2', console: 'PS2', start: 2004, end: 2012}
]

const ages = [12, 23, 66, 73, 13, 3, 54, 67, 11, 1, 45, 44]

// forEach

// games.forEach(game => {console.log(game.name)})

// filter

const canDrink = ages.filter(age => age >= 21)

const pcGames = games.filter(game => game.console === 'PC')

const twothousandsGames = games.filter(game =>
  game.start > 1999 &&
  game.start < 2010
)

const lastedTenYears = games.filter(game =>
  game.end - game.start >= 10  
)

// map - create new arrays from current array

const gameNames = games.map(game => game.name)

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2)

// sort - return 1 or -1, depending on your condition

// sort numerically!
const sortedGamesByNum = games.sort((game1, game2) => {
  if (game1.start > game2.start) return 1
  else return -1
})

// sort alphabetically!
const sortedGamesAlpha = games.sort((g1, g2) => {
  if (g1.name[0] > g2.name[0]) return 1
  else return -1
})

// sort short
const srtdGms = games.sort((a, b) => (a.start > b.start ? 0 : -1))

const sortedGamesByAge = games.sort((a, b) => (a.end - a.start > b.end - b.start ? 1 : 0))

// sortedGamesByAge.forEach(game => {
//   console.log(
//     `${game.name} is ${game.end - game.start} years old`
//   )
// });

console.log(
  // sorts by size 
  // ages.sort((a,b)=>a-b)

)

/////////////////////////////////////////

// generate a random string, then sort it using .sort()
let alphabet = 'abcdefghijklmnopqrstuvwxyz'

function generateString(length, string) {
  let result = ' ';
  for ( let i = 0; i < length; i++ ) {
      result += string.charAt(Math.floor(Math.random() * string.length));
  }
  return result;
}

let randomString = generateString(50, alphabet)

const sortedRandomString = randomString.split('').sort((l1,l2) => {
  if (l1 > l2) return 1
  else return -1
})

// console.log(sortedRandomString.join(''))

// code golf of above version
let a = 'abcdefghijklmnopqrstuvwxyz'
const genRandStr=(l)=>{let r='',i=0;for(i;i<l;i++)r+=a.charAt(Math.floor(Math.random()*a.length));return r}
const sortStr=(s)=>{return s.split('').sort((l1,l2)=>{if(l1>l2)return 1;else return-1}).join('')}
// console.log('random string: '+genRandStr(50)+'\n sorted string: '+sortStr(genRandStr(10)))


// REDUCE

// return sum of entire array
const ageSum = ages.reduce((total, age) => total + age, 0)

// get total years of all games
const gameSum = games.reduce((total, game) => total + (game.end - game.start), 0)

// console.log(`total game time = ${gameSum}`)


// COMBINED METHOD

const combo = ages
  .map(age => age * 7)  // * 7 (dog years)
  .filter(age => age >= 200) // no younger than 200 
  .sort((a,b) => a - b) // youngest to oldest
  .reduce((a, b) => a + b, 0) // added together

console.log(`combo: ${combo}`)