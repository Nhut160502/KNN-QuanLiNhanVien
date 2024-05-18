import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { storeData } from 'src/handler/apiHandler'
import { storePosition } from 'src/services'

const Store = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    const formData = new FormData()

    formData.append('name', values.name)

    storeData(dispatch, storePosition, formData, navigate, '/position')
  }
  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Tên" name="name" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Thêm
      </Button>
    </Form>
  )
}

export default Store
