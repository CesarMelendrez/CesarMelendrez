(function(){
	angular
		.module('CesarMelendrez')
		.controller('IndexCtrl',IndexCtrl);

		function IndexCtrl($state, $uibModal) {
			 jQuery("#Thanks").modal({
				  escapeClose: true,
				  clickClose: true,
				  showClose: true,
				
				});
		}


})();
