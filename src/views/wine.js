var WineView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#wineTemplate').html() ),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html( this.template(this.model.toJSON()) );
	}
});