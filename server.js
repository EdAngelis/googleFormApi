"use strict";

import path from "path";
import google from "@googleapis/forms";
import { authenticate } from "@google-cloud/local-auth";
import form from "./forms/first.js";

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
      title: "Info Title",
    },
  };

  try {
    const create = await forms.forms.create({
      requestBody: newForm,
    });

    console.log(create.data.formId);

    for (const item of form.items) {
      const updateRes = await forms.forms.batchUpdate({
        formId: create.data.formId,
        requestBody: {
          requests: [
            {
              createItem: {
                item: item,
                location: { index: 0 },
              },
            },
          ],
        },
      });
      console.log("Item Created");
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

runSample().catch(console.error);
