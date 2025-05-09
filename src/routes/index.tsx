import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { LearningHub } from '../pages/LearningHub/LearningHub';
import { UserProfilePage } from '../pages/UserProfilePage/UserProfilePage';

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
        element: <LearningHub />
      },
      // {
      //   path: 'chat',
      //   element: <ChatPage />,
      // },
      {
        path: 'profile',
        element: <UserProfilePage />,
      },
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