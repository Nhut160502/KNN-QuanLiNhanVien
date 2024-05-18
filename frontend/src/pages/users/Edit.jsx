import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import Uploads from 'src/components/Uploads'

const Edit = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Họ" name="firstName" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Tên" name="lastName" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: '' }]}>
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="phoneNumber" rules={[{ required: true, message: '' }]}>
        <Input type="tel" />
      </Form.Item>
      <Form.Item label="Ảnh đại diện">
        <Uploads />
      </Form.Item>
      <Form.Item label="Bộ phận" name="department" rules={[{ required: true, message: '' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Chức vụ" name="position" rules={[{ required: true, message: '' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Tỉnh/Thành phố" name="province" rules={[{ required: true, message: '' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Quận/Huyện" name="district" rules={[{ required: true, message: '' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Phường/Xã" name="wards" rules={[{ required: true, message: '' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message: '' }]}>
        <Input.TextArea rows={5} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Thêm
      </Button>
    </Form>
  )
}

export default Edit
