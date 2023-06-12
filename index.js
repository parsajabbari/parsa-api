module.exports.handler = async (event) => {
  console.log("event", event);
  return {
    nodeVersion: process.version,
  };
};
