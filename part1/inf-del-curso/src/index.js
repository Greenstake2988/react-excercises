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
    <Content 
      part1={parts[0].name} excercise1={parts[0].excercise}
      part2={parts[1].name} excercise2={parts[1].excercise}
      part3={parts[2].name} excercise3={parts[2].excercise}
    />
    <Total excercise1={parts[0].excercise} excercise2={parts[1].excercise} excercise3={parts[2].excercise} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))