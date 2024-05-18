import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getListData } from 'src/handler/apiHandler'
import { getListUsers } from 'src/services'

const columns = [
  {
    title: 'Họ',
    dataIndex: 'firstName',
  },
  {
    title: 'Tên',
    dataIndex: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    render: (email) => email && <Link to={`mailto:${email}`}></Link>,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phoneNumber',
    render: (phone) => phone && <Link to={`tel:${phone}`}></Link>,
  },
  {
    title: 'Bộ phận',
    dataIndex: 'department',
    render: (value) => value.name,
  },
  {
    title: 'Chức vụ',
    dataIndex: 'position',
    render: (value) => value.name,
  },
  {
    title: 'Avt',
    dataIndex: 'avatar',
    render: (value) => <Avatar src={value} icon={<UserOutlined />} />,
  },
  {
    title: 'Lương',
    dataIndex: 'salary',
    render: (value) => value.money,
  },
  {
    title: 'Thưởng',
    dataIndex: 'bonus',
    render: (value) => value.money,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const List = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListData(dispatch, getListUsers)
      setData(res.data)
    }

    fetchData()
  }, [dispatch])

  return (
    <>
      <div className="btn-store">
        <Link to="/user/store">
          <Button type="primary">Thêm</Button>
        </Link>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
