import { notification } from "antd";
import { uniqueNamesGenerator } from "unique-names-generator";
import { labelCustomConfig } from "./config";
import { AddNodeArgs } from "./types";

export const addNodeToEditor = ({input,output,onClose,setNodes,description='{}'}:AddNodeArgs) => {
    const label = uniqueNamesGenerator(labelCustomConfig);
    const newNode = {
      id: label,
      type: "customnode",
      data: {
        input,
        output,
        description
      },
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
