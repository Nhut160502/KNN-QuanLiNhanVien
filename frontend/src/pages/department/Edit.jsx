import { Button, Form, Input, Radio } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getData, updateData } from 'src/handler/apiHandler'
import { showDepartment, updateDepartment } from 'src/services'

const Edit = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form] = useForm()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getData(dispatch, showDepartment, id)
      form.setFieldsValue({
        name: data?.name,
        isActive: data?.isActive,
      })
    }
    fetchData()
  }, [id, dispatch, form])

  const handleSubmit = async (values) => {
    const formData = new FormData()

    formData.append('name', values.name)
    formData.append('isActive', values.isActive)

    updateData(dispatch, updateDepartment, formData, navigate, '/department')
  }

  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <Form.Item label="Tên" name="name" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Trạng thái" name="isActive" rules={[{ required: true, message: '' }]}>
        <Radio.Group>
          <Radio value={true}>Hiển thị</Radio>
          <Radio value={false}>Ẩn</Radio>
        </Radio.Group>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Cập nhật
      </Button>
    </Form>
  )
}

export default Edit
