import React, { useState } from "react";


const Text_Change = () => {
    const [title, setTitle] = useState("Front End Developer🖥");

    return (
        <>
            <h1 className="typing" onClick={() => setTitle("UX Designer📱")}>{title}</h1>;
            <h1 className="typing" onClick={() => setTitle("Back End Developer (newbie) 💻")}>{title}</h1>;
            <h1 className="typing" onClick={() => setTitle("Plant Obsessive🪴")}>{title}</h1>;
            <h1 className="typing" onClick={() => setTitle("Bodybuilder💪")}>{title}</h1>;
            <h1 className="typing" onClick={() => setTitle("Lover of Pizza🍕")}>{title}</h1>;
        </>
    )
}

export default Text_Change;



// const texts = [
//     'Front End Developer🖥',
//     'UX Designer📱',
//     'Plant Obsessive🪴',
//     'Bodybuilder💪'
//     'Bodybuilder💪'
//   ];

