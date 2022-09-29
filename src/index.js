import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Main, { FirstSection, LastSection, SecondSection } from './Main';

const routes = createBrowserRouter([
  {
    path: '/', // <-- matching url
    element: <Main />, // <-- matching parent component
    children: [
      {
        path: 'first',
        element: <FirstSection />
      },
      {
        path: 'second',
        element: <SecondSection />
      },
      {
        path: 'fourth', // <-- matching url
        element: <LastSection /> // <-- matching component
      }
    ]
  },
  {
    path: '/old',
    element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
