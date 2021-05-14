import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
  return(
    <p>{props.part} {props.excercise}</p>
  )
}

const Head = (props) => {
  return (
    <p>{props.course.name}</p>
  )
}

const Content = (props) => {
  return(
    <>
      <Part part={props.course.parts[0].name} excercise={props.course.parts[0].excercise}/>
      <Part part={props.course.parts[1].name} excercise={props.course.parts[1].excercise}/>
      <Part part={props.course.parts[2].name} excercise={props.course.parts[2].excercise}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.course.parts[0].excercise + props.course.parts[1].excercise + props.course.parts[2].excercise}</p>
  )
} 

const App = () => {
  const course = {
    name : "Half Stack application development",
    parts: [
      {
        name: 'Fundamentals of React',
        excercise: 10,
      },
      {
        name: 'Using props to pass data',
        excercise: 7,
      },
      {
        name: 'State of a component',
        excercise: 14,
      }
    ]
  }

  return(
  <div>
    <Head course={course}/>
    <Content course={course}/>
    <Total course={course} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))