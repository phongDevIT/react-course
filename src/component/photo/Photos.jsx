import React, { useEffect, useState } from "react";
import axios from "axios";
// https://picsum.photos/v2/list
// https://picsum.photos/200/300/?blur=2

const getRandomPhoto = (page) => {
    return axios
        .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
        .then((response) => {
            // console.log(response);
            return response.data;
        })
        .catch((error) => {
            // console.log(error);
        });
};
const Photos = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const handleLoadMore = () => {
        getRandomPhoto(nextPage).then((image) => {
            // console.log(image);
            const newPhoto = [...randomPhoto, ...image];
            setRandomPhoto(newPhoto);
            setNextPage(nextPage + 1);
        });
    };

    useEffect(() => {
        handleLoadMore();
    }, []);
    return (
        <div>
            <div className="grid grid-cols-4 gap-5 p-5">
                {randomPhoto.length > 0 &&
                    randomPhoto.map((item, index) => (
                        <div
                            key={item.id}
                            className="p-3 bg-white shadow-md rounded-lg h-[400]"
                        >
                            <img
                                src={item.download_url}
                                alt={item.author}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
            </div>
            <div className="text-center">
                <button
                    onClick={handleLoadMore}
                    className="bg-blue-600 inline-block px-8 py-4 text-white rounded-lg"
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Photos;
