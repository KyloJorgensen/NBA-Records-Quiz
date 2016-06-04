$(document).ready(function() {
	var score = 0,
		questionCount = 0,
		question; 
		questionObjects = {
		question: '',
		anwser: '',
		falseAnwser1: '',
		falseAnwser2: '',
		falseAnwser3: '',
		anwserComment: ''
	}
		firstQ = Object.create(questionObjects),
		secondQ = Object.create(questionObjects),
		thirdQ = Object.create(questionObjects),
		forthQ = Object.create(questionObjects),
		fifthQ = Object.create(questionObjects);

	firstQ.question = 'Who holds NBA career record for personal fouls?';
	firstQ.anwser = 'Kareem Abdul-Jabbar';
	firstQ.falseAnwser1 = 'Karl Malone	';
	firstQ.falseAnwser2 = 'Robert Parish';
	firstQ.falseAnwser3 = 'Charles Oakley';
	firstQ.anwserComment = 'Kareem Abdul-Jabbar holds the NBA career record with 4657 personal fouls.';

	secondQ.question = 'Who holds the NBA career record for steals?';
	secondQ.anwser = 'John Stockton';
	secondQ.falseAnwser1 = 'Jason Kidd';
	secondQ.falseAnwser2 = 'Michael Jordan';
	secondQ.falseAnwser3 = 'Gary Payton';
	secondQ.anwserComment = 'John Stockton holds the NBA career record with 3265 steals.';

	thirdQ.question = 'Who holds NBA career records for 3-Pt field goals?';
	thirdQ.anwser = 'Ray Allen';
	thirdQ.falseAnwser1 = 'Reggie Miller';
	thirdQ.falseAnwser2 = 'Jason Terry';
	thirdQ.falseAnwser3 = 'Paul Pierce';
	thirdQ.anwserComment = 'Ray Allen holds the NBA career record with 2973 3-pt field goals.';

	forthQ.question = 'Who holds NBA career records for games played?';
	forthQ.anwser = 'Robert Parish';
	forthQ.falseAnwser1 = 'Kareem Abdul-Jabbar';
	forthQ.falseAnwser2 = 'John Stockton';
	forthQ.falseAnwser3 = 'Karl Malone';
	forthQ.anwserComment = 'Robert Parish holds the NBA career record with 1611 games played.';

	fifthQ.question = 'Who holds NBA career records for blocks?';
	fifthQ.anwser = 'Hakeem Olajuwon';
	fifthQ.falseAnwser1 = 'Dikembe Mutombo';
	fifthQ.falseAnwser2 = 'Kareem Abdul-Jabbar';
	fifthQ.falseAnwser3 = 'Mark Eaton';
	fifthQ.anwserComment = 'Hakeem Olajuwon holds the NBA career record with 3830 blocks.';

	var questionsArray = [firstQ, secondQ, thirdQ, forthQ, fifthQ]


	//Changes page
	$('body').on('click', '.start', function() {
		nextQuestion();
		$('button').text('SUBMIT')
		.removeClass('start')
		.addClass('submit');
	})
	.on('click', '.submit', function() {
		verifySelection();
	})
	.on('click', '.next', function() {
		nextQuestion();
		$('button').text('SUBMIT')
		.removeClass('next')
		.addClass('submit');
		if (questionCount == 6) {
			gameOver();
		}
	})
	.on('click', '.tryagain', function() {
		newGame();
		$('button').text('START')
		.removeClass('tryagain')
		.addClass('start');
	})
	.on('click', '.icon-check-empty', function(){
		$('i').removeClass('icon-check');
		$('i').addClass('icon-check-empty');
		$(this).removeClass('icon-check-empty');
		$(this).addClass('icon-check');
	})
	.on('click', '.help', function() {
		$('footer').show();
		$(this).hide();
	})
	.on('click', 'footer', function () {
		$('.help').show();
		$(this).hide();
	});

	//starts a new game
	function newGame() {
		score = 0
		$('#score').text(score);
		questionCount = 0;
		$('#questioncounter').text('0');
		$('.textbox').text('READY TO PLAY!!');
		$('button').text('START');
		$('.end').hide();
	}

	// gets next question page
	function nextQuestion() {
		question = questionsArray[questionCount];
		questionCount++;
		if (questionCount < 6) { 
			$('#questioncounter').text(questionCount);
			$('.textbox').text(question.question);
			var awnsers = [question.anwser, question.falseAnwser1, question.falseAnwser2, question.falseAnwser3];
			awnsers = shuffle(awnsers);
			$('ul').empty();
			for (var i = 0; i < awnsers.length; i++) {
				$('ul').append('<li><i class="icon-check-empty"></i><p>' + awnsers[i] + '</p></li>')
			}
			$('button').text('SUBMIT');
		}
		
	}
	//shuffles arrays
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	//verifies if the user has selected a anwser
	function verifySelection() {
		$('i').hasClass('icon-check') ? anwserPage() : alert('Please select your anwser.');
	}

	function anwserPage() {
		$('.icon-check').siblings('p').html() == question.anwser ? scored() : $('.textbox').text('Sorry to got it wrong.');
		$('ul').empty();
		$('ul').append('<li><p>' + question.anwserComment + '</p></li>')
		$('button').text('NEXT')
		.removeClass('submit')
		.addClass('next');
	}

	function scored() {
		$('.textbox').text('YOU GOT IT RIGHT!!');
		score ++;
		$('#score').text(score);
	}

	function gameOver() {
		$('.textbox').text('YOUR SCORE: ' + score)
		$('ul').empty();
		$('ul').append('<li><p>Thanks for playing!</p></li>')
		$('button').text('TRYAGAIN')
		.removeClass('submit')
		.addClass('tryagain');
		$('ul').empty();
	}
});