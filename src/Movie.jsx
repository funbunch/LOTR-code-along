import React, { Component } from "react"

export default class Movie extends Component {
  render() {
    console.log(this.props.myData)
    return (
      <div>
        <h2>The Lord of the Rings: {this.props.title}</h2>

        <p>runtime: {this.props.hours}h {this.props.minutes}min</p>
      </div>
    )
  }
}