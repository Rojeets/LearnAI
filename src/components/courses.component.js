import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/courses.css";

export default class Course extends Component {
    render() {
        return (
            <main class="catalog-content">

                <section class="search-bar">
                    <input type="text" placeholder="Search for courses..." id="searchInput" oninput="searchCourses()" />
                </section>

                <section class="categories">
                    <h2>Categories</h2>
                    <ul>
                        <li><Link to="WebDevelopment">Web Development</Link></li>
                        <li><Link to="data-science">Data Science</Link></li>
                        <li><Link to="MachineLearning">Machine Learning</Link></li>
                        <li><Link to="DigitalMarketing">Digital Marketing</Link></li>
                        <li><Link to="MobileAppDevelopment">Mobile App Development</Link></li>
                    </ul>
                </section>

                <section class="course-list">
                    <h2>Featured Courses</h2>
                    <div className="course-carsole">
                        <div class="course-card">
                            <img src="course-image1.jpg" alt="Course Image" />
                            <div class="course-info">
                                <h3>Web Development Bootcamp</h3>
                                <p>Instructor: Elearing</p>
                                <p>Rating: ★★★★☆</p>
                                <Link to="/login"><button class="cta-button">Enroll Now</button></Link>
                            </div>
                        </div>
                        <div class="course-card">
                            <img src="course-image2.jpg" alt="Course Image" />
                            <div class="course-info">
                                <h3>Data Science with Python</h3>
                                <p>Instructor: Elearing</p>
                                <p>Rating: ★★★★★</p>
                                <Link to="/login"><button class="cta-button">Enroll Now</button></Link>
                            </div>
                        </div>
                        <div class="course-card">
                            <img src="course-image3.jpg" alt="Course Image" />
                            <div class="course-info">
                                <h3>Digital Marketing Masterclass</h3>
                                <p>Instructor: Elearing</p>
                                <p>Rating: ★★★☆☆</p>
                                <Link to="/login"><button class="cta-button">Enroll Now</button></Link>
                            </div>
                        </div>
                        <div class="course-card">
                            <img src="course-image3.jpg" alt="Course Image" />
                            <div class="course-info">
                                <h3>Mobile App Development</h3>
                                <p>Instructor: Elearing</p>
                                <p>Rating: ★★★☆☆</p>
                                <Link to="/login"><button class="cta-button">Enroll Now</button></Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        );
    }
}