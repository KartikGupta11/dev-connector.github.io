import { Fragment, useEffect } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layouts/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post'
import { LOGOUT } from './actions/types';






function App() {
  useEffect(()=>{
    if(localStorage.token){
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser())
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });

  },[])
  return (
    <Provider store={store}>
    <BrowserRouter>
   {/* <Fragment> */}
<Navbar/>
{/* <Alert/> */}

<Routes>
<Route path='/' element={<Landing/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/profiles' element={<Profiles/>}/>
<Route path='/profile/:id' element={<Profile/>}/>


{/* <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          /> */}
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/create-profile' element={<CreateProfile/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/add-experience' element={<AddExperience/>}/>
          <Route path='/add-education' element={<AddEducation/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/posts/:id' element={<Post/>}/>







</Routes>

   {/* </Fragment> */}
   </BrowserRouter>
   </Provider>
  );
}

export default App;
