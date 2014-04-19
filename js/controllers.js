// using angular module to create a controller named driversController for the array of controllers that F1FeederApp uses (F1FeederApp.controllers)

angular.module('F1FeederApp.controllers', []).controller('driversController', function($scope,  ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
// populate driver's list with data from API
    ergastAPIservice.getDrivers().success(function (response) {
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
});
