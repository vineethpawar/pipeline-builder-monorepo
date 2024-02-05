import React from 'react'
import { Handle, Position } from 'reactflow';
import { ErrorNodeProps, NormalNodeProps } from '../../util/types';

    
export const NormalNode:React.FC<NormalNodeProps> = ({ id, data }) => {
    const input = data?.input || 0;
    const output = data?.output || 0;
    
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

  
export const ErrorNode:React.FC<ErrorNodeProps> = ({ id, data }) => {
    const input = data?.input || 0;
    const output = data?.output || 0;
    
    return (
      <div style={data?.description?JSON.parse(data?.description|| '{}'):{}}>
        <div style={{backgroundColor:'red', border:'3px solid red'}}>
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
      </div>
    );
  };

