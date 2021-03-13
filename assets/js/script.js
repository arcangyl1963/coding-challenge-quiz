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
  ]

  //Start the quiz
  
  $('#quiz').quiz({
    questions: myQuiz
  });