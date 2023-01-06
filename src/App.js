import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import UserInfo from './Components/UserInfo';
import Register from './Components/Register';
import Login from './Components/Login';
import PageNotFound from './Components/PageNotFound';
import axios from "axios";
import { DarkModeContext } from './context/DarkModeContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';




const DEFAULT_API = 'https://api.github.com/users/ahmadfrazz';

function App() {
const darkMode = useSelector((state) => state.themeToggle );


  // const {darkMode} = useContext(DarkModeContext);

  
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState();

  const def_api_func = () => {
    axios.get(DEFAULT_API).then(res => {
      setUserData(res?.data);
      setLoader(false);
    });
  }

  useEffect(() => {
    def_api_func();
  }, [])
  const searchHandler = (Sdata) => {
    if(Sdata){
      const Search_User_API = `https://api.github.com/users/${Sdata}`;

      axios.get(Search_User_API).then(res =>
        {
          setUserData(res?.data);
          setLoader(false);
          setError('');
        }).catch((err)=> {
          console.log("Catch Hit, None Existing User====>", err);
          def_api_func(); 
          setError('No Result Found')
        } )
    }
    if(Sdata === ''){
      def_api_func(); 
      setError('No Result Found');
    }
  }
  
  return (
      

      <div className="App" id={darkMode === 'DARK' ? 'D_app' : 'L_app'}>
        <div className="container" id={darkMode === 'DARK' ? 'D_container' : 'L_container'}>
          {/* <Header />
          <div className="bodyStyle" id={darkMode === 'DARK' ? 'D_bodyStyle' : 'L_bodyStyle'} >
            <SearchBar searchT={searchHandler} error={error} />
            <UserInfo data={userData} loader={loader} />
          </div> */}

          <Header />
          <Router>
            <Routes>
              <Route exact path='/user/register' element={<Register />} />
              <Route exact path='/user/login' element={<Login />} />
              <Route exact path='/user/:id' element={
                                                  <div className="bodyStyle" id={darkMode === 'DARK' ? 'D_bodyStyle' : 'L_bodyStyle'} >
                                                    <SearchBar searchT={searchHandler} error={error} />
                                                    <UserInfo data={userData} loader={loader} />
                                                  </div>
                                                } 
              />
              <Route path='*' element={<PageNotFound />} />

            </Routes>
          </Router>


        </div>
      </div>
  );
}



// const bodyStyle = {
//   marginTop: '40px'
// }
// const containerStyle = {
//   margin: 'auto',
//   maxWidth: '750px',
//   paddingLeft: '30px',
//   paddingRight: '30px'
// }

export default App;
