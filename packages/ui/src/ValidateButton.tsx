import { CheckSquareOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useMyContext } from './MyContext'

const ValidateButton = () => {
  const {nodes} = useMyContext();
  return (
    <Button
        type="primary" 
        disabled={nodes.length === 0}
        size='large'
        style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 100, backgroundColor:'green'}}
        onClick={()=>{}}
        icon={<CheckSquareOutlined />}
      >
        Validate
      </Button>
  )
}

export default ValidateButton