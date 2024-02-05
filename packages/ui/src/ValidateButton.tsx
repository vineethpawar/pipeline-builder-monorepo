import { CheckSquareOutlined } from '@ant-design/icons'
import { Button,notification } from 'antd'
import React from 'react'
import { useMyContext } from './MyContext'
import { checkPipelineErrors } from './../../util/validators/validatePipeline';
import { NodeBlock } from '../../util/types';

const ValidateButton = () => {
  const {nodes,edges,setNodes} = useMyContext();

  const validatePipeline = () => {
    const {errors,hightlightNodes} = checkPipelineErrors({nodes,edges});

   if(errors.length === 0){
    notification.success({
      message: `Pipeline is valid!`,
      placement:'topRight'
    });
    // reset error nodes
    setNodes((prevNodes:NodeBlock[]) => {
      return prevNodes.map((node) => ({
        ...node,
        type: 'customnode',
      } 
    ))
    })
   } else {
    errors.forEach((err) => {
      notification.error({
        message: err?.title,
        placement:'topRight'
      });
    });
    setNodes((prevNodes:NodeBlock[]) => {
      return prevNodes.map((node) => {
        if(!!hightlightNodes.filter(hNode=>hNode?.id===node?.id)?.length){
          return {
            ...node,
            type: 'errornode',
          }
        }
        return node;
      })
    })
   }
  }
  return (
    <Button
        type="primary" 
        disabled={nodes.length === 0}
        size='large'
        style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 100, backgroundColor:'green'}}
        onClick={validatePipeline}
        icon={<CheckSquareOutlined />}
      >
        Validate
      </Button>
  )
}

export default ValidateButton