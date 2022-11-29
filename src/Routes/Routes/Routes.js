import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import DashboardLayout from '../../Pages/Dashboard/Dashboard/DashboardLayout';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Phones from '../../Pages/Phones/Phones';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import AdminRoute from '../AdminRoute/AdminRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/brands/:brand',
        element: (
          <PrivateRoute>
            <Phones></Phones>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.brand}`),
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
