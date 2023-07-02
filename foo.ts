import { APIGatewayProxyEvent, ScheduledEvent } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent | ScheduledEvent,
  context: any
) => {
  console.log("event", event);
  console.log("context", context);
  return {
    nodeVersion: process.version,
  };
};
