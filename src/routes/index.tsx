import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { LearningHub } from '../pages/LearningHub/LearningHub';
import { AboutUsPage } from '../pages/AboutUsPage/AboutUsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'learning-hub',
        element: <LearningHub />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
      // {
      //   path: 'chat',
      //   element: <ChatPage />,
      // },
      // {
      //   path: 'profile',
      //   element: <ProfilePage />,
      // },
      // {
      //   path: 'signup',
      //   element: <SignUpPage />,
      // },
      // {
      //   path: 'login',
      //   element: <LoginPage />,
      // },
      // Thêm các route khác tại đây
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};