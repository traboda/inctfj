import corpusJSON from '../configs/corpus-en.json';

const { containerBootstrap } = require("@nlpjs/core");
const { Nlp } = require("@nlpjs/nlp");
const { LangEn } = require("@nlpjs/lang-en-min");
const { fs } = require("@nlpjs/request-rn");

const GetResponse = async (msg) => {
  const container = await containerBootstrap();
  container.register("fs", fs);
  container.use(Nlp);
  container.use(LangEn);
  const nlp = container.get("nlp");
  nlp.settings.autoSave = false;
  await nlp.addCorpus(corpusJSON);
  await nlp.train();
  const response = await nlp.process("en", msg);
  return response;
};

export default function getResponse(msg) {
  return GetResponse(msg);
}
