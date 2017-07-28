var sourceFile = require('./2015_4');
console.log(sourceFile.arrLeague[0]);//to get data from league-season
console.log(sourceFile.arrLeague[1]);
console.log(sourceFile.arrLeague[2]);
console.log(sourceFile.arrLeague[4]);
console.log(sourceFile.arrLeague[3]);

console.log(sourceFile.jh["R_1"][0][0]);//to get data from rounds of league-season
console.log(sourceFile.jh["R_1"][0][1]);


Object.keys(sourceFile.jh).forEach((keyName) => {
	console.log(keyName, sourceFile.jh[keyName][0][0]);
	console.log(keyName, sourceFile.jh[keyName][1][0]);
	console.log(keyName, sourceFile.jh[keyName][2][0]);
})