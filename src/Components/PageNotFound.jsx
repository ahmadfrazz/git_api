import React from 'react';
import page_not_found_image from '../images/404.svg';

const PageNotFound = () => {
  return (
    <div className="container" >
        <div style={{textAlign: 'center', paddingTop: '20%' }} >
            <img src={page_not_found_image} height="350px" alt="Page Not Found" />
        </div>
    </div>
  )
}

export default PageNotFound;