import { APIGatewayProxyEvent, ScheduledEvent } from "aws-lambda";

module.exports.handler = async (
  event: APIGatewayProxyEvent | ScheduledEvent,
  context
) => {
  console.log("event", event);
  console.log("context", context);
  return {
    nodeVersion: process.version,
  };
};
