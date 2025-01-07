import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




function Stats() {
    const { read } = useParams();
    const shash = read;
    const [heartbeat, setheartbeat] = useState(0);
    const [days, setdays] = useState(0);
    const [breathe, setbreathe] = useState(0);
    const [blink, setblink] = useState(0);
    const [rbc, setrbc] = useState(0);
    const [sleep, setsleep] = useState(0);
    const [population, setpopulation] = useState(0);
    const [sundist, setsundist] = useState(0);
    const [moondist, setmoondist] = useState(0);
    const [moonorbit, setmoonorbit] = useState(0);
    const [imgSrc, setImgSrc] = useState('/public/eye.svg');


    useEffect(() => {
        const interval = setInterval(() => {
            setImgSrc((prevSrc) =>
                prevSrc === '/eye.svg' ? '/eye-close.svg' : '/eye.svg'
            );
        }, 1500);

        return () => clearInterval(interval);
    }, []);


    const calculation = () => {
        setheartbeat((shash * 112101).toLocaleString());
        setdays((shash * 1).toLocaleString());
        setbreathe((shash * 21101).toLocaleString());
        setblink((shash * 17501).toLocaleString());
        setrbc((shash * 200000000121).toLocaleString());
        setsleep((Math.round(shash * 0.3)).toLocaleString());
        setpopulation((shash * 211011).toLocaleString());
        setsundist((shash * 2600101).toLocaleString());
        setmoonorbit(Math.round(shash * 0.036));
        setmoondist((shash * 0.0104).toFixed(1));
    }

    useEffect(() => {
        calculation();

    }, [shash])


    return (
        <>
            <div className="container flex font-medium h-screen justify-center text-center font-roboto">
                <div className=' birth text-2xl '>
                    <img src="/birth.svg" className='h-40 mx-auto mt-20 animate-wiggle' alt="" /><br /><br />
                    A lot has happened in the {(days).toLocaleString()} days since you were born <br /> <br /> <br />
                    <p className='text-2xl'>Some amazing stats are below...</p>
                    <img src="/heart.svg" className='h-40 mx-auto mt-20 animate-beat' alt="" /><br /><br /><br />
                    <p className=''>Your heart has beaten about {heartbeat} times and still counting</p>
                    <img src="/winddd.gif" className='h-80 mx-auto mt-20 ' alt="" /><br /><br />
                    <p>You have taken about {breathe} breaths-guess your lungs are training for a Marathon</p><br /><br />
                    <div className='flex  '>
                        <img src={imgSrc} className='h-36 mx-auto mt-20 animate-fadeInOut' alt="" />
                        <img src={imgSrc} className='h-36 mx-auto mt-20 animate-fadeInOut' alt="" />
                    </div><br /><br /><br /><br />
                    <p>You have blinked about {blink} times.</p><br /><br />
                    <div>
                        <div className='flex '>
                            <img src="/rbc.svg" className="h-10 mx-auto mt-20 animate-spawn " style={{ animationDelay: '0s' }} alt="" />
                            <img src="/rbc.svg" className='h-10 mx-auto mt-20 animate-spawn ' style={{ animationDelay: '0.5s' }} alt="" />
                            <img src="/rbc.svg" className='h-10 mx-auto mt-20 animate-spawn' style={{ animationDelay: '1s' }} alt="" />
                        </div>
                        <div className='flex'>
                            <img src="/rbc.svg" className='h-10 mx-auto mt-20 animate-spawn' style={{ animationDelay: '1.5s' }} alt="" />
                            <img src="/rbc.svg" className='h-10 mx-auto mt-20 animate-spawn' style={{ animationDelay: '2s' }} alt="" />
                            <img src="/rbc.svg" className='h-10 mx-auto mt-20 animate-spawn' style={{ animationDelay: '2.5s' }} alt="" />
                        </div><br /><br /><br />
                        <p>Your body has produced {rbc} Red Blood Cells in your body!!</p><br /><br />
                        <img src="/sleep.svg" className='h-44 mx-auto mt-20 ' alt="" /><br /><br /><br />
                        <p>You've spent {sleep} days sleeping almost 1/3rd of your life</p><br /><br />
                        <img src="/earth.svg" className='h-44 mx-auto mt-20 animate-spinn' alt="" /><br /><br /><br />
                        <p>You're not the only thing that's changed. The world is a different place too.</p><br /><br /><br />
                        <p>The world is a bit crowded now </p>
                        <img src="/crowd1.png" className='h-56 w-auto mx-auto mt-20 ' alt="" /><br /><br />
                        <p>No it's not just in your head <br /> There are {population} more people than when you were born.</p><br /><br />
                        <div className='bg-black flex'>
                            <img src="/galaxy.svg" className='h-44 mx-auto  my-10 animate-spinn items-center justify-center' alt="" />
                        </div><br /><br /><br />
                        <p>Lets talk about our beloved Space !!!</p><br /><br /><br />
                        <div className="bg-black w-full h-screen flex items-center justify-center relative">
                            <img src="/sun.svg" className="h-32 absolute z-10" alt="Sun" />
                            <div className="absolute animate-orbit">
                                <img src="/earth.svg" className="h-10" alt="Earth" />
                            </div>
                        </div><br /><br /><br /><br />
                        <p>You've travelled {sundist} kilometres around Sun. Quite a journey</p> <br /><br /><br />
                        <div className="bg-black w-full h-screen flex items-center justify-center relative">
                            <img src="/earth.svg" className="h-32 absolute z-10" alt="Sun" />
                            <div className="absolute animate-orbit">
                                <img src="/moon.svg" className="h-10" alt="Earth" />
                            </div>
                        </div><br /><br /><br /><br />
                        <p>The moon has orbited you {moonorbit} times in your lifetime.</p><br /><br /><br />
                        <div className='bg-black flex'>
                            <img src="/moon.svg" className='h-44 mx-auto  my-10 animate-spinn items-center justify-center' alt="" />
                        </div><br /><br /><br />
                        <p>The moon is slowly drifting apart <br /> It has moved {moondist} cm from earth since you were born.</p> <br />
                        <img src="/flower.png" className='h-72 mx-auto  my-10  items-center justify-center' alt="" /><br /><br />
                        <h2 >Your life holds immense value. <br />The journey ahead of you is filled with endless possibilities.</h2><br /><br /><br />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Stats;
