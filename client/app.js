angular.module('MeetUpAPI', [])

.controller('CategoryController', function($scope, $http) {
  $http.get('/api/categories')
    .success(function(data) {
      $scope.category = data;
      // console.log($scope.category);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });


    $scope.selected = '';
    $scope.groupTable = true;

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


var obj = {
  "results": [
    {
      "utc_offset": -14400000,
      "country": "US",
      "visibility": "public",
      "city": "New York",
      "timezone": "US/Eastern",
      "created": 1097002747000,
      "topics": [
        {
          "urlkey": "bookclub",
          "name": "Book Club",
          "id": 2767
        }
      ],
      "link": "http://www.meetup.com/unionsquare/",
      "rating": 4.51,
      "description": "<p>Meet other locals who are interested in getting together and discussing books chosen by the members of our group.</p>",
      "lon": -73.98999786376953,
      "group_photo": {
        "highres_link": "http://photos4.meetupstatic.com/photos/event/d/b/a/8/highres_336356232.jpeg",
        "photo_id": 336356232,
        "photo_link": "http://photos4.meetupstatic.com/photos/event/d/b/a/8/600_336356232.jpeg",
        "thumb_link": "http://photos4.meetupstatic.com/photos/event/d/b/a/8/thumb_336356232.jpeg"
      },
      "join_mode": "approval",
      "organizer": {
        "member_id": 7792265,
        "name": "Jim Held",
        "photo": {
          "highres_link": "http://photos2.meetupstatic.com/photos/member/4/e/e/4/highres_4460196.jpeg",
          "photo_id": 4460196,
          "photo_link": "http://photos2.meetupstatic.com/photos/member/4/e/e/4/member_4460196.jpeg",
          "thumb_link": "http://photos4.meetupstatic.com/photos/member/4/e/e/4/thumb_4460196.jpeg"
        }
      },
      "members": 1031,
      "name": "Union Square Reading Group",
      "id": 178198,
      "state": "NY",
      "urlname": "unionsquare",
      "category": {
        "name": "fine arts/culture",
        "id": 1,
        "shortname": "arts-culture"
      },
      "lat": 40.72999954223633,
      "who": "Book Lovers"
    }
  ],
  "meta": {
    "next": "https://api.meetup.com/2/groups?zip=10001&offset=1&sign=True&format=json&lon=-73.9899978638&category_id=1&photo-host=public&page=1&radius=25.0&fields=&lat=40.75&key=4e47134a736d2f51696c4b8653b684c&order=id&desc=false",
    "method": "Groups",
    "total_count": 335,
    "link": "https://api.meetup.com/2/groups",
    "count": 1,
    "description": "None",
    "lon": -73.98999786376953,
    "title": "Meetup Groups v2",
    "url": "https://api.meetup.com/2/groups?zip=10001&offset=0&sign=True&format=json&lon=-73.9899978638&category_id=1&photo-host=public&page=1&radius=25.0&fields=&lat=40.75&key=4e47134a736d2f51696c4b8653b684c&order=id&desc=false",
    "signed_url": "https://api.meetup.com/2/groups?zip=10001&offset=0&format=json&lon=-73.9899978638&category_id=1&photo-host=public&page=1&radius=25.0&fields=&lat=40.75&order=id&desc=false&sig_id=162791372&sig=17ac69e9b80b342cf3585022572ef5bd02a23b01",
    "id": "",
    "updated": 1471964231000,
    "lat": 40.75
  }
}