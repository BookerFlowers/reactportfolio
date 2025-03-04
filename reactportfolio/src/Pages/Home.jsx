import React from 'react';

const Home = () => {



    return (
        <div className='flex items-center justify-center bg-black text-blue-300 p-1.5'>
            <div className='flex flex-col  justify-center gap-30 p-1.5'>
                <h1>Booker T. Flowers </h1>
                <h2>Soft Developer  </h2>
                <p>Booker is a graduate of Persevere where he earned his full stack certificate on December 13, 2025. He is currently an intern software developer with Banyan Labs. Currently enrolled in Grand Canyon University to take online classes to obtain a bachelors of arts degree in Web Design.  </p>
                <div className='flex justify-around '>
                    <button className='transition-scale-1.2 transition-colors hover:bg-red-500' onClick={() => window.location.href = 'https://www.linkedin.com/feed/'}><img src="src\assets\images\LinkedInlink.png" alt="linkedIn" /></button >
                    <button className='transition-scale-1.2 transition-colors hover:bg-red-500' onClick={() => window.location.href = 'https://github.com/BookerFlowers'}><img src="src\assets\images\GitHublink.png" alt="GitHub" /></button>
                </div>







            </div>
            <div className='flex items-center justify-center w-full h-full ' >
                <div className='max-h-max max-w-max '>
                    <img src="src\assets\images\pic14.png" alt="profilePic" />
                </div>

            </div>


        </div>
    );

};

export default Home;