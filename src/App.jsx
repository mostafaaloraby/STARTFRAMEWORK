import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFoundPage from './components/Page404/NotFoundPage';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
const Router = createHashRouter(
  [
    {path: '/' , element: <Layout/>, children:
    [
      {path: '/' , element: <Home/>},
      {path: '/ABOUT' , element: <About/>},
      {path: '/PORTFOLIO' , element: <Portfolio/>},
      {path: '/CONTACT' , element: <Contact/>},
      {path: '*' , element: <NotFoundPage/>},

    ]
  }
  ]

)
class App extends Component {
  render() {
    return <>
    <RouterProvider router={Router}/>
    </>
  }
}

export default App;