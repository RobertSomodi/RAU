export const adminMenu = [
  {
    name: 'Dashboard',
    path: '',
    order: 0,
    position: 'top',
    icon: 'dashboard',
    id: 0
  },
  {
    name: 'Manage',
    path: null,
    order: 1,
    icon: 'settings',
    position: 'top',
    id: 1,
    submenu: [
      {
        name: 'Users',
        path: 'users',
        order: 1,
        icon: 'chevron_right',
        id: 11
      },
      {
        name: 'Stores',
        path: 'stores',
        order: 2,
        icon: 'chevron_right',
        id: 12
      },
      {
        name: 'Departments',
        path: 'departments',
        order: 3,
        icon: 'chevron_right',
        id: 13
      },
      {
        name: 'Teams',
        path: 'teams',
        order: 4,
        icon: 'chevron_right',
        id: 14
      },
      {
        name: 'Shifts',
        path: 'shifts',
        order: 5,
        icon: 'chevron_right',
        id: 15
      },
      {
        name: 'Positions',
        path: 'positions',
        order: 6,
        icon: 'chevron_right',
        id: 16
      },
    ]
  },
  {
    name: 'Schedule',
    path: 'schedule',
    order: 2,
    position: 'top',
    icon: 'event',
    id: 2
  },
  {
    name: 'Logout',
    path: 'logout',
    order: 3,
    position: 'bottom',
    icon: 'power_settings_new',
    id: 3
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
