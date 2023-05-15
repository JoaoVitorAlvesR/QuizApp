// const data = [
//     {
//       category: "HTML",
//       questions: [
//         {
//           question: "Qual tag cria um parágrafo?",
//           options: ["<p>", "<h1>", "<text>", "<ul>"],
//           answer: "<p>",
//           tip: "É uma tag de uma letra apenas",
//         },
//         {
//           question: "Qual atributo adiciona um link para a tag a?",
//           options: ["alt", "href", "src", "link"],
//           answer: "href",
//           tip: "Hyperlink Reference",
//         },
//         {
//           question: "As listas não ordenadas tem a tag de:",
//           options: ["<ol>", "<ul>", "<li>", "<list>"],
//           answer: "<ul>",
//         },
//         {
//           question: "Qual atributo deixa o input obrigatório?",
//           options: ["placeholder", "value", "required", "maxlength"],
//           answer: "required",
//         },
//         {
//           question: "A tag semântica indicada para rodapés é a:",
//           options: ["div", "main", "section", "footer"],
//           answer: "footer",
//         },
//       ],
//     },
//     {
//       category: "CSS",
//       questions: [
//         {
//           question: "Qual regra altera a cor de um elemento?",
//           options: ["color", "background-color", "font-size", "transition"],
//           answer: "color",
//           tip: "Cor em inglês",
//         },
//         {
//           question: "Para aumentar a fonte de um elemento utilizamos:",
//           options: ["font", "text-transform", "font-size", "hover"],
//           answer: "font-size",
//         },
//         {
//           question: "A posição que deixa um elemento fixo é a:",
//           options: ["static", "absolute", "fixed", "relative"],
//           answer: "fixed",
//         },
//       ],
//     },
//     {
//       category: "JavaScript",
//       questions: [
//         {
//           question: "O que é Vanilla JavaScript?",
//           options: [
//             "JavaScript puro",
//             "Uma biblioteca JavaScript",
//             "Um framework JavaScript",
//             "Um compilador de JavaScript",
//           ],
//           answer: "JavaScript puro",
//         },
//         {
//           question: "Com qual instrução declaramos uma constante em JavaScript?",
//           options: ["const", "let", "var", "define"],
//           answer: "const",
//         },
//         {
//           question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
//           options: ["string", "number", "boolean", "float"],
//           answer: "float",
//         },
//         {
//           question: "Qual dos métodos a seguir seleciona um elemento?",
//           options: ["querySelector", "parseInt", "sort", "reduce"],
//           answer: "querySelector",
//         },
//         {
//           question:
//             "Qual destas propriedades da a quantidade de elementos de um array?",
//           options: ["qty", "length", "items", "index"],
//           answer: "length",
//         },
//       ],
//     },
//   ];

//   export default data;

const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "What tag creates a paragraph?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "It's a tag with only one letter",
      },
      {
        question: "Which attribute adds a link to the a tag?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "Unordered lists have the tag:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Which attribute makes an input required?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "The semantic tag recommended for footers is:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Which rule changes the color of an element?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Color in English",
      },
      {
        question: "To increase the font size of an element, we use:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "The position that makes an element fixed is:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "What is Vanilla JavaScript?",
        options: [
          "Pure JavaScript",
          "A JavaScript library",
          "A JavaScript framework",
          "A JavaScript compiler",
        ],
        answer: "Pure JavaScript",
      },
      {
        question: "Which instruction declares a constant in JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question:
          "Which of the following data types does not exist in JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Which of the following methods selects an element?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Which of these properties gives the number of elements in an array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;
