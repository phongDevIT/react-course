import React, { useEffect, useState } from "react";
import axios from "axios";
// https://picsum.photos/v2/list
const getRandomPhoto = () => {
    return axios
        .get("https://picsum.photos/v2/list")
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            // console.log(error);
        });
};
const Photos = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);
    useEffect(() => {
        getRandomPhoto().then((image) => {
            console.log(image);
            setRandomPhoto(image);
        });
    }, []);
    return <div>{JSON.stringify(randomPhoto)}</div>;
};

export default Photos;
