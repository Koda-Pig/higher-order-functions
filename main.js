const games = [
  {name: 'Jak 3', console: 'PS2', start: 2004, end: 2008},
  {name: 'Portal', console: 'PC', start: 1992, end: 2025},
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

// sort

// sort numerically!
const sortedGames = games.sort((g1, g2) => {
  if (g1.start > g2.start) return 1
  else return -1
})

// sort alphabetically!
// const sortedGames = games.sort((g1, g2) => {
//   if (g1.name[0] > g2.name[0]) return 1
//   else return -1
// })

console.log(sortedGames)




/////////////////////////////////////////

// generate a random string, then sort it using .sort()

/*
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

console.log(sortedRandomString.join(''))

*/


// code golf of above version
let a = 'abcdefghijklmnopqrstuvwxyz'
const genRandStr=(l)=>{let r='',i=0;for(i;i<l;i++)r+=a.charAt(Math.floor(Math.random()*a.length));return r}
const sortStr=(s)=>{return s.split('').sort((l1,l2)=>{if(l1>l2)return 1;else return-1}).join('')}
// console.log('random string: '+genRandStr(50)+'\n sorted string: '+sortStr(genRandStr(10)))
