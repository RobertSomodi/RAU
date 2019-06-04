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
    name: 'Reports',
    path: 'reports',
    order: 3,
    position: 'top',
    icon: 'assignment',
    id: 3,
    submenu: [
      {
        name: 'Shift frequency',
        path: 'shift-frequency',
        order: 1,
        icon: 'chevron_right',
        id: 31
      },
      {
        name: 'Clocking',
        path: 'clocking',
        order: 2,
        icon: 'chevron_right',
        id: 32
      },
      // {
      //   name: 'Hours worked',
      //   path: 'hours-worked',
      //   order: 3,
      //   icon: 'chevron_right',
      //   id: 33
      // },
      // {
      //   name: 'Average clocking',
      //   path: 'average-clocking',
      //   order: 4,
      //   icon: 'chevron_right',
      //   id: 34
      // }
    ]
  },
  {
    name: 'Schedule',
    path: 'schedule',
    order: 3,
    position: 'top',
    icon: 'event',
    id: 3
  },
  {
    name: 'Logout',
    path: 'logout',
    order: 4,
    position: 'bottom',
    icon: 'power_settings_new',
    id: 4
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

