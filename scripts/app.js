angular.module('GeomamaApp', [])

.controller('ListCtrl', function($scope) {
  $scope.templates  = [
    '<a href="../templates/header.html"></a>',
    '<a href="../templates/mngt.html"></a>',
    '<a href="../templates/report.html"></a>',
    '<a href="../templates/settings.html"></a>'
  ];
});

// connecting to sql server via mssql
