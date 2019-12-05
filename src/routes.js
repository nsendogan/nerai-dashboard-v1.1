/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard.jsx';
import TableList from 'views/Tables.jsx';
import Maps from 'views/Map.jsx';
import UserPage from 'views/User.jsx';

var routes = [
  {
    path: '/dashboard',
    name: 'MAIN MENU',
    icon: 'nc-icon nc-bank',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: 'PREDICTIONS',
    icon: 'nc-icon nc-tile-56',
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'DATASETS',
    icon: 'nc-icon nc-pin-3',
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/user-page',
    name: 'REALTIME INFO',
    icon: 'nc-icon nc-single-02',
    component: UserPage,
    layout: '/admin',
  },
  
];
export default routes;
