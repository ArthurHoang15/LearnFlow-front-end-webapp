import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage/HomePage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { LearningHub } from '../pages/LearningHub/LearningHub';
import { SmartLearningPage } from '../pages/SmartLearningPage';
import { UserProfilePage } from '../pages/UserProfilePage/UserProfilePage';
import { AboutUsPage } from '../pages/AboutUsPage/AboutUsPage';
import { StoriesFlowPage } from '../pages/StoriesFlowPage';

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
        path: 'learning-hub/smart-learning',
        element: <SmartLearningPage />, 
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
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },  
      {
        path: 'learning-hub/stories-flow',
        element: <StoriesFlowPage />,
      },  
      // Thêm các route khác tại đây
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};