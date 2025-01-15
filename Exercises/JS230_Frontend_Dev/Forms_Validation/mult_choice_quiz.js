/*

For this project, build a multiple choice quiz application that uses an answer key to mark questions right or wrong.

Specifications
* You can use the question collection shown below or a collection of your choice.
* Render the question collection to the page. Each question should let the user select a radio button to choose one of four possible answers.
* Add a Submit and Reset button.
* When the user clicks the submit button, mark each question as correct, wrong, or unanswered.
* When the user supplies a correct answer, display a "Correct Answer" message beneath the radio buttons for that question.
* When the user supplies an incorrect answer or fails to answer the question, display an appropriate error message and the correct answer beneath the radio buttons for that question.
* Disable the Submit button after the user submits the quiz.
* When the user clicks the Reset button, clear all selected radio buttons and messages and enable the Submit button.

Data
You can choose questions that interest you personally. We use the following question collection in the demo app. Don't worry if you don't follow the references in these questions. The questions refer to the book The Hitchhiker's Guide to the Galaxy by Douglas Adams. Highly recommended if you have the time for recreational reading!

const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

*/

const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

const questionTemplate = Handlebars.compile($('#question_template').html());

const wrongAns = ans => `Wrong answer. The correct answer is: ${ans}.`;
const emptyAns = ans => `You didn't answer this question. The correct answer is: ${ans}.`;
const rightAns = 'Correct answer';

$(function() {
  questions.forEach(question => $('form fieldset').append(questionTemplate(question)));

  $('a.submit').on('click', e => {
    e.preventDefault();

    if (!$('a.submit').hasClass('disabled')) {
      $('div.question').toArray().forEach(question => {
        const $question = $(question);

        if ($question.find('input:checked').length === 0) {
          $question.find('p.result').addClass('wrong');
          $question.find('p.result').text(emptyAns(answerKey[$question.attr("data-id")]));
        } else {

          if ( $question.find('input:checked').val() !== answerKey[$question.attr("data-id")] ) {
            $question.find('p.result').addClass('wrong');
            $question.find('p.result').text(wrongAns(answerKey[$question.attr("data-id")]));
          } else {
            $question.find('p.result').addClass('correct');
            $question.find('p.result').text(rightAns);
          }

        }
      });
      $('a.submit').addClass('disabled');
      $('a.reset_form').removeClass('disabled');
    }
  });

  $('a.reset_form').on('click', e => {
    e.preventDefault();

    $('form')[0].reset();
    $('a.submit').removeClass('disabled');
    $('a.reset_form').addClass('disabled');
    $('p.result').removeClass('wrong correct').text('');
  })
});
