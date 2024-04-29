import { createBrowserRouter } from 'react-router-dom'
import { GamePage, MainPage, ProfilePage } from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfilePage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
])
