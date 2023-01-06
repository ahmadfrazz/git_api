import React, { useContext } from 'react';
import '../App.css';
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { DarkModeContext } from '../context/DarkModeContext';
import { GoSignOut } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from "react-router-dom";



const Header = () => {
const dispatch = useDispatch();
const darkMode = useSelector((state) => state.themeToggle );
const user_state = useSelector((state) => state.userRegister );

  
  // const {darkMode, toggleDarkMode} = useContext(DarkModeContext);


  // const modeToggelOLD = () => {
  //   toggleDarkMode();
  // }
  // ------ Redux---------
  const modeToggel = () => {
    dispatch({type: 'MODE_TOGGEL'})
  }

  return (
    <div id={darkMode === 'DARK' ? 'D_headerStyle' : 'L_headerStyle'} >
      <div id={darkMode === 'DARK' ? 'D_logoStyle' : 'L_logoStyle'}>
        devfinder
      </div>
      <div id={darkMode === 'DARK' ? 'D_dLightStyle' : 'L_dLightStyle'} onClick={modeToggel}>
        <span id={darkMode === 'DARK' ? 'D_dLightTextStyle' : 'L_dLightTextStyle'}>
          {darkMode === 'DARK' ? <span>LIGHT</span> : <span style={{color: '#A5A5A5'}}>DARK</span> }
        </span>
        <span style={{transition: 'all .3s ease-in-out'}}>
          { darkMode === 'DARK' ? <BsSunFill size={20} id={darkMode === 'DARK' ? 'D_toggleIcon' : 'L_toggleIcon'} />
          : <BsMoonFill size={18} id={darkMode === 'DARK' ? 'D_toggleIcon' : 'L_toggleIcon'} />
          }
        </span>
      </div>
        <span style={{marginLeft: '15px', marginRight: '10px', color: '#45618F', marginTop: '50px'}}>|</span>
      <div id={darkMode === 'DARK' ? 'D_dLightStyle' : 'L_dLightStyle'}>
        {/* <Link href='/user/login'> */}
          <span id={darkMode === 'DARK' ? 'D_dLightTextStyle' : 'L_dLightTextStyle'}>
            {darkMode === 'DARK' ? <span> Logout </span> : <span style={{color: '#A5A5A5'}}> Logout </span> }
          </span>
          <span style={{transition: 'all .3s ease-in-out'}}>
            <GoSignOut size={18} id={darkMode === 'DARK' ? 'D_toggleIcon' : 'L_toggleIcon'} />
          </span>
        {/* </Link> */}
      </div>
    </div>
  )
}

// const socialStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'auto auto'
// }
// const logoStyle = {
//   fontSize: '28px',
//   marginTop: '40px'
// }
// const dLightStyle = {
//   marginTop: '50px',
//   fontSize: '16px',
//   textAlign: 'right',
//   fontFamily: 'Segoe UI Light'
// }
// const dLightTextStyle = {
//   verticalAlign: 'middle',
//   marginRight: '10px'
// }
export default Header;
