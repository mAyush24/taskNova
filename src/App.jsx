import React from 'react';
import './App.css';
import MainLayout from './CommonComponent/MainLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./Components/LandingPage'));
const ContactUsPage = React.lazy(() => import('./Components/ContactUsPage'));
const Career = React.lazy(() => import('./Components/Career'));
const PhotoGallery = React.lazy(() => import('./Components/PhotoGallery'));
const RoleDescription = React.lazy(() => import('./Components/RoleDescription'));
const AboutUs = React.lazy(() => import('./Components/AboutUsPage'));

const Error = () => <div>Oops, something went wrong!</div>;
const NotFound = () => <div>Page not found!</div>;

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/contact', element: <ContactUsPage /> },
        { path: '/career', element: <Career /> },
        { path: '/about', element: <AboutUs /> },
        { path: '/gallery', element: <PhotoGallery /> },
        { path: '/role/:id', element: <RoleDescription /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
