import { ROUTES } from "@/utils/constants";

import { lazy } from "react";

const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/features/auth/pages/RegisterPage'))
const HomePage = lazy(() => import('@/features/home/pages/HomePage'))
const ProfilePage = lazy(() => import('@/features/profile/pages/ProfilePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const EmbedPostPage = lazy(() => import('@/pages/EmbedPostPage'))


export const routesConfig = [
    // Auth routes - Public
    {
      path: ROUTES.LOGIN,
      element: LoginPage,
      layout: 'auth',
      isPublic: true,
    },
    {
      path: ROUTES.REGISTER,
      element: RegisterPage,
      layout: 'auth',
      isPublic: true,
    },
    
    // Main routes - Private (require login)
    {
      path: ROUTES.HOME,
      element: HomePage,
      layout: 'default',
      isPrivate: true,
    },
    {
      path: ROUTES.PROFILE,
      element: ProfilePage,
      layout: 'default',
      isPrivate: true,
    },
    
    // No layout routes
    {
      path: ROUTES.EMBED_POST,
      element: EmbedPostPage,
      layout: 'none',
      isPublic: true,
    },
    {
      path: ROUTES.NOT_FOUND,
      element: NotFoundPage,
      layout: 'none',
      isPublic: true,
    },
  ]