import { Button, Form, Input, Select } from 'antd'
import React from 'react'

const Edit = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Bộ phận" name="department" rules={[{ required: true, message: '' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Chức vụ" name="position" rules={[{ required: true, message: '' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Tiền" name="money" rules={[{ required: true, message: '' }]}>
        <Input type="number" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Thêm
      </Button>
    </Form>
  )
}

export default Edit
