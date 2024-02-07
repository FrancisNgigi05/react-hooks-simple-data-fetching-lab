import React, {useState, useEffect} from "react";
import { data } from "../mocks/data";

function App() {
    // The useState will be used to set the image
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            // coverting the API response to json format
            .then(response => response.json())
            // The image fetched will be set in the setImage funciton
            .then((data) => setImage(data.message))
    }, []);

    // show Loading text if imgae is not there
    if (image === null)
        return (<p>Loading ...</p>);

    return (
        <div>
            <img src={image} alt="dog image" />
        </div>
    )

}

export default App;