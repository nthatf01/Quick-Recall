'use strict';

function MainCtrl ($scope, dataService) {

  dataService.getQuestions(function(response){
    var questions = response.data.questions;
    $scope.questions =  questions;
  });

  $scope.addQuestions = function() {
    $scope.questions.unshift({question: "New Question", completed: false});
  };

}

module.exports = MainCtrl;
