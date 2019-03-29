export const adminMenu = [
  {
    name: 'Dashboard',
    path: '',
    order: 0,
    position: 'top',
    icon: 'dashboard'
  },
  {
    name: 'Manage',
    path: null,
    order: 1,
    icon: 'settings',
    position: 'top',
    submenu: [
      {
        name: 'User',
        path: 'user',
        order: 0,
        icon: 'chevron_right'
      },
      {
        name: 'Users',
        path: 'users',
        order: 1,
        icon: 'chevron_right'
      }
    ]
  },
  {
    name: 'Logout',
    path: 'logout',
    order: 3,
    position: 'bottom',
    icon: 'power_settings_new'
  }
];

export const userMenu = [
  {
    name: 'Dashboard',
    path: '',
    order: 0,
    position: 'top'
  },
  {
    name: 'Logout',
    path: null,
    order: 1,
    position: 'bottom'
  }
];

