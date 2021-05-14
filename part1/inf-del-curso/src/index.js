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
  const part1 = {
    name: 'Fundamentals of React',
    excercise: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    excercise: 7,
  }
  const part3 = {
    name: 'State of a component',
    excercise: 14,
  }

  return(
  <div>
    <Head course={course}/>
    <Content 
      part1={part1.name} excercise1={part1.excercise}
      part2={part2.name} excercise2={part2.excercise}
      part3={part3.name} excercise3={part3.excercise}
    />
    <Total excercise1={part1.excercise} excercise2={part2.excercise} excercise3={part3.excercise} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))