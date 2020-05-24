var myQuestions = [
	{
		question: "Question 1: The Corona beer is associated with the Corona virus.",
		newsimage: "../../image/corona_beer.jpg",
		newsimageheight: "250",
		newsimagewidth: "200",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'b'
	},
	{
		question: "Question 2: Wash your hands, wear a mask, and don't touch your face.",
		newsimage: "../../image/WorldHealth.jpg",
		newsimageheight: "500",
		newsimagewidth: "700",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'a'
	},
	{
		question: "Question 3: Don't be fooled. You shouldn't wear a mask.",
		newsimage: "../../image/Fool.jpg",
		newsimageheight: "400",
		newsimagewidth: "400",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'b'
	},
	{
		question: "Question 4: The Corona beer is not associated with the Corona virus.",
		newsimage: "../../image/Beer.jpg",
		newsimageheight: "500",
		newsimagewidth: "500",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'a'
	},
	{
		question: "Question 5: Don't consume chemicals to cure Covid 19.",
		newsimage: "../../image/FDA.jpg",
		newsimageheight: "700",
		newsimagewidth: "700",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'a'
	},
	{
		question: "Question 6: Covid 19 is a result of using microwaves.",
		newsimage: "../../image/Girl.jpg",
		newsimageheight: "400",
		newsimagewidth: "400",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'b'
	},
	{
		question: "Question 7: Wash your hands with soap and don't touch your face.",
		newsimage: "../../image/WorldHealth_2.jpg",
		newsimageheight: "1000",
		newsimagewidth: "1000",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'a'
	},
	{
		question: "Question 8: Chemicals can be consumed to cure Covid 19.",
		newsimage: "../../image/Trump.jpg",
		newsimageheight: "400",
		newsimagewidth: "400",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'b'
	},
	{
		question: "Question 9: Clean your lungs with disinfectant.",
		newsimage: "../../image/Trump_2.jpg",
		newsimageheight: "700",
		newsimagewidth: "700",
		answers: {
			a: 'Real',
			b: 'Fake'
		},
		correctAnswer: 'b'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		// for each question
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer
			for(letter in questions[i].answers){

				// add an html radio button
				answers.push(
					'<label id="radio">'
						+ '<input type="radio" style=“width:60px; height:60px;” name="question'+i+'" value="'+letter+'">'
						//+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div><img src="' + questions[i].newsimage + '" hieght="' 
				+ questions[i].newsimageheight + ' " width="' 
				+ questions[i].newsimagewidth + '"/></div>'			
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'green';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = 'SCORE: ' + numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}