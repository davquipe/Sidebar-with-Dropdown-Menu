import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icons: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icons: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports 1',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icons: <FaIcons.FaCartPlus />
  },
  {
    title: 'Messages',
    path: '/messages',
    icons: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Messages 1',
        path: '/messages/messages1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Messages 2',
        path: '/messages/messages2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Messages 3',
        path: '/messages/messages3',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icons: <IoIcons.IoMdHelpCircle />
  }
]