var app = angular.module('genApp', []);

app.controller('uberCtrl', function($scope, $http, $window) {

	$scope.init = function() {
    $scope.deeplink = { data: { action: "setPickup", product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d", dropoff: {}, pickup: {} }, req: null };
    // Uncomment, during production
    $scope.deeplink = { data: { action: "setPickup", product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d", dropoff: { latitude: 12.9877917, longitude: 80.1976455 }, pickup: { latitude: 12.9840699, longitude: 80.1979459 } }, req: null };
	}

  $scope.init();

  $scope.deeplink.req = function(data) {
    var req = {
      method : 'POST',
      url : '/uber/deeplink',
      data : data,
      headers : {
        'Content-Type' : 'application/json'
      }
    };

    $http(req).
    then(function(response) {
      console.log(response);
      $window.location.href = response.data;
    }, function(err) {
      console.log(err);
    });
  };

});
