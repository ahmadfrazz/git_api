import React, { useContext } from 'react'
import '../App.css';
import { MdLocationPin } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import moment from 'moment';
import { DarkModeContext } from '../context/DarkModeContext';
import { useDispatch, useSelector } from 'react-redux';



const UserInfo = ( {data, loader} ) => {

//   const {darkMode} = useContext(DarkModeContext);
const darkMode = useSelector((state) => state.themeToggle );



    // const {name, avatar_url, login, created_at, bio, public_repos, followers, following, location, blog, twitter_username, company} = data;

const join_date = moment(data?.created_at).format("DD MMM YYYY");
if(data?.blog.length > 23){
var blog_short_link = data?.blog.substring(0,23) + (data?.blog.length > 23 ? "..." : "");
}

  
    return (
    <div id={darkMode === 'DARK' ? 'D_bgColor' : 'L_bgColor'} >

    {loader ? 'Loading...' : 
        <>
        <div id={darkMode === 'DARK' ? 'D_barStyle' : 'L_barStyle'}>
          <img id={darkMode === 'DARK' ? 'D_imgNameStyle' : 'L_imgNameStyle'} src={data?.avatar_url} alt='profile' />
          <div>
            <a href={`https://github.com/${data?.login}`} id={darkMode === 'DARK' ? 'D_nameStyle' : 'L_nameStyle'} ><span>{data?.name}</span></a>
            <p id={darkMode === 'DARK' ? 'D_uNameStyle' : 'L_uNameStyle'}>@{data?.login}</p>
            <p id={darkMode === 'DARK' ? 'D_dateStyle' : 'L_dateStyle'}>Joined {join_date}</p>
          </div>
        </div>
        <span>
            {data?.bio ? <p  id={darkMode === 'DARK' ? 'D_bioStyle' : 'L_bioStyle'}>{data?.bio}</p> : <p style={{color: '#5B668A', marginTop: '20px', fontSize: '16px', fontFamily: 'Segoe UI Light',}}>No Bio Available</p>}
        </span>
        <div  id={darkMode === 'DARK' ? 'D_bgColorSocial' : 'L_bgColorSocial'}>
            <div  id={darkMode === 'DARK' ? 'D_socialStyle' : 'L_socialStyle'}>
                <div>
                    <h6>Repos</h6>
                    <p  id={darkMode === 'DARK' ? 'D_socialCountStyle' : 'L_socialCountStyle'}>{data?.public_repos}</p>
                </div>
                <div>
                    <h6>Followers</h6>
                    <p  id={darkMode === 'DARK' ? 'D_socialCountStyle' : 'L_socialCountStyle'}>{data?.followers}</p>
                </div>
                <div>
                    <h6>Following</h6>
                    <p  id={darkMode === 'DARK' ? 'D_socialCountStyle' : 'L_socialCountStyle'}>{data?.following}</p>
                </div>
            </div>
        </div>
        <div  id={darkMode === 'DARK' ? 'D_otherInfoStyle' : 'L_otherInfoStyle'} >
                <div>
                    <MdLocationPin  id={darkMode === 'DARK' ? 'D_iconStyle' : 'L_iconStyle'} size={18} /> 
                    {data?.location ? <h6>{data?.location}</h6> : <span id={darkMode === 'DARK' ? 'D_na' : 'L_na'}>Not Available</span>}
                </div>
                <div>
                    <FaLink  id={darkMode === 'DARK' ? 'D_iconStyle' : 'L_iconStyle'} size={18} /> 
                    {data?.blog ? <a href={data?.blog} id={darkMode === 'DARK' ? 'D_socialLink' : 'L_socialLink'} >{blog_short_link}</a> : <h6 id={darkMode === 'DARK' ? 'D_na' : 'L_na'}>Not Available</h6>}
                </div>
                <div>
                    <FaTwitter  id={darkMode === 'DARK' ? 'D_iconStyle' : 'L_iconStyle'} size={18} />
                    {data?.twitter_username ? <span>{data?.twitter_username}</span> : <h6 id={darkMode === 'DARK' ? 'D_na' : 'L_na'}>Not Available</h6>}
                </div>
                <div>
                    <HiBuildingOffice2  id={darkMode === 'DARK' ? 'D_iconStyle' : 'L_iconStyle'} size={18} />
                    {data?.company ? <span>{data?.company}</span> : <h6 id={darkMode === 'DARK' ? 'D_na' : 'L_na'}>Not Available</h6>}
                </div>
        </div>
        </>
    }

        
    </div>
  )
}


// const bgColor = {
//     backgroundColor: '#1E2A47',
//     marginTop: '15px',
//     borderRadius: '10px',
//     boxShadow: '0 10px 37px -18px #000',
//     padding: '20px'
// }
// const barStyle = {
//     display: 'flex'
// }
// const imgNameStyle = {
//     width: '70px',
//     height: '70px',
//     borderRadius: '50%',
//     marginRight: '12px'
// }
// const nameStyle = {
//     fontSize: '24px',
//     margin: '0'
// }
// const uNameStyle = {
//     fontSize: '19px',
//     color: '#0B78FF',
//     fontFamily: 'Segoe UI Light',
//     margin: '0'
// }
// const dateStyle = {
//     fontSize: '16px',
//     fontFamily: 'Segoe UI Light',
//     margin: '0'
// }
// const bioStyle = {
//     fontSize: '16px',
//     fontFamily: 'Segoe UI Light',
//     marginTop: '20px',
//     marginBottom: '15px'
// }
// const bgColorSocial = {
//     backgroundColor: '#141D2F',
//     borderRadius: '10px'
// }
// const socialStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'auto auto auto',
//     textAlign: 'center',
//     paddingTop: '20px'
// }
// const socialCountStyle = {
//     fontSize: '16px',
//     fontFamily: 'Segoe UI Light',
//     marginTop: '-5px'
// }
// const otherInfoStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'auto auto',
//     textAlign: 'left',
//     paddingTop: '20px',
//     fontSize: '16px',
//     fontFamily: 'Segoe UI Light'
// }
// const iconStyle = {
//     float: 'left',
//     marginRight: '12px',
//     marginTop: '2px',
//     color: '#4B6A9B'
// }

export default UserInfo;