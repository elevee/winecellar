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
