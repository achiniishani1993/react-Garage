import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Contact from './Pages/Contact.tsx';
import NotFound from './Pages/NotFound.tsx';


const router= createBrowserRouter([
{
  path: '/', 
  element: <Home/>,
  errorElement: <NotFound/>,
},
{
  path: '/about',
  element: <About/>
},
{
 path: '/contact',
 element: <Contact/>
},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router= {router}/>
  </StrictMode>,
)
