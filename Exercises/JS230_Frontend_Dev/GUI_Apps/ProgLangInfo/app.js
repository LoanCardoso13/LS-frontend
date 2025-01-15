/*

A page that gives a description of one paragraph of a few programming languages of your choice and give the user the option to show/hide a portion of the paragraph.

Requirements
* Create a collection of programming languages of your choice.
* Display a heading and a paragraph for each programming language.
* Initially, display the first 120 characters for each paragraph.
* There is a Show More button for each programming language.

Functionality
* When the user clicks the Show More button:
** Display the entire paragraph about the corresponding language.
** Change the button text to Show Less.

* When the user clicks the Show Less button:
** Change the button text to Show More.
** Hide all but the first 120 characters of the paragraph text.

You can choose any programming languages you want. Here's are some candidate languages you can use:

const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

*/

const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

$(function() {
  languages.forEach(lang => {
    const $langContainer = $('<div>', {class: 'lang', "data-lang": lang.name});
    $langContainer.append($('<h2>').text(lang.name));
    $langContainer.append($('<p>').text(lang.description.split('').slice(0, 120).join('') + '...'));
    $langContainer.append($('<a>', {class: 'more', href: '#'}).text('Show More'));
    $('#languages').append($langContainer);
  });

  $('a.more').on('click', e => {
    const $langContainer = $(e.target).parent();
    const langChosen = $langContainer.attr("data-lang");
    const text = languages.filter(lang => lang.name === langChosen)[0].description;
    console.log(e.target.textContent)
    if (e.target.textContent === "Show More") {
      $langContainer.find('p').text(text);
      $langContainer.find('a.more').text("Show Less");
    } else if (e.target.textContent === "Show Less") {
      $langContainer.find('p').text(text.split('').slice(0, 120).join('') + '...')
      $langContainer.find('a.more').text("Show More");
    }
  });
});
