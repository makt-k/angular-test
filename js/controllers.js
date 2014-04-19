// using angular module to create a controller named driversController for the array of controllers that F1FeederApp uses (F1FeederApp.controllers)
// set up static data to render
angular.module('F1FeederApp.controllers', []).controller('driversController', function($scope) {
    $scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      }
    ];
});
