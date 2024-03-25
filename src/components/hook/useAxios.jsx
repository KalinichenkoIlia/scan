import React, {useState, useEffect} from "react";
import axios from "axios";

function useAxios({url = null, method, data = null, config = null}) {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        await axios[method](url, data, config)
            .then(response => {
                setResponse(response.data)
                setLoading(true)
            }).catch(error => {
                setError(error)
                console.log(error)
            })
    }


    useEffect(() => {

        fetchData()

    }, [])


    return { response, error, loading };
}

export default useAxios;