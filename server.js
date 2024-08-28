// https://developers.google.com/forms/api/guides

import path from "path";
import google from "@googleapis/forms";
import { authenticate } from "@google-cloud/local-auth";
import form from "./forms/form.js";

const __dirname = path.resolve(path.dirname(""));

async function runSample() {
  const authClient = await authenticate({
    keyfilePath: path.join(__dirname, "credentials.json"),
    scopes: "https://www.googleapis.com/auth/drive",
  });
  const forms = google.forms({
    version: "v1",
    auth: authClient,
  });
  const newForm = {
    info: {
      title: `Substantivo Comum ou Próprio`,
    },
  };

  try {
    const create = await forms.forms.create({
      requestBody: newForm,
    });

    console.log(create.data.formId);

    var requests = [
      {
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: true,
            },
          },
          updateMask: "quizSettings.isQuiz",
        },
      },
      // {
      //   updateFormInfo: {
      //     info: {
      //       description: `Substantivo Comum: Designa seres, objetos ou conceitos de forma geral, sem especificar. Exemplo: "cidade", "livro", "professor".

      //       Substantivo Próprio: Designa seres, lugares ou objetos específicos, geralmente escrito com inicial maiúscula. Exemplo: "Brasil", "João", "Amazonas".`,
      //     },
      //     updateMask: "updateFormInfo.description",
      //   },
      // },
    ];

    for (const item of form.items) {
      requests.push({
        createItem: {
          item: item,
          location: { index: 0 },
        },
      });
    }

    const updateRes = await forms.forms.batchUpdate({
      formId: create.data.formId,
      requestBody: {
        includeFormInResponse: false,
        requests: requests,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return null;
}

runSample().catch(console.error);
