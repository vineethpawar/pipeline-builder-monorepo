import { createContext, useContext, useState } from 'react';
import { useEdgesState, useNodesState } from 'reactflow';

const MyContext = createContext({
    num_inputs: 0,
    num_outputs: 0,
    description: "",
    setNumInputs: (num: number) => {},
    setNumOutputs: (num: number) => {},
    setDescription: (description: string) => {},
    nodes: [],
    setNodes: (nodes: any) => {},
    onNodesChange: (nodes: any) => {},
    edges: [],
    setEdges: (edges: any) => {},
    onEdgesChange: (edges: any) => {},
});

interface MyContextProps { 
    children: React.ReactNode 
}

export const MyContextProvider = ({ children }:MyContextProps ) => {
    const [num_inputs, setNumInputs] = useState(0);
    const [num_outputs, setNumOutputs] = useState(0);
    const [description, setDescription] = useState("");
  
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const contextValue = {
    num_inputs,
    num_outputs,
    description,
    setNumInputs,
    setNumOutputs,
    setDescription,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
};
  // @ts-ignore
  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  return useContext(MyContext);
};