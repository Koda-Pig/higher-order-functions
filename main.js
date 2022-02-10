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

// 