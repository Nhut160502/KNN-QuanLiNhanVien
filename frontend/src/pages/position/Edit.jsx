import { Button, Form, Input } from 'antd'
import React from 'react'

const Edit = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Tên" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Thêm
      </Button>
    </Form>
  )
}

export default Edit
