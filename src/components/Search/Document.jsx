import React, {useEffect, useState} from "react";
import axios from "axios";
import {HISTOGRAMS_URL, OBJECT_SEARCH_URL, updateHistograms} from "../../data/data";
import {organizeData} from "./utils";
import useAxios from "../hook/useAxios";
let accessToken = localStorage.getItem('accessToken');


function Document(props) {


   useEffect(() => {

       (async () => {
           await axios.post(
               OBJECT_SEARCH_URL,
               updateHistograms(props.values),
               {
                   headers:
                       {"Authorization": `Bearer ${accessToken}`}
               })
               .then(response => {

                   setDocumentsId(response.data);
                   console.log(response.data);

               }).catch(error => {
                   console.log(error)
               })
       })
       ();
   })

    return (
        <>

        </>
    )
}

export default Document;