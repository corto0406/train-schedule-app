import React from 'react';

function TrainScheduleList({ schedules, onSelectTrain }) {
    return (
        <ul>
            {schedules.map((schedule) => (
                <li key={schedule.id} onClick={() => onSelectTrain(schedule.id)}>
                    {schedule.trainNumber} - {schedule.departureTime} to {schedule.arrivalTime}
                </li>
            ))}
        </ul>
    );
}

export default TrainScheduleList;
