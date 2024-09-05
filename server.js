// https://developers.google.com/forms/api/guides

import path from "path";
import google from "@googleapis/forms";
import { authenticate } from "@google-cloud/local-auth";
import { form } from "./forms/form.js";

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
      title: form.title,
      documentTitle: form.documentTitle,
    },
  };

  try {
    const create = await forms.forms.create({
      requestBody: newForm,
    });

    console.log(create.data);

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
      //       description: form.description,
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
    console.log("Items Created");
  } catch (error) {
    console.log(error);
  }
  return null;
}

runSample().catch(console.error);
