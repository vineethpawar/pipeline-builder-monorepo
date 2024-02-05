"use client";
import { PlusOutlined, SubnodeOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
} from "antd";
import React, { useState } from "react";
import { addNodeToEditor } from "./../../util/common";
import { useMyContext } from "./MyContext";
import { nodeData } from "./../../data/nodeData";

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const {
    numInputs,
    numOutputs,
    description,
    setDescription,
    setNumInputs,
    setNumOutputs,
    setNodes,
  } = useMyContext();

  const addNode = () => {
   
    addNodeToEditor({
      input: numInputs,
      output: numOutputs,
      onClose,
      setNodes,
      description,
    });
    form.resetFields();
    setDescription("");
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
        width={"100%"}
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
        <Form form={form} onFinish={addNode} layout="vertical" style={{ marginBottom: "20px" }}>
          <Form.Item
            name="inputNum"
            label="Number of Inputs"
            rules={[{ required: false,type:'number', message:"Invalid value", pattern: /^[0-9]*$/}]}
          >
            <InputNumber
              style={{ width: "100%" }}
              defaultValue={0}
              placeholder="Number of inputs"
              value={numInputs}
              // @ts-ignore
              onChange={(val) => setNumInputs(val)}
            />
          </Form.Item>

          <Form.Item
            name="outputNum"
            label="Number of Outputs"
            rules={[{ required: false,type:"number", message: "Invalid value", pattern: /^[0-9]*$/}]}
          >
            <InputNumber
              style={{ width: "100%" }}
              defaultValue={0}
              placeholder="Number of outputs"
              value={numOutputs}
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
                  onChange={(val) => setDescription(val?.target?.value)}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            htmlType="submit"
            type="primary"
            block
            icon={<SubnodeOutlined />}
          >
            Submit
          </Button>
        </Form>
        {nodeData?.map((node, ind) => {
          return (
            <Card
              size="small"
              title={"Add Node " + (ind + 1)}
              onClick={() => {
                addNodeToEditor({ onClose, setNodes, ...node });
              }}
              style={{
                marginBottom: "20px",
                borderWidth: "2px",
                cursor: "pointer",
              }}
            >
              <p>Inputs: {node?.input || 0}</p>
              <p>Outputs: {node?.output || 0}</p>
              <p>Description: {node?.description || ""}</p>
            </Card>
          );
        })}
      </Drawer>
    </div>
  );
};

export default SideBar;
