import React, { useState } from 'react';
import CallLink from '../Components/Call';



const Skills = () => {

    const [message, setMessage] = useState('');

    const [isPopupVisible, setPopupVisible] = useState(false);
    // email function for primary email
    const handleSendEmail = () => {
        const email = "flowersbooker2025.gmail.com";
        const subject = "Contact me at:";

        window.location.href = 'mailto:${flowersbooker2025@gmail.com}?contact=${}';
    }


    return (
        <div className=' bg-black text-blue-300 p-1.5 gap-20'>
            <h1 className='flex flex-col items-center justify-center text-9*1 font-extrabold font-sans'>Skill Set:</h1>

            <div className='flex flex-row items-center justify-center gap-10'>

                <div className='flex flex-row items-center justify-center'>

                    <div className='flex flex-col items-center justify-center gap-6'>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>Tailwind</p>
                        <p>JavaScript</p>
                        <p>Node.js</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <p>BootStrap</p>
                        <p>React</p>
                        <p>Mongodb</p>
                        <p>Canvas</p>
                        <p>Express.js</p>
                    </div>

                    <p></p>
                </div>
                <div>
                    <img className='w-45' src="src\assets\images\3.png" alt="book" />
                    
                </div>


            </div>
            <h2 className='font-extrabold font-sans text-center'>Contact Me At:</h2>
            <div className='flex flex-row items-center justify-center'>
                {/* link to my primary email text box should be transparent until clicked */}
                <div className='flex flex-col gap-10'>
                    <a href='flowersbooker2025@gmail.com'
                        onClick={(e) => {
                            e.preventDefault();
                            setPopupVisible(true);
                        }} > flowersbooker2025@gmail.com</a>
                    <textarea rows='4' cols='30' placeholder='enter your message here' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className='bg-gray-800 rounded-full' onClick={handleSendEmail}>Send </button>
                    <button className='bg-gray-800 rounded-full' style={{ marginLeft: '10px' }} onClick={() => setPopupVisible(false)}>Close</button>
                    {/* link to call directly to my phone component */}
                    <div className='text-center bg-gray-800 rounded-full'>
                        <CallLink />
                    </div>
                </div>



            </div>


        </div>
    );

};

export default Skills;