import Login from '../page/login.js';
import Nav from '../page/nav.js'
import Home from '../page/home.js';
import UserList from '../page/user/userlist.js';
import BlackName from '../page/user/blackname.js';
import UserExport from '../page/user/userexport.js';


const router = [
    {
        path: '/',
        exact: true,
        component: Login
    },
    {
        path: '/nav',
        component: Nav,
        exact: false,
        routers: [
            {
                path: '/nav/home',
                exact: true,
                component: Home
            },
            {
                path: '/nav/userlist',
                exact: false,
                component: UserList
            },{
                path: '/nav/blackname',
                exact: false,
                component: BlackName
            },{
                path: '/nav/userexport',
                exact: false,
                component: UserExport
            }
        ]
    }
]

export default router 