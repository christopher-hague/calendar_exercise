import React from 'react'
import Event from './Event'

class Calendar extends React.Component {
  constructor() {
    super()

    this.state = {
      events: [
        {location: "Chucks", title: "Graduation Party for Tommy", start: "5:00pm", end: "7:00pm"},
        {location: "Office", title: "Conference Call", start: "1:00pm", end: "3:00pm"},
        {location: "Dr. Smith's", title: "Dentist", start: "10:00am", end: "11:00am"}
      ]
    }
  }

  createTimes() {
    var times = ["12:00am", "12:30am", "1:00am", "1:30am", "2:00am", "2:30am", "3:00am", "3:30am", "4:00am", "4:30am", "5:00am", "5:30am", "6:00am", "6:30am", "7:00am", "7:30am", "8:00am", "8:30am", "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm", "3:00pm", "3:30pm", "4:00pm", "4:30pm", "5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm", "9:30pm", "10:00pm", "10:30pm", "11:00pm", "11:30pm"]

    return times
  }

  findEvent(time) {
    return this.state.events.find(e => e.start === time)
  }

  render() {
    return (
      <table className="ui definition table">
        <thead>
          <tr>
            <th></th>
            <th>Events</th>
          </tr>
        </thead>

        <tbody>
          {this.createTimes().map(time =>
            <tr key={time}>
              <td>{time}</td>
              {this.findEvent(time) ? <td><Event e={this.findEvent(time)}/></td> : <td></td>}
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default Calendar
