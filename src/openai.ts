import OpenAI from "openai";

export const handler = async () => {
  return process.env.OPENAI_API_KEY;
  // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // const completion = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.",
  //     },
  //     {
  //       role: "user",
  //       content:
  //         "Compose a poem that explains the concept of recursion in programming.",
  //     },
  //   ],
  //   model: "gpt-3.5-turbo",
  // });

  // return completion;
};
