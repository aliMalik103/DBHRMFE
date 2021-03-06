/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilCursor,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Resource Plaining',
    to: '/dashboard',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Client',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Employee',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Teams',
        to: '/dashboard',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'HR',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
     ],
  },
  {
    component: CNavGroup,
    name: 'Accounts',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
    
    ],
  },
  {
    component: CNavItem,
    name: 'Attendence',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Login',
    to: '/login',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  }
  
]

export default _nav
