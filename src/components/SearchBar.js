import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [station, setStation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSearch = () => {
        onSearch({ station, date, time });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Station"
                value={station}
                onChange={(e) => setStation(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
