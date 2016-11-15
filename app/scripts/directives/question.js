'use strict';

function QuestionDirective () {
  return {
    templateUrl: 'templates/question.html',
    replace: true,
    controller: 'questionCtrl'
  }
}

module.exports = QuestionDirective;
