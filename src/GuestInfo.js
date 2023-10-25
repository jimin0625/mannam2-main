import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './GuestInfo.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function GuestInfo() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div>
            <Header />
            <div className="content container">
                <input type="text" className="form-control input-box" placeholder="이름 입력" />
                <input type="email" className="form-control input-box" placeholder="이메일 입력" />
                <input type="phonenumber" className="form-control input-box" placeholder="전화번호 입력" />
                <label>대략적인 기간을 입력해주세요</label>
                    <div className="date-range">
                        <DatePicker
                            placeholderText="언제부터"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <DatePicker
                            placeholderText="언제까지"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>
                <Link to="/List">
                    <button className="btn btn-success submit-btn">완료</button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default GuestInfo;
