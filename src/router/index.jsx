import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/organisms/Layout';

// Lazy load all page components
const Dashboard = lazy(() => import('@/components/pages/Dashboard'));
const Students = lazy(() => import('@/components/pages/Students'));
const StudentProfile = lazy(() => import('@/components/pages/StudentProfile'));
const Classes = lazy(() => import('@/components/pages/Classes'));
const Grades = lazy(() => import('@/components/pages/Grades'));
const Attendance = lazy(() => import('@/components/pages/Attendance'));
const Reports = lazy(() => import('@/components/pages/Reports'));
const NotFound = lazy(() => import('@/components/pages/NotFound'));

// Suspense wrapper component
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading.....</div>}>
    {children}
  </Suspense>
);

// Main routes configuration
const mainRoutes = [
  {
    path: '',
    index: true,
    element: <SuspenseWrapper><Dashboard /></SuspenseWrapper>
  },
  {
    path: 'students',
    element: <SuspenseWrapper><Students /></SuspenseWrapper>
  },
  {
    path: 'students/:id',
    element: <SuspenseWrapper><StudentProfile /></SuspenseWrapper>
  },
  {
    path: 'classes',
    element: <SuspenseWrapper><Classes /></SuspenseWrapper>
  },
  {
    path: 'grades',
    element: <SuspenseWrapper><Grades /></SuspenseWrapper>
  },
  {
    path: 'attendance',
    element: <SuspenseWrapper><Attendance /></SuspenseWrapper>
  },
  {
    path: 'reports',
    element: <SuspenseWrapper><Reports /></SuspenseWrapper>
  },
  {
    path: '*',
    element: <SuspenseWrapper><NotFound /></SuspenseWrapper>
  }
];

// Router configuration with Layout wrapper
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: mainRoutes
  }
];

export const router = createBrowserRouter(routes);