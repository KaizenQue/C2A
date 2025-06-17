// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to React</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App; 


/* eslint-disable no-undef */
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import React from "react";
import Footer from './Components/Footer/Footer.jsx';
import FloatingActionButton from './Components/FloatingButton/FloatingActionButton.jsx';
import HomeMain from './Components/LandingPage/HomeMain.jsx';
import MassTortMain from './Components/MassTort/MassTortMain.jsx';
import ContactUsMain from './Components/ContactUs/ContactUsMain.jsx';
import AboutUsMain from './Components/AboutUs/AboutUsMain.jsx';
import BlogPage from './Components/BlogPage/BlogPage.jsx';
import ClassActionMain from './Components/ClassAction/ClassActionMain.jsx';
import NewUpdateNew from './Components/NewsUpdate/NewsUpdateNew.jsx';
import DetailPageMain from './Components/DetailPage/DetailPage';

function App() {
  // Custom buttons for the floating action button
  const customButtons = [
    { 
      icon: 'phone', 
      label: 'Call Us', 
      action: () => window.location.href = 'tel:+1800JUSTICE'
    },
    { 
      icon: 'edit_note', 
      label: 'Note', 
      action: () => window.location.href = '/note'
    },
    { 
      icon: 'chat', 
      label: 'Message', 
      action: () => window.location.href = '/message'
    }
  ];

  // Define router with all routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          {/* <HomeMain /> */}
          <HomeMain />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <AboutUsMain />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    },
    {
      path: "/mass-tort",
      element: (
        <div>
          <Navbar />
          <MassTortMain />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    },
    {
      path: "/class-action",
      element: (
        <div>
          <Navbar />
          <ClassActionMain />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    },
    {
      path: "/blog",
      element: (
        <div>
          <Navbar />
          <BlogPage />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    },
    {
      path: "/contact",
      element: (
        <div>
          <Navbar />
          <ContactUsMain />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    },
    {
      path: "/news",
      element: (
        <div>
          <Navbar />
          <NewUpdateNew />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    },
    {
      path: "/detail/:id",
      element: (
        <div>
          <Navbar />
          <DetailPageMain />
          <Footer />
          <FloatingActionButton 
            buttons={customButtons}
            mainColor="#f2c438"
            secondaryColor="#162766"
          />
        </div>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
