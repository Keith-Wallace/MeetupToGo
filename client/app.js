/*
    SET UP OUR FRONT-END FRAMEWORK
*/

angular.module('MeetUpAPI', [])

// SET UP OUR ANGULAR CONTROLLER WITH FUNCTION HANDLERS
.controller('CategoryController', function($scope, $http) {
  $scope.groupTable = true;

  // FROM OUR HOMEPAGE, PULL CATEGORY DATA FROM API TO DROP-DOWN MENU
  $http.get('/api/categories')
    .success(function(data) {
      $scope.category = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

    // CLICK EVENT LISTENER - CALLS FUNCTION WHEN SEARCH IS SUBMITTED
    $scope.findGroup = function(zipcode, category) {
      // ERROR HANDLING BEFORE SENDING A GET REQUEST TO API
      if (zipcode === undefined && category === undefined) {
        alert('Please select a category and enter zip code');
      } else if (category === undefined) {
        alert('Please select a category');
      } else if (zipcode === undefined) {
        alert('Please enter a zip code');
      } else if ( zipcode.match(/[a-z]/i) ) {
        alert('Please enter a valid zip code');
      } else {
        // VALIDATION PASSES
        // SEND REQUIRED SEACH PARAMATERS FOR API
        $http.get('/api/groups', {params: {category_id: $scope.selected.id, zip: $scope.zipcode}})
          .success(function(data) {
              $scope.groups = data;
              $scope.groupTable = false;
          })
          .error(function(errorData) {
            console.log('Error: ' + errorData);
          });
      }
    }  
});