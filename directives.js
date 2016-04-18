(function(){
	var app = angular.module('store-directives', []);

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function() {
				this.current = 0;
	   			this.setCurrent = function(newGallery){
	   				this.current = newGallery || 0;
	   			};
			},
			controllerAs: 'gallery'
		};
	});
	app.directive('productPanel', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panel.html',
			controller: function() {
				this.tab=1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});
	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});
	app.directive('productSpecs', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-specs.html'
		};
	});
	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-reviews.html'
		};
	});
	app.directive('productReviewForm', function() {
		return {
			restrict: 'A',
			templateUrl: 'product-review-form.html',
			controller: function() {
				this.review = {};
				this.addReview = function(product){
					this.review.createdOn = Date.now();
					product.reviews.push(this.review);
					this.review = {};
				}
			},
			controllerAs: 'reviewCtrl'
		}
	});
})();