import { notification } from "antd";
import { Config, adjectives, animals, colors, uniqueNamesGenerator } from "unique-names-generator";
import { AddNodeArgs } from "./interfaces";


const customConfig: Config = {
    dictionaries: [adjectives, colors,animals],
    separator: "-",
  };
  

export const addNodeToEditor = ({input,output,onClose,setNodes,description=''}:AddNodeArgs) => {
    const label = uniqueNamesGenerator(customConfig);
    const newNode = {
      id: label,
      type: "customnode",
      data: {
        input,
        output
      },
      description: description,
      position: { x: -100, y: 0 },
    };
    // @ts-ignore
    setNodes((nodes) => nodes.concat(newNode));
    notification.success({
      message: `${label} added`,
      placement:'topRight'
    });
    onClose();
  };
