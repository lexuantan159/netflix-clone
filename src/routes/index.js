import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Account from "../pages/Account";

const publicRoutes =  [
    { path: '/', component:Home },
    { path: '/signup', component: Signup},
    { path: '/account', component: Account}, 
    { path: '/login', component: Login },
]

const privateRoutes =  [

]

export { publicRoutes , privateRoutes }