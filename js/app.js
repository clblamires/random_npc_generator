let app = angular.module("npcApp", []);

app.service("npcService", function($http, $q){
    this.load = function(){
        
    }
});

app.controller("npcCtrl", function($scope, $http){
    $scope.article = "A";
    $scope.race = "";
    $scope.personality = "";
    $scope.occupation = "";
    $scope.characteristic = "";
    $scope.speech = "";

    $http.get("../data/npc.json").then( function(response){
        $scope.data = response.data;
        $scope.generate();
    })

    $scope.generate = function(){
        $scope.race = $scope.data.race[rollD20()];
        $scope.personality = $scope.data.personality[rollD20()];
        $scope.occupation = $scope.data.occupation[rollD20()];
        $scope.characteristic = $scope.data.characteristic[rollD20()];
        $scope.speech = $scope.data.speech[rollD20()];
        $scope.article = ( ["a","e","i","o","u"].includes($scope.personality[0]) || $scope.personality.substr(0,2) == "ho") ? "An" : "A";

    }
})

function rollD20( ){
    return Math.floor( Math.random() * 20 );
}