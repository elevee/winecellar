//Template helper
var template = function(id){
	return _.template( $('#' + id).html() );
}


var Wine = Backbone.Model.extend({
	defaults: {
		name: 'Domaine Serene',
		grapes: 'Pinot Noir',
		country: 'USA',
		region: 'Oregon',
		year: 2007
	},

	validate: function(object){
		//NOTE: You have to pass {validate:true} param to set method e.g.
			//person.set('age', -25, {validate:true});

		// Prevent user from inputting a future year
		var currentYear = new Date();
		currentYear = currentYear.getUTCFullYear();
		if (object.year > currentYear){
			return 'Please enter a valid year.';
		}

	}
	
});


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

// View for all wines
var WinesView = Backbone.View.extend({
	tagName: 'ul',

	// template: _.template( $('#wineList').html() ),

	render: function(){
		//filter through all wines in collection
		this.collection.each(function(wine){
			//for each, create a new WineView
			var wineView = new WineView({ model: wine });
			//append to root element
			this.$el.append(wineView.render().el);
		}, this);

		return this; //for chaining!

	}
});

// View for one wine

var WineView = Backbone.View.extend({
	tagName: 'li',

	template: template('wineTemplate'),

	render: function(){
		this.$el.html( this.template(this.model.toJSON()) );
		return this; //so we can chain
	}
});

var winesView = new WinesView({collection: winesCollection});
$(document.body).append(winesView.render().el);




//Create a new wine model
var wine = new Wine();

//Create a new wine view referencing that model
var wineView = new WineView({ model: wine });

