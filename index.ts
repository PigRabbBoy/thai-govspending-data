import { Caller } from "./caller";
import { SaveToJson } from "./save";

console.log("Hello via Bun!");
console.log(Bun.env.Test);

const apiKey = Bun.env['API-KEY']

const caller = new Caller(apiKey!)
const saveService = new SaveToJson(caller)

await saveService.saveDepartment();