import { uniqueNamesGenerator } from "unique-names-generator";
import { labelCustomConfig } from "../util/config";

export const nodeData = [
  {
    id: uniqueNamesGenerator(labelCustomConfig),
    type: "customnode",
    position: { x: 100, y: 100 },
    input: 2,
    output: 3,
    description: '{"backgroundColor":"green","color":"white"}',
  },
  {
    id: uniqueNamesGenerator(labelCustomConfig),
    type: "customnode",
    position: { x: 150, y: 10 },
    input: 1,
    output: 4,
    description: "",
  },
  {
    id: uniqueNamesGenerator(labelCustomConfig),
    type: "customnode",
    position: { x: 200, y: 200 },
    input: 3,
    output: 1,
    description: '{"color":"green"}',
  },
];
