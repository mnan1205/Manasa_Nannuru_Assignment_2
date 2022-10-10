import './index.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsBar = () => {
    const [loading, setLoading] = useState(true);
    const [isDataVisible, setDataVisible] = useState(false);

    const [data, setData] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        headers: {
            'X-RapidAPI-Key': '9fe2c06cabmsh72812dfdf863af3p192babjsnbd443a040931',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await axios.request(options).then(function (response) {
                    console.log(response.data);
                    const arr = [];
                    response.data.map(item => (arr.push(item.name)))
                    setData(arr);

                })
                    .catch(function (error) {
                        console.error(error);
                    });

            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    useEffect(() => {
        setDataVisible(true);
    }, [data]);

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <div className="fitness-routine" style={{
                    padding: "30px"
                }}>
                    <h4>Do Checkout by Fitness Routine</h4>
                    <div className="fitness-list" style={{
                    }}>
                        {isDataVisible ? data.map(item => { return (<div >{item}</div>) }) : null}
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewsBar;

