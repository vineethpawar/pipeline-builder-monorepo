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
import { ErrorNode, NormalNode } from "./NodeBlocks";


const nodeTypes = {
  customnode: NormalNode,
  errornode: ErrorNode,
};

const Editor:React.FC = () => {
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
