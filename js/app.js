$(document).ready(function() {
	'use strict';
    var score = 0,
        currentQuestion = -1,
        questions = [
            { question: 'Who holds NBA career record for personal fouls?', anwser: 'Kareem Abdul-Jabbar', chocies: ['Kareem Abdul-Jabbar', 'Karl Malone ', 'Robert Parish', 'Charles Oakley'], anwserComment: 'Kareem Abdul-Jabbar holds the NBA career record with 4657 personal fouls.' },
            { question: 'Who holds the NBA career record for steals?', anwser: 'John Stockton', chocies: ['John Stockton', 'Jason Kidd', 'Michael Jordan', 'Gary Payton'], anwserComment: 'John Stockton holds the NBA career record with 3265 steals.' },
            { question: 'Who holds NBA career records for 3-Pt field goals?', anwser: 'Ray Allen', chocies: ['Ray Allen', 'Reggie Miller', 'Jason Terry', 'Paul Pierce'], anwserComment: 'Ray Allen holds the NBA career record with 2973 3-pt field goals.' },
            { question: 'Who holds NBA career records for games played?', anwser: 'Robert Parish', chocies: ['Robert Parish', 'Kareem Abdul-Jabbar', 'John Stockton', 'Karl Malone'], anwserComment: 'Robert Parish holds the NBA career record with 1611 games played.' },
            { question: 'Who holds NBA career records for blocks?', anwser: 'Hakeem Olajuwon', chocies: ['Hakeem Olajuwon', 'Dikembe Mutombo', 'Kareem Abdul-Jabbar', 'Mark Eaton'], anwserComment: 'Hakeem Olajuwon holds the NBA career record with 3830 blocks.' }
        ];

    //listens for user to hit start next submit and tryagain buttons
    $('main').on('click', '.next', function() {
        validateQuestion();
    })
    .on('click', '.submit', function() {
        valifySelection();
    })
    .on('click', '.tryagain', function() {
        tryagain();
    });

    // changes which anwser the users is chooseing
    $('body').on('click', 'i', function() {
        $('i').removeClass('icon-check');
        $('i').addClass('icon-check-empty');
        $(this).removeClass('icon-check-empty');
        $(this).addClass('icon-check');
    })
    // shows help box
    .on('click', '.help', function() {
        $('footer').show();
        $(this).hide();
    })
    // hides helpbox
    .on('click', 'footer', function() {
        $('.help').show();
        $(this).hide();
    });

    // validates that there is another question from questions Array
    function validateQuestion() {
		currentQuestion++;
        if (currentQuestion < questions.length) {
        	generateQuestion()
        	$('#currentQuestion').text(currentQuestion + 1);
            changeButton('next', 'submit');
        } else {
            gameOver();
            changeButton('next', 'tryagain');
        }
    }

    // generates a questions from questions array
    function generateQuestion() {
        $('.textbox').text(questions[currentQuestion].question);
        var chocies = shuffle(questions[currentQuestion].chocies);
        $('ul').empty();
        for (var i = 0; i < chocies.length; i++) {
            $('ul').append('<li><i class="icon-check-empty"></i><p>' + chocies[i] + '</p></li>')
        }
    }

    // shuffles an array
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // changes button in main
    function changeButton(currentButton, newbutton) {
        $('main').children('button').text(newbutton).removeClass(currentButton).addClass(newbutton);
        if (currentButton == 'tryagain') {
 			$('main').children('button').text('start')
    	}
    }

    // shows score and butto to try again.
    function gameOver() {
        $('.textbox').text('YOUR SCORE: ' + score)
        $('ul').empty();
        $('ul').append('<li><p>Thanks for playing!</p></li>')
    }

    //verifies if the user has selected a choice
    function valifySelection() {
        if ($('i').hasClass('icon-check')) {
        	validateChoice();
            generateAnwserComment();
            changeButton('submit', 'next');
        } else {
            alert('Please select your anwser.');
        }
    }

    //vaildates users choice
    function validateChoice() {
        generateAnwser($('.icon-check').siblings('p').html() == questions[currentQuestion].anwser);
    }

    // generates Anwser
    function generateAnwser(result) {
    	if (result) {
			$('.textbox').text('YOU GOT IT RIGHT!!');
            score++;
            $('#score').text(score);
		} else {
			$('.textbox').text('Sorry got that one wrong.');
		}
    }

    // gets Anwser comment
    function generateAnwserComment() {
        $('ul').empty();
        $('ul').append('<li><p>' + questions[currentQuestion].anwserComment + '</p></li>')
    }

    // when tyragain button is push starts new game
    function tryagain() {
        newGame();
        changeButton('tryagain', 'next');
    }

    //starts a new game
    function newGame() {
        score = 0;
        $('#score').text(score);
        currentQuestion = -1;
        $('#currentQuestion').text(currentQuestion + 1);
        $('.textbox').text('READY TO PLAY!!');
        $('button').text('START');
        $('ul').empty();
    }

});
