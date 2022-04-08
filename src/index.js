import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';
import Questions from './Questions/Questions';
import YourAnswer from './YourAnswer/YourAnswer';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import ForgotPassword from './Auth/ForgotPassword';

const root = createRoot(document.getElementById('root'));

const isSignIn = true;

root.render(
  <BrowserRouter>
    <Routes>
      {isSignIn ? (
        <Route path='/' element={<App />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/your-answers' element={<YourAnswer />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      ) : (
        <>
          <Route path='/' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/sign-in' element={<SignIn />} />
        </>
      )}
    </Routes>
  </BrowserRouter>
);
