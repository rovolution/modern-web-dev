/* Change Underscore Template Interpolation from % to @ */
_.templateSettings = {
      interpolate: /\<\@\=(.+?)\@\>/gim,
      evaluate: /\<\@([\s\S]+?)\@\>/gim,
      escape: /\<\@\-(.+?)\@\>/gim
};

$(document).ready(function() {
	/******************************
	 	
	 	Application Namespaces 
	 
	*******************************/
	var App = {};
	App.Views = {};
	App.Models = {};
	App.Collections = {};

	
	/******************************
	 	
	 	Backbone Views
	 
	*******************************/
	App.Views.EmployeeManagementView = Backbone.View.extend({
		
		template: $("#employeeManagementViewTpl").html(),

		initialize : function() {
			this.render();
		},

		render : function() {
			var compiledTemplate = _.template(this.template, {
				title : "Employee Management Dashboard"
			});
			this.$el.append(compiledTemplate);
		},

		events : {
			"click #randomButton" : "triggerRandomBtnAction"
		},

		triggerRandomBtnAction : function(e) {
			e.preventDefault(); // NOTE: Always remember to call this on callback functions bound to DOM events!
			alert("Random Button was clicked!!");
		}
	});


	/******************************
	 	
	 	Backbone Models
	 
	*******************************/


	/******************************
	 	
	 	Backbone Collections
	 
	*******************************/


	/******************************
	 	
	 	Initialize Objects
	 
	*******************************/
	
	/** Initialize collections below here **/

	/** Initialize views below here **/

	var employeeManagementView = new App.Views.EmployeeManagementView({
		el: "#employeeManagementView"
	});
});