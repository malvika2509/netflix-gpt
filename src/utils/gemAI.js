import { gemAPI_Key } from "./constants";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemAI_Key = new GoogleGenerativeAI(gemAPI_Key);
export default gemAI_Key;
