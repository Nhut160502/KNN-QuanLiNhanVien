import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilBarChart,
  cilBook,
  cilSpeedometer,
  cibCodesandbox,
  cilResizeWidth,
  cilListRich,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  // Users
  {
    component: CNavItem,
    name: 'Nhân viên',
    to: '/user',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },

  // Postion
  {
    component: CNavItem,
    name: 'Chức vụ',
    to: '/position',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },

  // Department
  {
    component: CNavItem,
    name: 'Bộ phận',
    to: '/department',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Salary',
  },
  {
    component: CNavItem,
    name: 'Bản lương',
    to: '/salary',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bản thưởng',
    to: '/bonus',
    icon: <CIcon icon={cilResizeWidth} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Shipping',
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/order',
    icon: <CIcon icon={cibCodesandbox} customClassName="nav-icon" />,
  },
]

export default _nav
