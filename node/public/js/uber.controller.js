var app = angular.module('genApp');

app.controller('uberCtrl', function($scope, $http){

	$scope.init = function() {
    $scope.deeplink = { data: { dropoff: {}, pickup: {} }, req: null };
	}

  $scope.init();

  $scope.deeplink.req = function(data) {
    var req = {
      method : 'POST',
      url : '/deeplink',
      data : data,
      headers : {
        'Content-Type' : 'application/json'
      }
    };

    $http(req).
    then(function(response) {
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  };

});
