import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainDetails({ trainId }) {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchTrainDetails = async () => {
            const response = await axios.get(`/api/trains/${trainId}`);
            setDetails(response.data);
        };

        fetchTrainDetails();
    }, [trainId]);

    if (!details) return <div>Loading...</div>;

    return (
        <div>
            <h2>Train {details.trainNumber}</h2>
            <p>Route: {details.route}</p>
            <p>Stops: {details.stops.join(', ')}</p>
            <p>Type: {details.type}</p>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    );
}

export default TrainDetails;
