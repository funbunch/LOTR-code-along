import React, { Component } from "react"
import Movie from "./Movie.jsx"

const movieData = [
  {
    title:"The Fellowship of the Ring", 
    hours:"2",
    minutes:"58",
  },
  {
    title:"The Two Towers",
    hours:"2",
    minutes:"59",
  },
  {
    title:"The Return of the King",
    hours:"3",
    minutes:"21",
  },
]

class App extends Component {
  render() {
    // you do stuff up here
    const movies = movieData.map((movie, index) => {
      console.log(`the current array index is ${index}`)
      return <Movie 
        title={movie.title}
        hours={movie.hours}
        minutes={movie.minutes}
        key={index}
      />
    })
    console.log(movies)
    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default App