import React, { useState, useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import '../App.css';
import { DarkModeContext } from '../context/DarkModeContext';
import { useDispatch, useSelector } from 'react-redux';




const SearchBar = ( {searchT, error} ) => {

  // const {darkMode} = useContext(DarkModeContext);
const darkMode = useSelector((state) => state.themeToggle );


  const [searchTerm, setSearchTerm] = useState('');
  const searchFunc = () => {
    searchT(searchTerm);
  }

  return (
    <div id={darkMode === 'DARK' ? 'D_SearchbgColor' : 'L_SearchbgColor'}>
        <div id={darkMode === 'DARK' ? 'D_SeacrhbarStyle' : 'L_SeacrhbarStyle'}>
          <CiSearch size={31} id={darkMode === 'DARK' ? 'D_SearchIconStyle' : 'L_SearchIconStyle'} />
          <input id={darkMode === 'DARK' ? 'D_inputStyle' : 'L_inputStyle'} type="text" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Search Github username..." />
          <button className='btn btn-sm btn-primary' onClick={searchFunc} id={darkMode === 'DARK' ? 'D_btnStyle' : 'L_btnStyle'}>Search</button>
        </div>
          {error ? <span id={darkMode === 'DARK' ? 'D_errorStyle' : 'L_errorStyle'}>{error}</span> : null }
    </div>
  )
}

// const errorStyle = {
//   display: 'flex',
//   justifyContent: 'right',
//   color: 'red',
//   fontSize: '16px',
//   fontFamily: 'Segoe UI Light',
//   marginLeft: '-10%'
// }


// const bgColor = {
//     backgroundColor: '#1E2A47',
//     borderRadius: '10px',
//     boxShadow: '0 10px 37px -18px #000',
//     padding: '10px'
// }

// const barStyle =  {
//   display: 'grid',
//   gridTemplateColumns: '30px auto 70px'
// }

// const iconStyle =  {
//   marginRight: '15px',
//   marginTop: '3px',
//   color: '#0B78FF'
// }

// const inputStyle =  {
//   marginRight: '5px',
//   height: '40px',
//   backgroundColor: 'transparent',
//   border: 'none',
//   fontFamily: 'Arial',
//   color: 'white'
// }

// const btnStyle =  {
//   fontFamily: 'Arial',
//   height: '25px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '65px',
//   marginTop: '8px',
//   fontSize: '13px'
// }


export default SearchBar