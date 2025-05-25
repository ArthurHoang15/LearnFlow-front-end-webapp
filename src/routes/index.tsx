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
import { MistakeTrackerPage } from '../pages/MistakeTrackerPage';
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
        index: true,
        path: 'learning-hub',
        element: <LearningHub />
      },
      {
        index: true,
        path: 'learning-hub/smart-learning',
        element: <SmartLearningPage />, 
      },
      {
        index: true,
        path: 'about-us',
        element: <AboutUsPage />,
      },
      {
        index: true,
        path: 'chat',
        element: <ChatPage />,
      },
      {
        index: true,
        path: 'profile',
        element: <UserProfilePage />,
      },
      {
        index: true,
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        index: true,
        path: 'learning-hub/mistake-tracker',
        element: <MistakeTrackerPage />,
      },
      {
        index: true,
        path: 'login',
        element: <LoginPage />,
      },   

      {
        index: true,
        path: 'learning-hub/vocabulary-boost',
        element: <Vocab />,
      },

      {
        index: true,
        path: 'flashcard/:topic',
        element: <FlashCardPage />,
      },
      
      {
        index: true,
        path:'admin/users',
        element: <Users />,
      },

      {
        index: true,
        path: 'admin/learning-hub',
        element: <AdminLearningHub />,
      },

      {
        index: true,
        path: 'admin/feedback',
        element: <Feedback />,
      },

      {
        index: true,
        path: 'admin/stories',
        element: <AdminStories />,
      },

      {
        index: true,
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