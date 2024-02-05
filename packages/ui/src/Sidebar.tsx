"use client";
import React, { useState } from "react";
import { PlusOutlined, SubnodeOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  notification,
  Space,
} from "antd";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { useMyContext } from "./MyContext";
import { addNodeToEditor } from './../../util/common';


const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const { num_inputs, num_outputs, description, setDescription, setNumInputs, setNumOutputs, setNodes } =
    useMyContext();
  
  const addNode = () => {
    addNodeToEditor({input: num_inputs, output:num_outputs, onClose, setNodes, description });
    };

  return (
    <div>
      <Button
        type="primary"
        style={{ position: "absolute", top: "15px", left: "15px", zIndex: 100 }}
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Add Node
      </Button>
      <Drawer
        placement="left"
        title="Enter Node details"
        width={'100%'}
        style={{ maxWidth: 400 }}
        closeIcon={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Form.Item
            name="inputNum"
            label="Number of Inputs"
            rules={[{ required: false, message: "Enter number of inputs" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              defaultValue={0}
              placeholder="Number of inputs"
              value={num_inputs}
              // @ts-ignore
              onChange={(val) => setNumInputs(val)}
            />
          </Form.Item>

          <Form.Item
            name="outputNum"
            label="Number of Outputs"
            rules={[{ required: false, message: "Number of outputs" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              defaultValue={0}
              placeholder="Number of outputs"
              value={num_outputs}
              // @ts-ignore
              onChange={(val) => setNumOutputs(val)}
            />
          </Form.Item>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description (JSON)"
                rules={[
                  {
                    required: false,
                    message: "Please enter json description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Enter JSON description"
                  value={description}
                  // @ts-ignore
                  onChange={(val) => setDescription(val)}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            onClick={addNode}
            type="primary"
            block
            icon={<SubnodeOutlined />}
          >
            Submit
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default SideBar;
