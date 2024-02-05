"use client";
import { useCallback } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  Position,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import "./Editor.css";
import { useMyContext } from "./MyContext";

const initialNodes = [
  {
    id: "A",
    type: "customnode",
    data: {
      input: 1,
      output: 3,
    },

    position: { x: 0, y: -150 },
  },
  {
    id: "B",
    type: "customnode",
    data: {
      input: 3,
      output: 3,
    },
    position: { x: 0, y: 0 },
  },
  { id: "C", type: "customnode", position: { x: 0, y: 150 } },
  { id: "D", type: "customnode", position: { x: 0, y: 300 } },
];
// @ts-ignore
const CustomNode = ({ id, data }) => {
  const input = data?.input || 0;
  const output = data?.output || 0;
  console.log('DESCR',data);

  
  return (
    <div style={data?.description?JSON.parse(data?.description|| '{}'):{}}>
      <div>{id}</div>
      {Array(input)
      // @ts-ignore
        ?.fill((_, i) => i + 1)
        .map((_, index) => (
          <Handle
            id={"source" + index}
            type="source"
            position={Position.Top}
            style={{
              left: index * (100 / (input ? input - 1 : 1)) + "%",
            }}
          />
        ))}

      {Array(output)
      // @ts-ignore
        ?.fill((_, i) => i + 1)
        .map((_, index) => (
          <Handle
            id={"target" + index}
            type="target"
            position={Position.Bottom}
            style={{
              background: "blue",
              left: index * (100 / (output ? output - 1 : 1)) + "%",
            }}
          />
        ))}
    </div>
  );
};

const nodeTypes = {
  customnode: CustomNode,
};

const Editor = () => {
   const {nodes, onNodesChange, edges, setEdges, onEdgesChange} = useMyContext();

  const onConnect = useCallback(
    // @ts-ignore
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );
 
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className="validationflow"
        style={{ width: "100%", height: "100%" }}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        
      >
         <Controls />
         <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Editor;
