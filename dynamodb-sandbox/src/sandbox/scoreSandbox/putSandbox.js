require("dotenv").config();

const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { docClient } = require("../../common/docClient.js")

async function main() {
  const command = new PutCommand({
    TableName: "score",
    Item: {
      student: "Taro",
      subject: `Math`,
      score_value: 75,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
}

main();
