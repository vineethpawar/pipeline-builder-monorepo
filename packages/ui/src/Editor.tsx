"use client";
import React, { useState, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  Background,
  BackgroundVariant,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";
import "./Editor.css";

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
  return (
    <>
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
              background: "red",
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
    </>
  );
};

const nodeTypes = {
  customnode: CustomNode,
};

const ValidationFlow = () => {
  // @ts-ignores
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [json, setJson] = useState("");

  const onConnect = useCallback(
    // @ts-ignore
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );
  const addNode = useCallback(() => {
    setNodes((nodes) =>
      nodes.concat([
        {
          id: "G",
          type: "customnode",
          data: {
            input: 3,
            output: 3,
          },
          position: { x: 0, y: 400 },
        },
      ])
    );
  }, []);

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

export default ValidationFlow;
