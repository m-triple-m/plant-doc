import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/main/Home';
import Login from './components/main/Login';
import AboutUs from './components/main/AboutUs';
import User from './components/user';
import PredictPlantDisease from './components/user/PredictPlantDisease';
import Signup from './components/main/Signup';
import UserProvider from './context/UserProvider';
import AdminProvider from './context/AdminProvider';
import Prediction from './components/user/Prediction';
import CurePage from './components/user/CurePage';
import Forgetpassword from './components/main/Forgetpassword';
import UserProfile from './components/user/UserProfile';

import TermsCondition from './components/main/Termscondition.js';
import Contact from './components/main/Contact';

import { Toaster } from 'react-hot-toast';
import Admin from './components/main';
import Managecure from './components/admin/Managecure';
import AdminAuth from './auth/AdminAuth';
import OrderProduct from './components/user/OrderProduct';
import PredictionHistory from './components/user/PredictionHistory';
import UserAuth from './auth/UserAuth';
import LoginAuth from './auth/LoginAuth';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AdminProvider>
          <Toaster position="top-right" />

          <Routes>
            <Route path="/" element={<Navigate to="/main/home" />} />
            <Route path="main" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route
                path="login"
                element={
                  <LoginAuth>
                    <Login />
                  </LoginAuth>
                }
              />
              <Route
                path="signup"
                element={
                  <LoginAuth>
                    <Signup />
                  </LoginAuth>
                }
              />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<Contact />} />
              <Route path="forgetpassword" element={<Forgetpassword />} />
              <Route path="termscondition" element={<TermsCondition />} />
            </Route>
            <Route
              path="user"
              element={
                <UserAuth>
                  {' '}
                  <User />{' '}
                </UserAuth>
              }
            >
              {/* <Route path="predict1" element={<PredictPlantDisease />} /> */}
              <Route path="predict" element={<Prediction />} />
              <Route path="cure" element={<CurePage />} />
              <Route path="order" element={<OrderProduct />} />
              <Route path="history" element={<PredictionHistory />} />
              <Route path="userprofile" element={<UserProfile />} />
            </Route>
            <Route
              path="admin"
              element={
                <AdminAuth>
                  <Admin />
                </AdminAuth>
              }
            >
              <Route path="managecure" element={<Managecure />} />
            </Route>
          </Routes>
        </AdminProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
