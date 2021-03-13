const myQuiz = [
    {
      'q': '1. Commonly used data types DO NOT include:',
      'options': [
        'strings',
        'booleans',
        'alerts',
        'numbers'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Wrong!'
    },
    {
      'q': '2. The condition in an if/else statement is enclosed within ________.',
      'options': [
        'quotes',
        'curly brackets',
        'parentheses',
        'square brackets'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Wrong!'
    },
    {
      'q': '3. Arrays in JavaScript can be used to store ________.',
      'options': [
        'numbers & strings',
        'other arrays',
        'booleans',
        'all of the above'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Wrong!'
    },
    {
      'q': '4. String values must be enclosed within ________ when being assigned to variables.',
      'options': [
        'commas',
        'curly brackets',
        'quotes',
        'parentheses'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Wrong!'
    },
    {
      'q': '5. A very useful tool used during development & debugging for printing content to the debugger is:',
      'options': [
        'JavaScript',
        'terminal/bash',
        'for loops',
        'console.log'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Wrong!'
    }
  ];

  var myCounter = document.getElementById('timerCounter');
  var seconds = 60;
  var timerID = setTimeout(onTimer, 1000);
  function onTimer() {
    timerID
    if (seconds > -1) {
      console.log(timerID)
      myCounter.innerHTML = seconds + ' seconds remaining';
      seconds--;
    // } else {
    //     $('#quiz-finish-btn').click(clearInterval(timerID));
    //     console.log('Finish button clicked');
    }
  };

  $()
  // function pauseTimer() {
  //   $('#quiz-finish-btn').click(clearInterval(timerID));
  //   console.log('Finish button clicked');
  // };
  //Start the quiz
  
  $('#quiz').quiz({
    questions: myQuiz
  });

