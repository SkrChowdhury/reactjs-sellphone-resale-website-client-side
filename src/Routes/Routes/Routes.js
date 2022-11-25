import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import SignIn from '../../Pages/SignIn/SignIn';

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
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
