angular.module('impulsevacation').directive('impulsevacationNav', impulsevacationNav);

function impulsevacationNav(){
    return {
        restrict: 'E',
        templateUrl: 'pages/navigation-directive/navigation-directive.html'
    };
}
