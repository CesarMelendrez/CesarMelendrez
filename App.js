(function(){
	'use strict';

	angular
		.module('CesarMelendrez',['ui.router', 'ui.bootstrap','ngMessages']);


	angular
		.module('CesarMelendrez')
		.config(function($stateProvider,$httpProvider,$urlRouterProvider){
			
			$urlRouterProvider.otherwise('/');

			$stateProvider
			
			.state('CesarMelendrez',{
				url:'/',
				templateUrl:'Assets/Partials/Home.html',
				controller:'IndexCtrl as ctrl',
			})

			.state('Photos',{
				url:'/Photos',
				templateUrl:'Assets/Partials/Photos.html',
				controller:'PhotoCtrl as ctrl',
			})

			.state('Illustration',{
				url:'/Illustration',
				templateUrl:'Assets/Partials/Illustration.html',
				controller:'IllustrationCtrl as ctrl',
			})

			.state('Animation',{
				url:'/Animation',
				templateUrl:'Assets/Partials/Animation.html',
				controller:'Animation as ctrl',
			})

			.state('About',{
				url:'/About',
				templateUrl:'Assets/Partials/About.html',
				controller:'AboutCtrl as ctrl',
			})

			.state('Skills',{
				url:'/Skills',
				templateUrl:'Assets/Partials/Skills.html',
				// controller:'SkillsCtrl as ctrl',
			})			
		});

	angular.module('CesarMelendrez')
		.run(function($rootScope) {
    		$rootScope.$on('$stateChangeSuccess', function() {
	   			document.body.scrollTop = document.documentElement.scrollTop = 0;
			});
		}) 

jQuery(document).ready(function(){
    jQuery(".MenuButton").click(function(){
        jQuery(".scene, .MeSkills").hide();
    });
    jQuery("#MenuAbout").click(function(){
        jQuery(".scene").hide();
    });
    jQuery("#LogoSpin, #MenuContact").click(function(){
        jQuery(".scene, .MeSkills").show();
    });
    jQuery("#MenuSkills").click(function(){
        jQuery(".MeSkills").show();
    });
});
})();

