// It is a simple quiz that has radio button choices, and it will show the quiz taker his or her score upon completion.
// The quiz can show any number of questions and any number of choices.
// Tally the user’s score and display the final score on the last page. The last page will only show the score, 
// so remove the last question.
// Use an array to store all the questions. Each question, along with 
// its choices and correct answer, should be stored in an object. The array of 
// questions should look similar to this (Notice that only one question is in 
// this example array; you will add many questions):
// Dynamically (with document.getElementById or jQuery) 
// remove the current question and add the next question, when the user clicks the “Next” button. 
// The Next button will be the only button to navigate this version of the quiz.
// You can ask for help in the comments below or preferably on Stack Overflow. You will likely to get a 
// prompt and accurate answer on Stack Overflow.


var App = {
	init: function() {
		QUES = [{
			"question": "Who is Prime Minister of the United Kingdom?", 
			"choices": ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
			"correctAnswer": 0
		}, 
		{
			"question": "which one is a Borough in New York City?", 
			"choices": ["David Cameron", "Gordon Brown", "Brooklyn", "Tony Blair"], 
			"correctAnswer": 2
		}]
		App.createQandA();
		App.submitQues();
	},

	createQandA: function(questions) {
		var questions = 0;
		choiceHtml = "";
		var choices = QUES[questions].choices
		var question = QUES[questions].question

		if ( questions >= QUES.length ) {
			$( '.question' ).text('');
			$( '.question' ).text(question);
			$( '.container' ).find( '.choices' ).remove();
		}
			

		for( var i = 0; i < choices.length; i++ ) {
			choiceHtml += "<input type='radio' id=" + i + " " +  "name='choice' value=" + choices[i] + "/>"  +
			"<label>" + choices[i] + "</label><br>"
		}	
		$( '.question' ).html( question );
		$( '.choices' ).html( choiceHtml );
	},

	submitQues: function() {
		var questions = 0
		var score = 0

		$( '#submit' ).on( 'click', function(){
			if ( $( 'input[name=choice]:checked' )[0].id == QUES[questions].correctAnswer) {
				$( '.msg' ).html( 'Score: ' + score++ );
				$( '#submit' ).hide();

				if ( questions < QUES.length ) {
					$( '#next' ).show();
				}
			}
		});

		$( '#next' ).on( 'click', App.createQandA());
	}
}

$(document).ready(function(){
	App.init();
});