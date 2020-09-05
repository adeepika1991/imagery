import React, { useEffect, useState } from 'react';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { v4 as uuidv4 } from 'uuid';

function Image() {

    const SIZE = 30;
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoader(true);
            const result = await fetch('https://picsum.photos/list');
            const images = await result.json();
            const finalData = await images.slice(0, SIZE);
            setData(finalData);
            const timer = setTimeout(() => {
                setLoader(false);
            }, 5000);
            return () => clearTimeout(timer);

        };

        fetchData();
    }, [])


    const download = (url) => {
        let element = document.createElement("a");
        let file = new Blob([url], { type: "image/*" });
        element.href = URL.createObjectURL(file);
        element.download = "image.jpg";
        element.click();
    };

    //The above function was taken from stackoverflow

    return (
        <>
            {loader ?
                <Loader
                    className="loader"
                    type="Hearts"
                    color="#a83269"
                    height={100}
                    width={100} />
                :

                <div className="images">
                    {data.map((item) => {
                        return (
                            <div className="box" key={uuidv4()}>
                                <img src={`${item.post_url}/download`} alt="images" />
                                <div className="inner-box">
                                    <button className="button" onClick={() => { download(`${item.post_url}/download`) }}>Download</button>
                                    <div className="text">{item.author}</div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            }
        </>

    )
}

export default Image
