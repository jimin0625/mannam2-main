import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';
import Footer from './Footer';
import 'react-calendar/dist/Calendar.css';
import './List.css';

function CalendarPage() {
    const [date, setDate] = useState(new Date());
    const [participants] = useState(['Participant 1', 'Participant 2', 'Participant 3']);

    return (
        <>
            <Header />
            <div className="container">
                <div className="calendar-container">
                    <Calendar className="calender" onChange={setDate} value={date} />
                </div>

                <div className = "List-container">
                    <h1>가능한 날짜 순위</h1>
                </div>

                <div className="participants-container">
                    <h2>참여자 목록</h2>
                    {participants.map((participant, index) => (
                        <p key={index}>{participant}</p>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CalendarPage;
