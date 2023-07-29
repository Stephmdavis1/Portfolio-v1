import React from 'react'
import Typewriter from 'typewriter-effect';

function Typewriters() {
    return (
        <div className='container'>
            <h2 className='typing'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        deleteSpeed: 50,
                        strings: ["Front End Developer", "UX Designer", "Back End Developer (newbie) ", "Plant Obsessive", "Fitness Addict", "Lover of Ice Cream"]
                    }}
                />
            </h2>
        </div>
    )
}

export default Typewriters;