import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/SmsForm.css';

const SmsForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/send-sms", {
                phoneNumber,
                message
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error sending SMS:', error);
            alert('Failed to send SMS');
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Send SMS</button>
            </form>
        </div>
    );
};

export default SmsForm;
