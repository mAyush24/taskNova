import React from 'react';
import './App.css';
import MainLayout from './CommonComponent/MainLayout';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./Components/LandingPage'));
const ContactUsPage = React.lazy(() => import('./Components/ContactUsPage'));
const Career = React.lazy(() => import('./Components/Career'));
const PhotoGallery = React.lazy(() => import('./Components/PhotoGallery'));
const RoleDescription = React.lazy(() => import('./Components/RoleDescription'));
const AboutUs = React.lazy(() => import('./Components/AboutUsPage'));

const Error = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-brand-primary mb-4">500</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">Oops, something went wrong!</h2>
      <p className="text-muted-foreground mb-8">We're working to fix this issue. Please try again later.</p>
      <Link to="/" className="inline-flex items-center px-6 py-3 bg-brand-primary text-background rounded-md hover:bg-brand-secondary transition-colors">
        Go Home
      </Link>
    </div>
  </div>
);

const NotFound = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-brand-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">Page not found!</h2>
      <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center px-6 py-3 bg-brand-primary text-background rounded-md hover:bg-brand-secondary transition-colors">
        Back to Home
      </Link>
    </div>
  </div>
);

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
