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

	template: _.template( $('#wineTemplate').html() ),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html( this.template(this.model.toJSON()) );
		return this; //so we can chain
	}
});

var winesView = new WinesView({collection: winesCollection});
$(document.body).append(winesView.render().el);
