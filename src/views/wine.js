WineView = Backbone.View.extend({
	tagName: 'li',

	initialize: function(){
		console.log(this.model);
	},

	render: function(){
		this.$el.html(this.model.get('name'));
	}
});