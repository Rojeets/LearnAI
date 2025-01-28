import React, { Component } from "react";
import "../css/Styles.css";

export default class Home extends Component {
    render() {
        return (
            <div className="uni">
                <section class="hero">
                    <h2>Learn Smarter with Personalized Learning Paths</h2>
                    <p>AI-driven courses tailored to your skills, pace, and preferences.</p>
                    <a href="login" class="get-button">Get Started</a>
                </section>

                <section class="featured-courses">
                    <h3>Featured Courses</h3>
                    <div class="course-list1">
                        <div class="course">
                            <h4>Web Development</h4>
                            <p>Learn how to build responsive websites from scratch.</p>
                        </div>
                        <div class="course">
                            <h4>Machine Learning</h4>
                            <p>Discover the power of AI and machine learning.</p>
                        </div>
                        <div class="course">
                            <h4>Data Science</h4>
                            <p>Discover data analysis, machine learning, and AI techniques.</p>
                        </div>
                    </div>
                </section>

                <section class="how-it-works">
                    <h3>How It Works</h3>
                    <div class="steps">
                        <div class="step">
                            <h4>Step 1</h4>
                            <p>Create your profile.</p>
                        </div>
                        <div class="step">
                            <h4>Step 2</h4>
                            <p>Get personalized course recommendations.</p>
                        </div>
                        <div class="step">
                            <h4>Step 3</h4>
                            <p>Start learning and improve your skills.</p>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}