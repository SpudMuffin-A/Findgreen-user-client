import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Logout = lazy(() => import('../pages/Logout'))
const Profile = lazy(() => import('../pages/Profile'))
const Users = lazy(() => import('../pages/Users'))
//const Billing = lazy(() => import('../pages/Billing'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'))
const Blank = lazy(() => import('../pages/Blank'))
const ChargingStation = lazy(() => import('../pages/ChargingStation'))
const AddStation = lazy(() => import('../pages/AddStation'))
const Reports = lazy(() => import('../pages/Reports'))
const User = lazy(() => import('../pages/User'))
const AddUser = lazy(() => import('../pages/AddUser'))
const Role = lazy(() => import('../pages/Role'))
const Addrole = lazy(() => import('../pages/AddRole'))
const Notification = lazy(() => import('../pages/Notification'))
const AddNotification = lazy(() => import('../pages/AddNotification'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/user-management',
    component: User,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/chargingStation',
    component: ChargingStation,
  },
  {
    path: '/addStation',
    component: AddStation,
  },
  {
    path: '/addUser',
    component: AddUser,
  },
  {
    path: '/notification',
    component: Notification,
  },  
  {
    path: '/addNotification',
    component: AddNotification,
  },
  {
    path: '/role-management',
    component: Role,
  },
  {
    path: '/addRole',
    component: Addrole,
  },
 /* {
    path: '/billing',
    component: Billing,
  },*/
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/reports', // the url
    component: Reports, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
