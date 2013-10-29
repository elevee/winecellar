//Create a new wine model
var wine = new Wine();

//Create a new wine view referencing that model
var wineView = new WineView({ model: wine });

//Create a collection 
var winesCollection = new WinesCollection();
winesCollection.add(wine);

console.log(winesCollection);
