import { CoordinateExtent, Position, XYPosition } from "reactflow";

export interface AddNodeArgs {
    input: number;
    output: number;
    setNodes: (nodes: any) => void;
    onClose: () => void;
    description?: string;
}

  export type NodeBlock = {
    id: string;
    position: XYPosition;
    data: {input:number,output:number,description?:string};
    type?: any;
    sourcePosition?: Position;
    targetPosition?: Position;
    hidden?: boolean;
    selected?: boolean;
    dragging?: boolean;
    draggable?: boolean;
    selectable?: boolean;
    connectable?: boolean;
    resizing?: boolean;
    deletable?: boolean;
    dragHandle?: string;
    width?: number | null;
    height?: number | null;
    parentNode?: string;
    zIndex?: number;
    extent?: 'parent' | CoordinateExtent;
    expandParent?: boolean;
    positionAbsolute?: XYPosition;
    ariaLabel?: string;
    focusable?: boolean;
    style?: React.CSSProperties;
    className?: string;
  };  

  export type NodeError = {
   errors:Array<{ 
    title: string,
    description?: string
   }>;
   hightlightNodes:Array<{
    id:string,
    error?:string
   }>;
  }