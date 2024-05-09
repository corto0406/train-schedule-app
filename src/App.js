import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TrainScheduleList from './components/TrainScheduleList';
import TrainDetails from './components/TrainDetails';
import Footer from './components/Footer';



function App() {
    const [schedules, setSchedules] = useState([]);
    const [selectedTrainId, setSelectedTrainId] = useState(null);

    const handleSearch = async (searchCriteria) => {
        // Fetch schedules based on search criteria
        // For example:
        // const response = await axios.get(`/api/schedules?station=${searchCriteria.station}&date=${searchCriteria.date}&time=${searchCriteria.time}`);
        // setSchedules(response.data);
    };

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <SearchBar onSearch={handleSearch} />
                            <TrainScheduleList
                                schedules={schedules}
                                onSelectTrain={setSelectedTrainId}
                            />
                        </>
                    } />
                    <Route path="/train/:id" element={<TrainDetails trainId={selectedTrainId} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
