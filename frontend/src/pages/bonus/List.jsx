import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getData } from 'src/handler/apiHandler'
import { getListBonus } from 'src/services'

const columns = [
  {
    title: 'Bộ phận',
    dataIndex: 'department',
    render: (value) => value?.name,
  },
  {
    title: 'Chức vụ',
    dataIndex: 'position',
    render: (value) => value?.name,
  },
  {
    title: 'Tiền',
    dataIndex: 'money',
  },
]

const List = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(dispatch, getListBonus)
      setData(res.data)
    }

    fetchData()
  }, [dispatch])

  return (
    <>
      <div className="btn-store">
        <Link to="/bonus/store">
          <Button type="primary">Thêm</Button>
        </Link>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
