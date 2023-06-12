module.exports.handler = async (event, context) => {
  console.log("event", event);
  console.log("context", context);
  return {
    nodeVersion: process.version,
  };
};
