var WinesCollection = Backbone.Collection.extend({
	model: Wine

});

var winesCollection = new WinesCollection([
	{
		name: 'Cupcake Merlot',
		grapes: 'Merlot',
		country: 'USA',
		region: 'California',
		year: 2011
	},
	{
		name: 'Steinbeck Creme Brulee',
		grapes: 'Muscat',
		country: 'USA',
		region: 'California - Paso Robles',
		year: 2013
	}
])

