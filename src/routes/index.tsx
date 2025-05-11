import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { LearningHub } from '../pages/LearningHub/LearningHub';
import Vocab from '../pages/Vocab/Vocab';
import FlashCardPage from '../pages/FlashCardPage/FlashCardPage';
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
      {
        path: '/learning-hub/vocabulary-boost',
        element: <Vocab />,
      },

      {
        path: '/flashcard/:topic',
        element: <FlashCardPage />,
      }
      // Thêm các route khác tại đây
      
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};