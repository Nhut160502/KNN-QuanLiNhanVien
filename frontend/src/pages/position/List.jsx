import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getData } from 'src/handler/apiHandler'
import { getListPosition } from 'src/services'

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
  },
]

const List = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(dispatch, getListPosition)
      setData(res?.data)
    }

    fetchData()
  }, [dispatch])

  return (
    <>
      <div className="btn-store">
        <Link to="/position/store">
          <Button type="primary">Thêm</Button>
        </Link>
      </div>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </>
  )
}

export default List
