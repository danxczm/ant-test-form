'use client';

import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [form] = Form.useForm();

	const onFinish = (values: any) => {
	  setUserData(values)
		form.resetFields();
	};

	console.log(`userData: `,userData)
	
  return (
    <div className="mx-auto max-w-[400px]">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password autoComplete="false" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
