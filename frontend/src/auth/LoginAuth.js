import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginAuth = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    
    if(currentUser===null){
        return children;
    }
    else{
        return <Navigate to="/user/predict" />
    }
}

export default LoginAuth;