import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [imageSource, setImageSource] = useState("avatar0.svg");
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [daysdiff, setDaysdiff] = useState(null);

    const calculatediff = () => {
        const enteredDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        const timeDifference = today - enteredDate;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        setDaysdiff(days);
        console.log(daysdiff)
    };

    const isDateValid = () => {
        const enteredDate = new Date(`${year}-${month}-${day}`);
        return (
            (day.length === 2 || day.length === 1) &&
            (month.length === 2 || month.length === 1) &&
            year.length === 4 &&
            !isNaN(enteredDate.getTime()) &&
            day >= 1 &&
            day <= 31 &&
            month >= 1 &&
            month <= 12 &&
            year <= 2025
        );
    };

    const handleInputChange = (e, setState) => {
        setState(e.target.value);
    };

    useEffect(() => {
        const images = [
            "avatar0.svg",
            "avatar1.svg",
            "avatar2.svg",
            "avatar3.svg",
            "avatar4.svg",
            "avatar5.svg",
            "avatar6.svg",
            "avatar7.svg",
            "avatar8.svg",
            "avatar0.svg",
        ];

        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % images.length;
            setImageSource(images[index]);
        }, 1300);
        return () => clearInterval(intervalId);
    }, []);

    const handleClick = () => {
        if (isDateValid()) {
            calculatediff();
        }
    };




    return (
        <div className="flex justify-center items-center h-screen  w-screen bg-gradient-to-r from-pink-500 to-blue-500 ">
            <div className="text-center ">
                <img
                    src={imageSource}
                    className="w-36 h-36 mx-auto mb-4"
                    alt="avatar"
                />
                <h1 className="text-8xl mb-4 text-white">Life Stats</h1>
                <h1 className="text-3xl font-bold mb-4 text-black">Enter Your Birthdate:</h1>
                <div className="flex justify-center space-x-4 mb-6 text-2xl">
                    <input
                        type="number"
                        value={day}
                        onChange={(e) => handleInputChange(e, setDay)}
                        min="0"
                        max="31"
                        maxLength={2}
                        placeholder="Day"
                        className="w-24 h-14 text-center rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ease-in-out duration-300"
                    />
                    <input
                        type="number"
                        value={month}
                        onChange={(e) => handleInputChange(e, setMonth)}
                        max="12"
                        min="0"
                        maxLength={2}
                        placeholder="Month"
                        className="w-24 h-14 text-center rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ease-in-out duration-300"
                    />
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => handleInputChange(e, setYear)}
                        max="9999"
                        min="0"
                        maxLength={4}
                        placeholder="Year"
                        className="w-36 h-14 text-center rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ease-in-out duration-300"
                    />
                </div>

                <button
                    onClick={handleClick}
                    className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg text-4xl w-5/6 shadow-md hover:bg-blue-600 focus:outline-none ${!isDateValid() ? "cursor-not-allowed opacity-50" : "hover:scale-110 transition-all"
                        }`}
                    disabled={!isDateValid()}
                >
                    Let's Go&gt;&gt;&gt;
                </button>
                {daysdiff !== null && daysdiff < 0 && (
                    <div className="mt-4  bg-red-600 text-white font-semibold rounded-lg text-lg shadow-lg flex items-center justify-center space-x-2">
                        <span>⚠️</span>
                        <span>ERROR: Please enter a valid date</span>
                    </div>
                )}
                {daysdiff !== null && daysdiff >= 0 && (
                    <Link to={`/stats/${daysdiff}`}>
                        <button className="mt-4  bg-green-500 text-white font-semibold rounded-lg text-4xl w-5/6 shadow-md hover:bg-green-600 hover:scale-110 focus:outline-none">
                            View Stats
                        </button>
                    </Link>
                )}

            </div>
        </div>
    );
}

export default Home;
