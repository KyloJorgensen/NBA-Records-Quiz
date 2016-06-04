$(document).ready(function() {
	var questionCount = 0,
		question = {
		question: '',
		anwser: '',
		falseAnwser1: '',
		falseAnwser2: '',
		falseAnwser3: '',
		anwserComment: ''
	}
		firstQ = Object.create(question),
		secondQ = Object.create(question),
		thirdQ = Object.create(question),
		forthQ = Object.create(question),
		fifthQ = Object.create(question);

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

	//starts a new game
	function newGame() {
		$('#score').text('0');
		questionCount = 0;
		$('#questioncounter').text('0');
		$('.textbox').text('READY TO PLAY!!');
		$('button').text('START');
		$('.end').hide();
		$('.questions').hide();
	}
	//Changes page
	$('body').on('click', 'button', function() {
		$('button').html() == 'START' ? nextQuestion(questionCount) : '';
		$('button').html() == 'SUBMIT' ? : '';
		$('button').html() == 'NEXT' ? nextQuestion(questionCount) : '';
		$('button').html() == 'TRY AGAIN' ? newGame() : ''; 
	});

	function nextQuestion(questionCount) {
		
	}

	//selects a choice
	$('ul').on('click', '.icon-check-empty', function(){
		$('i').removeClass('icon-check');
		$('i').addClass('icon-check-empty');
		$(this).removeClass('icon-check-empty');
		$(this).addClass('icon-check');
	});



});