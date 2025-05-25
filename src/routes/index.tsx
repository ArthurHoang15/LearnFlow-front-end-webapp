import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage/HomePage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { LearningHub } from '../pages/LearningHub/LearningHub';
import { UserProfilePage } from '../pages/UserProfilePage/UserProfilePage';
import { AboutUsPage } from '../pages/AboutUsPage/AboutUsPage';
import { MistakeTrackerPage } from '../pages/MistakeTrackerPage';

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
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
      // {
      //   path: 'chat',
      //   element: <ChatPage />,
      // },
      {
        path: 'profile',
        element: <UserProfilePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'learning-hub/mistake-tracker',
        element: <MistakeTrackerPage />,
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};