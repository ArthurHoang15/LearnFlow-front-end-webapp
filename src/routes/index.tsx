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
import Vocab from '../pages/Vocab/Vocab';
import FlashCardPage from '../pages/FlashCardPage/FlashCardPage';
import  ChatPage  from '../pages/ChatPage/ChatPage';
import Users from '../pages/Users/Users';
import AdminLearningHub  from '../pages/AdminLearningHub/AdminLearningHub';
import Feedback from '../pages/Feedback/Feedback';
import AdminStories from '../pages/AdminStories/AdminStories';
import AdminVocab from '../pages/AdminVocab/AdminVocab';

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
      {
        path: 'chat',
        element: <ChatPage />,
      },
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
        path: 'learning-hub/vocabulary-boost',
        element: <Vocab />,
      },

      {
        path: 'flashcard/:topic',
        element: <FlashCardPage />,
      },
      
      {
        path:'admin/users',
        element: <Users />,
      },

      {
        path: 'admin/learning-hub',
        element: <AdminLearningHub />,
      },

      {
        path: 'admin/feedback',
        element: <Feedback />,
      },

      {
        path: 'admin/stories',
        element: <AdminStories />,
      },

      {
        path: 'admin/adminvocab',
        element: <AdminVocab />,
      }
      // Thêm các route khác tại đây
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};