'use strict';

function DataService ($http, $q) {

  this.getQuestions = function(cb) {
    $http.get('/api/').then(cb);
  };

  this.deleteQuestion = function(question) {
    console.log("I deleted the " + question.number + " question!");
  };

  this.saveQuestions = function(questions) {
    var queue = [];
    questions.forEach(function(question) {
        var request;
        if(!question._id) {
          request = $http.post('/api/questions', question);
        } else {
          request = $http.put('/api/questions/' + question._id, todo).then(function(result) {
            question = result.data.question;
            return question;
          });
        }
        queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + questions.length + " questions!");
    });
  };

}

module.exports = DataService;
