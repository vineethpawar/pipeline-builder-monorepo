import { createContext, useContext, useState } from 'react';
import { useEdgesState, useNodesState } from 'reactflow';

const MyContext = createContext({
    numInputs: 0,
    numOutputs: 0,
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
    const [numInputs, setNumInputs] = useState(0);
    const [numOutputs, setNumOutputs] = useState(0);
    const [description, setDescription] = useState("");
  
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const contextValue = {
    numInputs,
    numOutputs,
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