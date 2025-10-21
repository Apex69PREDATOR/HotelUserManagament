
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import MainDash from './components/Dashboards/MainDash'
import UserManagement from './components/Dashboards/UserManagement'
import Login from './components/Login'
import './App.css'

function App() {

  const route = createBrowserRouter([
    {path : '/',
    element:<Dashboard/>,
    children:[
      {
      path:'/',
      element:<MainDash/>
    },
    {
      path:'/management',
      element:<UserManagement/>
    }
  ]
    },
    {path:'/login',
      element:<Login/>
    }
  ])

  return (
   <RouterProvider router={route}/>
  )
}

export default App
