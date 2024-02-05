import { CheckSquareOutlined } from '@ant-design/icons'
import { Button,notification } from 'antd'
import React from 'react'
import { useMyContext } from './MyContext'
import { checkPipelineErrors } from './../../util/validators/validatePipeline';

const ValidateButton = () => {
  const {nodes,edges} = useMyContext();
  const validatePipeline = () => {
    const {errors,hightlightNodes} = checkPipelineErrors({nodes,edges});
    
   if(errors.length === 0){
    notification.success({
      message: `Pipeline is valid!`,
      placement:'topRight'
    });
   } else {
    errors.forEach((err) => {
      notification.error({
        message: err?.title,
        placement:'topRight'
      });
    });
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