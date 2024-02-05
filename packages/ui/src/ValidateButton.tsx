import { CheckSquareOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const ValidateButton = () => {
  return (
    <Button
        type="primary" 
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