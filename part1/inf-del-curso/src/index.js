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
      <Part part={props.part1} excercise={props.excercise1}/>
      <Part part={props.part2} excercise={props.excercise2}/>
      <Part part={props.part3} excercise={props.excercise3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.excercise1 + props.excercise2 + props.excercise3}</p>
  )
} 

const App = () => {
  const course = "Half Stack application development"
  const part1 = 'Fundamentals of React'
  const excercise1 = 10
  const part2 = 'Using props to pass data'
  const excercise2 = 7
  const part3 = 'State of a component'
  const excercise3 = 14

  return(
  <div>
    <Head course={course}/>
    <Content 
      part1={part1} excercise1={excercise1}
      part2={part2} excercise2={excercise2}
      part3={part3} excercise3={excercise3}
    />
    <Total excercise1={excercise1} excercise2={excercise2} excercise3={excercise3} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))