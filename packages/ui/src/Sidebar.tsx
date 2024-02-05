"use client";
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, InputNumber, Row, Select, Space, Spin } from 'antd';

const { Option } = Select;

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [labelName,setLabelName] = useState('')
  const [num_inputs,setNumInputs] = useState(0);
  const [num_outputs,setNumOutputs] = useState(0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" style={{position:'absolute',top:'15px',left:'15px',zIndex:100}} onClick={showDrawer} icon={<PlusOutlined />}>
        Add Node
      </Button>
      <Drawer
        placement='left'
        title="Enter Node details"
        width={400}
        onClose={onClose}
        open={open}
       
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>

              <Form.Item
                name="name"
                label="Label Name"
                rules={[{ required: true, message: 'Enter label name' }]}
              >
                <Input placeholder="Please enter label name" value={labelName} onChange={(val)=>setLabelName(val)} />
              </Form.Item>

              <Form.Item
                name="inputNum"
                label="Number of Inputs"
                rules={[{ required: false, message: 'Enter number of inputs' }]}
              >
                <InputNumber style={{width:'100%'}} defaultValue={0} placeholder="Number of inputs" value={num_inputs} onChange={val=>setNumInputs(val)} />
              </Form.Item>
      
              <Form.Item
                name="outputNum"
                label="Number of Outputs"
                rules={[{ required: false, message: 'Number of outputs' }]}
              >
                <InputNumber style={{width:'100%'}} defaultValue={0} placeholder="Number of outputs"  value={num_outputs} onChange={val=>setNumOutputs(val)} />
              </Form.Item>

      
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description (JSON)"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default SideBar;