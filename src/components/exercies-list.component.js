import React, { Component } from "react";

export default class ExerciseList extends Component {
  state = {
    exercises: [
      { id: 1, name: "Push-ups" },
      { id: 2, name: "Sit-ups" },
      { id: 3, name: "Squats" },
    ],
  };

  render() {
    return (
      <div>
        <h2>List of Exercises</h2>
        <ul>
          {this.state.exercises.map((exercise) => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
