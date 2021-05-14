import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
  return(
    <p>{props.part} {props.excercise}</p>
  )
}

const Head = (props) => {
  return (
    <p>{props.course}</p>
  )
}

const Content = (props) => {
  return(
    <>
      <Part part={props.parts[0].name} excercise={props.parts[0].excercise}/>
      <Part part={props.parts[1].name} excercise={props.parts[1].excercise}/>
      <Part part={props.parts[2].name} excercise={props.parts[2].excercise}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.parts[0].excercise + props.parts[1].excercise + props.parts[2].excercise}</p>
  )
} 

const App = () => {
  const course = "Half Stack application development"
  const parts = [
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

  return(
  <div>
    <Head course={course}/>
    <Content parts={parts}/>
    <Total parts={parts} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))