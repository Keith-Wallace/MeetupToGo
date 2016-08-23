angular.module('MeetUpAPI', [])

.controller('CategoryController', function($scope, $http) {
  $scope.groupTable = true;

  $http.get('/api/categories')
    .success(function(data) {
      $scope.category = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

    $scope.findGroup = function(zipcode, category) {
      if (zipcode === undefined && category === undefined) {
        alert('Please select a category and enter zip code');
      } else if (category === undefined) {
        alert('Please select a category');
      } else if (zipcode === undefined) {
        alert('Please enter a zip code');
      } else {
        $http.get('/api/groups', {params: {category_id: $scope.selected.id, zip: $scope.zipcode}})
          .success(function(data) {
              $scope.groups = data;
              $scope.groupTable = false;
          })
          .error(function(errorData) {
            console.log('Error: ' + errorData);
          });
        };

      }
      // if (data === 'both') {
      //       alert('Please select a category and enter zip code');
      //     } else if (data === 'no-category') {
      //       alert('Please select a category');
      //     } else if (data === 'no-zip-code') {
      //       alert('Please enter a zip code');
      //     } else {
      //       $scope.groups = data;
      //       $scope.groupTable = false;
      //     }
      
});