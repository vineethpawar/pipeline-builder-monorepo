export interface AddNodeArgs {
    input: number;
    output: number;
    setNodes: (nodes: any) => void;
    onClose: () => void;
    description?: string;
  }