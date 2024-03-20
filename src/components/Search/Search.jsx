import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {login_url} from "../../data/data";

import {InputField} from "../UI/input/InputField";
import iconsApi from '../../images/loginForm/api.svg'
import {AuthContext} from "../context/Contexts";
import FormRequestParameters from "./FormRequestParameters";

function Search() {
    const {isAuthenticated, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    //useEffect(() => {
       // !isAuthenticated ? navigate('/') : null;
   // })


    return(
        <div>
            <FormRequestParameters/>
        </div>
    )
}
export default Search;