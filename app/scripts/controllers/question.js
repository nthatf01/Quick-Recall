'use strict';

function QuestionCtrl ($scope, dataService) {

  $scope.deleteQuestion = function(question, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteQuestion(question);
  };

  $scope.saveQuestions = function() {
    var filteredQuestions = $scope.todos.filter(function(question){
      if(question.edited) {
        return question
      };
    })
    dataService.saveQuestions(filteredQuestions)
      .finally($scope.resetQuestionState());
  };

  $scope.resetQuestioState = function() {
      $scope.questions.forEach(function(question) {
         question.edited = false;
      });
  }
}

module.exports = QuestionCtrl;
