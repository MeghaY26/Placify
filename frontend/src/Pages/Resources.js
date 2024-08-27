import React from 'react';
import '../CSS/Resources.css'; // Import CSS file for styling

function Resources() {
    return (
        <>
        <h3 align="center" >RESOURCES</h3>
        <div className="container-res">
            <div className="subject-box">
                <h3>COMPUTER NETWORKS</h3>
                <br/>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=JFF2vJaN0Cw&list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_">Playlist</a></li>
                    <li><a href="https://www.interviewbit.com/networking-interview-questions/">Interview Questions</a></li>
                    <li><a href="https://www.geeksforgeeks.org/basics-computer-networking/">Basics</a></li>
                </ul>
            </div>
            <div className="subject-box">
                <h3>OPERATING SYSTEMS</h3>
                <br/>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p">Playlist</a></li>
                    <li><a href="https://www.geeksforgeeks.org/operating-systems/">Basics</a></li>
                    <li><a href="https://www.interviewbit.com/operating-system-mcq/">Interview Questions</a></li>
                </ul>
            </div>
            <div className="subject-box">
                <h3>DATABASE MANAGEMENT SYSTEMS</h3>
                <br/>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y">Playlist</a></li>
                    <li><a href="https://www.geeksforgeeks.org/dbms/">Basics</a></li>
                    <li><a href="https://www.interviewbit.com/dbms-mcq/">Interview Questions</a></li>
                </ul>
            </div>
            <div className="subject-box">
                <h3>OBJECT ORIENTED PROGRAMMING</h3>
                <br/>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=BSVKUk58K6U&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk">Playlist</a></li>
                    <li><a href="https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/">Basics</a></li>
                    <li><a href="https://www.interviewbit.com/oops-mcq/">Interview Questions</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Resources;