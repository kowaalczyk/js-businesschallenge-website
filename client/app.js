var hsbc = angular.module('Hsbc', ['ngMaterial', 'ngRoute']);

hsbc.config(function($routeProvider, $locationProvider, $mdThemingProvider){
  $routeProvider
      .when('/', {
        controller:'EditionController',
        templateUrl:'views/edition-current.html'
      })
      .when('/edycje/:id', {
        controller:'EditionController',
        templateUrl:'views/edition-old.html'
      })
      .when('/zadania', {
          controller:'CaseController',
          templateUrl:'views/cases.html'
      })
      .when('/zwyciezcy', {
          controller:'EditionController',
          templateUrl:'views/winners.html'
      })
      .when('/partnerzy', {
          controller: 'EditionController',
          templateUrl: 'views/partners.html'
      })
      .when('/organizatorzy', {
        controller:'OrgController',
        templateUrl:'views/org.html'
      })
      .when('/kontakt', {
        controller:'ContactController',
        templateUrl:'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  //TODO: Omit # used in front-end routing with:
  //$locationProvider.html5Mode(true);
});

hsbc.run(['$anchorScroll', function ($anchorScroll) {
    $anchorScroll.yOffset = 0;
}]);

hsbc.controller('MainController', function($scope, $mdSidenav, $location, $anchorScroll, $mdDialog) {
    console.log('Main controller is running...');
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
    $scope.goToAnchor = function(target) {
        if($location.hash() !== target) {
            $location.hash(target);
        } else {
            $anchorScroll();
        }
    };

    $scope.showConfirm = function() {
        // Appending dialog to document.body to cover sidenav in docs app
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#HsbcDialogContainer')))
                .clickOutsideToClose(true)
                .title('Użycie Cookies')
                .textContent('Używamy plików cookie, aby usprawnić doświadczenie naszych użytkowników. Cookies to małe pliki, które są przechowywane na komputerze i mają na celu zidentyfikowanie naszych użytkowników. Zamykając tę wiadomość zgadzasz się na wykorzystanie przez nas plików cookie, chyba że zdecydujesz się je wyłączyć.')
                .ariaLabel('Użycie Cookies')
                .ok('OK')
                .targetEvent()
        );

        var confirm = $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Użycie Cookies')
            .textContent('')
            .ariaLabel('Użycie Cookies')
            .ok('OK');
    };
});