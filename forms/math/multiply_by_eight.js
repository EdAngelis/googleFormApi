const responderUri = "";
const formId = "";

export default {
  title: "Tabuada de Multiplicação por 3",
  documentTitle: "Tabuada 3",
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
  ],
};
