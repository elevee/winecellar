var Wine = Backbone.Model.extend({
	defaults: {
		year: 2013
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

// this.name = 
// this.grapes = 
// this.country =
// this.region = 