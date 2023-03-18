import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
/** importing our pages */
import Blogs from './blogs';
import Login from './login';
import NotFound from './NotFound';
import Spinner from 'react-bootstrap/Spinner';
export default function Pages() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
