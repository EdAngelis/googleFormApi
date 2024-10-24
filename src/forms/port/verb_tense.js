//https://forms.gle/7d8YVxJqxH6Cyfp57
export default {
  items: [
    {
      title: "Nome da princesa",
      questionItem: {
        question: {
          required: true,
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Ellys",
                isOther: false,
              },
              {
                value: "Louise",
                isOther: false,
              },
            ],
          },
        },
      },
    },
    {
      title: `A menina corre`,
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "presente",
                },
              ],
            },
            whenWrong: {
              text: "O verbo corre está no presente",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "O garoto <estudou> para a prova",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "passado",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'estudou' está no passado.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Eles <viajarão> para o exterior",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "futuro",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'viajarão' está no futuro.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Nós <estudamos> juntos",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "presente",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'estudamos' está no presente.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Ela <falará> com o professor",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "futuro",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'falará' está no futuro.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Você <correu> no parque ontem",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "passado",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'correu' está no passado.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Ele <está aprendendo> a tocar violão",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "presente",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'está aprendendo' está no presente.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Eles <construíram> uma casa nova",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "passado",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'construíram' está no passado.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Nós <compraremos> um carro novo",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "futuro",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'compraremos' está no futuro.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Eu <leio> livros todos os dias",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "presente",
                },
              ],
            },
            whenWrong: {
              text: "O verbo 'leio' está no presente.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "presente",
                isOther: false,
              },
              {
                value: "passado",
                isOther: false,
              },
              {
                value: "futuro",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
  ],
};

// Crie 2 questões para cada pronome de forma ramdomizada,
// utilizando este objeto javascript como modelo,
// ponha uma explicação no field whenWrong
