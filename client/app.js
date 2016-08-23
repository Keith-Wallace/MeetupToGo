angular.module('MeetUpAPI', [])

.controller('CategoryController', function($scope, $http) {
  $scope.selected = 'Select Category';
  $scope.groupTable = true;

  $http.get('/api/categories')
    .success(function(data) {
      $scope.category = data;
      $scope.selected = 'Select Category';
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

    $scope.findGroup = function(zipcode, category) {
      $http.get('/api/groups', {params: {category_id: $scope.selected, zip: $scope.zipcode}})
        .success(function(data) {
          $scope.groups = data;
          $scope.groupTable = false;
        })
        .error(function(errorData) {
          console.log('Error: ' + errorData)
        });
    };
});