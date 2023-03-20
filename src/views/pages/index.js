import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
/** importing our pages */
import Blogs from './blogs';
import Login from '../components/LoginForm/LoginForm';
import NotFound from './NotFound';
import DetailBlog from './detail';
// import UpdateBlog from './updateBlog';
import CreateBlog from '../components/NewPostForm/NewPostForm';
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
          <Route path='/blog/:id' element={<DetailBlog />} />

          <Route path='/createBlog' element={<CreateBlog />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
