import {
  Dashboard,
  EditBonus,
  EditDepartment,
  EditPosition,
  EditSalary,
  EditUser,
  ListBonus,
  ListDepartment,
  ListPosition,
  ListSalary,
  ListUsers,
  StoreBonus,
  StoreDepartment,
  StorePosition,
  StoreSalary,
  StoreUser,
} from './pages'

const routes = [
  { path: '/', element: Dashboard },

  { path: '/user', element: ListUsers, name: 'Danh sách nhân viên' },
  { path: '/user/store', element: StoreUser, name: 'Thêm nhân viên' },
  { path: '/user/edit/:id', element: EditUser, name: 'Chỉnh sửa nhân viên' },

  { path: '/position', element: ListPosition, name: 'Danh sách chức vụ' },
  { path: '/position/store', element: StorePosition, name: 'Thêm chức vụ' },
  { path: '/position/edit/:id', element: EditPosition, name: 'Chỉnh sửa chức vụ' },

  { path: '/department', element: ListDepartment, name: 'Danh sách bộ phận' },
  { path: '/department/store', element: StoreDepartment, name: 'Thêm bộ phận' },
  { path: '/department/edit/:id', element: EditDepartment, name: 'Chỉnh sửa bộ phận' },

  { path: '/salary', element: ListSalary, name: 'Danh sách bản lương' },
  { path: '/salary/store', element: StoreSalary, name: 'Thêm bản lương' },
  { path: '/salary/edit/:id', element: EditSalary, name: 'Chỉnh sửa bản lương' },

  { path: '/bonus', element: ListBonus, name: 'Danh sách bản thưởng' },
  { path: '/bonus/store', element: StoreBonus, name: 'Thêm bản thưởng' },
  { path: '/bonus/edit/:id', element: EditBonus, name: 'Chỉnh sửa bản thưởng' },
]

export default routes
