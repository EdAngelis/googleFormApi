const responderUri =
  "https://docs.google.com/forms/d/e/1FAIpQLSerOAKWSll3T2Z-qGyUZBCd4p1CHBYlApcsMUlIG46t2gNd5A/viewform";
const formId = "1VikGfQcTjQwR3_ogPcxOqHwrIIELSbVZSgJJdOs_NVY";
const youTubeVideo = "";
export default {
  title: "Ecossistema e Relações Ecológicas",
  documentTitle: "Ecossistema e Relações Ecológicas",
  items: [
    {
      title: "O que é um ecossistema?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value:
                    "Um conjunto de seres vivos e elementos não vivos que interagem entre si.",
                },
              ],
            },
            whenWrong: {
              text: "Um ecossistema é formado por seres vivos e elementos como água, luz e solo que interagem.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Um conjunto de apenas plantas que vivem na floresta.",
                isOther: false,
              },
              {
                value:
                  "Um conjunto de seres vivos e elementos não vivos que interagem entre si.",
                isOther: false,
              },
              {
                value: "A interação entre animais de diferentes espécies.",
                isOther: false,
              },
              {
                value: "O local onde os humanos vivem com animais domésticos.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "O que é o fluxo de energia em um ecossistema?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value:
                    "A transferência de energia do sol para os seres vivos.",
                },
              ],
            },
            whenWrong: {
              text: "O fluxo de energia começa com o sol, passa pelas plantas e segue para outros seres vivos.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "A transferência de energia da água para o solo.",
                isOther: false,
              },
              {
                value: "A troca de energia entre os animais e os humanos.",
                isOther: false,
              },
              {
                value: "A transferência de energia do sol para os seres vivos.",
                isOther: false,
              },
              {
                value: "A troca de energia entre as plantas e o ar.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "No mutualismo, como os seres vivos se comportam?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Ambos se beneficiam da relação.",
                },
              ],
            },
            whenWrong: {
              text: "No mutualismo, os dois seres vivos envolvidos na relação saem ganhando.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value:
                  "Apenas um se beneficia, enquanto o outro não é prejudicado.",
                isOther: false,
              },
              {
                value: "Ambos se beneficiam da relação.",
                isOther: false,
              },
              {
                value: "Um ser vivo se beneficia e o outro é prejudicado.",
                isOther: false,
              },
              {
                value: "Um se beneficia, enquanto o outro sobrevive.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Qual das opções abaixo é um exemplo de parasitismo?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "O carrapato se alimentando do sangue de um cachorro.",
                },
              ],
            },
            whenWrong: {
              text: "No parasitismo, o parasita vive às custas do hospedeiro, como o carrapato no cachorro.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "A abelha polinizando uma flor.",
                isOther: false,
              },
              {
                value: "O pássaro comendo insetos de um boi.",
                isOther: false,
              },
              {
                value: "O carrapato se alimentando do sangue de um cachorro.",
                isOther: false,
              },
              {
                value: "Dois leões disputando território.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "O que é predação?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Quando um ser vivo caça e se alimenta de outro.",
                },
              ],
            },
            whenWrong: {
              text: "A predação é quando um animal (predador) caça e come outro animal (presa).",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Quando um animal vive às custas de outro.",
                isOther: false,
              },
              {
                value: "Quando um ser vivo caça e se alimenta de outro.",
                isOther: false,
              },
              {
                value: "Quando dois seres vivos se ajudam.",
                isOther: false,
              },
              {
                value: "Quando seres vivos competem pelo mesmo território.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Como funciona a competição em um ecossistema?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value:
                    "Dois seres vivos disputam recursos, como comida ou território.",
                },
              ],
            },
            whenWrong: {
              text: "Na competição, os seres vivos disputam recursos necessários para sobreviver, como comida ou espaço.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Dois seres vivos se beneficiam mutuamente.",
                isOther: false,
              },
              {
                value: "Um ser vivo se alimenta de outro.",
                isOther: false,
              },
              {
                value:
                  "Dois seres vivos disputam recursos, como comida ou território.",
                isOther: false,
              },
              {
                value: "Um ser vivo vive às custas de outro.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Qual das opções é um exemplo de competição?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Dois leões disputando o mesmo território.",
                },
              ],
            },
            whenWrong: {
              text: "Na competição, os seres vivos disputam recursos, como território, por exemplo.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Dois leões disputando o mesmo território.",
                isOther: false,
              },
              {
                value: "O pássaro comendo os parasitas de um boi.",
                isOther: false,
              },
              {
                value: "A abelha polinizando uma flor.",
                isOther: false,
              },
              {
                value: "Um leão caçando uma zebra.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Qual a diferença entre mutualismo e protocoperação?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value:
                    "No mutualismo, os seres vivos dependem um do outro, na protocoperação não.",
                },
              ],
            },
            whenWrong: {
              text: "No mutualismo, os seres vivos não sobrevivem sem a relação. Na protocoperação, eles podem sobreviver separados.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value:
                  "No mutualismo, os seres vivos dependem um do outro, na protocoperação não.",
                isOther: false,
              },
              {
                value: "Na protocoperação, os seres vivos são prejudicados.",
                isOther: false,
              },
              {
                value: "No mutualismo, apenas um ser vivo é beneficiado.",
                isOther: false,
              },
              {
                value: "No mutualismo, não há benefícios para nenhum ser vivo.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Qual das opções é um exemplo de protocoperação?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "O pássaro que come parasitas no boi.",
                },
              ],
            },
            whenWrong: {
              text: "A protocoperação ocorre quando dois seres vivos se beneficiam, mas não dependem dessa relação para sobreviver, como o pássaro e o boi.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "A abelha e a flor.",
                isOther: false,
              },
              {
                value: "O leão e a zebra.",
                isOther: false,
              },
              {
                value: "O pássaro que come parasitas no boi.",
                isOther: false,
              },
              {
                value: "O carrapato e o cachorro.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Como a energia entra nos ecossistemas?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value:
                    "Através da luz solar que as plantas utilizam para crescer.",
                },
              ],
            },
            whenWrong: {
              text: "A energia entra no ecossistema pelo sol, que as plantas utilizam para produzir energia.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Através da água da chuva.",
                isOther: false,
              },
              {
                value: "Através do vento que ajuda na polinização.",
                isOther: false,
              },
              {
                value:
                  "Através da luz solar que as plantas utilizam para crescer.",
                isOther: false,
              },
              {
                value: "Através do calor gerado pelos animais.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "O que é uma relação ecológica?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "A interação entre seres vivos em um ecossistema.",
                },
              ],
            },
            whenWrong: {
              text: "Uma relação ecológica é a interação entre diferentes seres vivos dentro de um ecossistema.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Um tipo de planta que vive na água.",
                isOther: false,
              },
              {
                value: "A interação entre seres vivos em um ecossistema.",
                isOther: false,
              },
              {
                value: "A maneira como os humanos modificam o ambiente.",
                isOther: false,
              },
              {
                value: "Um animal que vive sozinho em seu habitat.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "O que acontece na relação de parasitismo?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Um ser vivo se beneficia, prejudicando o outro.",
                },
              ],
            },
            whenWrong: {
              text: "No parasitismo, um ser vivo se alimenta ou vive às custas do outro, prejudicando-o.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Ambos os seres vivos se beneficiam.",
                isOther: false,
              },
              {
                value: "Um ser vivo se beneficia, prejudicando o outro.",
                isOther: false,
              },
              {
                value: "Os dois seres vivos competem por recursos.",
                isOther: false,
              },
              {
                value: "Nenhum dos seres vivos é prejudicado.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Como as plantas participam do fluxo de energia?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Elas produzem energia através da fotossíntese.",
                },
              ],
            },
            whenWrong: {
              text: "As plantas captam a luz solar e realizam fotossíntese, transformando energia solar em alimento.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Elas produzem energia através da fotossíntese.",
                isOther: false,
              },
              {
                value: "Elas consomem outros animais para obter energia.",
                isOther: false,
              },
              {
                value: "Elas pegam energia da água.",
                isOther: false,
              },
              {
                value: "Elas armazenam energia em suas raízes.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Em uma relação de predação, qual é o papel do predador?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "O predador caça e se alimenta da presa.",
                },
              ],
            },
            whenWrong: {
              text: "O predador é o animal que caça outro ser vivo, chamado presa, para se alimentar.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "O predador foge de outros animais.",
                isOther: false,
              },
              {
                value: "O predador compete por recursos.",
                isOther: false,
              },
              {
                value: "O predador caça e se alimenta da presa.",
                isOther: false,
              },
              {
                value: "O predador ajuda outros animais.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Qual das opções é um exemplo de mutualismo?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "As abelhas polinizando flores.",
                },
              ],
            },
            whenWrong: {
              text: "No mutualismo, ambos os seres vivos se beneficiam. Um exemplo é a polinização feita pelas abelhas nas flores.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "As abelhas polinizando flores.",
                isOther: false,
              },
              {
                value: "Os carrapatos sugando o sangue de um cachorro.",
                isOther: false,
              },
              {
                value: "Dois leões disputando território.",
                isOther: false,
              },
              {
                value: "Um leão caçando uma zebra.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title:
        "Em qual das opções os seres vivos se ajudam, mas podem viver separados?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Na protocoperação.",
                },
              ],
            },
            whenWrong: {
              text: "Na protocoperação, os seres vivos se ajudam, mas conseguem sobreviver sozinhos.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Na competição.",
                isOther: false,
              },
              {
                value: "No mutualismo.",
                isOther: false,
              },
              {
                value: "No parasitismo.",
                isOther: false,
              },
              {
                value: "Na protocoperação.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "O que caracteriza a relação de predação?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Um ser vivo caça outro para se alimentar.",
                },
              ],
            },
            whenWrong: {
              text: "Na predação, o predador caça a presa para se alimentar.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Os seres vivos disputam comida.",
                isOther: false,
              },
              {
                value: "Dois seres vivos se ajudam.",
                isOther: false,
              },
              {
                value: "Um ser vivo caça outro para se alimentar.",
                isOther: false,
              },
              {
                value: "Um ser vivo se alimenta de plantas.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Qual é o papel da presa na relação de predação?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Ela é caçada pelo predador.",
                },
              ],
            },
            whenWrong: {
              text: "Na predação, a presa é o ser vivo que é caçado pelo predador.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Ela caça o predador.",
                isOther: false,
              },
              {
                value: "Ela foge de outros animais.",
                isOther: false,
              },
              {
                value: "Ela é caçada pelo predador.",
                isOther: false,
              },
              {
                value: "Ela compete por comida.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "Como ocorre a transferência de energia entre os seres vivos?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Através da alimentação, de plantas para animais.",
                },
              ],
            },
            whenWrong: {
              text: "A energia é transferida entre os seres vivos através da alimentação: as plantas produzem energia que é consumida por animais.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Através do vento que carrega a energia.",
                isOther: false,
              },
              {
                value: "Através da alimentação, de plantas para animais.",
                isOther: false,
              },
              {
                value: "Através da competição por luz solar.",
                isOther: false,
              },
              {
                value: "Através da reprodução dos animais.",
                isOther: false,
              },
            ],
            shuffle: true,
          },
        },
      },
    },
    {
      title: "O que acontece na competição entre seres vivos?",
      questionItem: {
        question: {
          required: true,
          grading: {
            pointValue: 1,
            correctAnswers: {
              answers: [
                {
                  value: "Eles disputam por recursos como comida e território.",
                },
              ],
            },
            whenWrong: {
              text: "Na competição, os seres vivos disputam recursos como comida, água e território.",
            },
          },
          choiceQuestion: {
            type: "RADIO",
            options: [
              {
                value: "Eles se ajudam a encontrar comida.",
                isOther: false,
              },
              {
                value: "Eles disputam por recursos como comida e território.",
                isOther: false,
              },
              {
                value: "Eles se alimentam das mesmas plantas.",
                isOther: false,
              },
              {
                value: "Eles caçam uns aos outros.",
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
