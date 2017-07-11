angular.module('impulsevacation', ['ngRoute'])
    .config(config);
// run block is exec after injector is created and used to kickstart app
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/homepage/homepage.html'
        })
        .when('/vacationList', {
            templateUrl: 'pages/vacationList/vacationList.html'
        })
        .when('/profile', {
            templateUrl: 'pages/profile/profile.html'
        })
        .when('/register', {
            templateUrl: 'pages/register/register.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}
