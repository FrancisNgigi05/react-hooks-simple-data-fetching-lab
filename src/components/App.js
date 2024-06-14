import React, { useState, useEffect } from 'react';

const API_url = "https://dog.ceo/api/breeds/image/random";
function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(API_url)
            .then((r) => r.json())
            .then((data) => setImage(data.message));
    }, [])

    if (!image) return (<p>Loading...</p>)

    return (
        <div>
            <img src={image} alt="A random Dog" />
        </div>
    )
}

export default App
