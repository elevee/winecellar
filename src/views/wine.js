WineView = Backbone.View.extend({
	tagName: 'li',

	template: _.template("<%= name %> (<%= year %>) <%= region %>, <%= country %>"),

	initialize: function(){
		console.log(this.model);
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()) );
	}
});