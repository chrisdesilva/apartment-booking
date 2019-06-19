import React from 'react';
import { Button } from 'semantic-ui-react';
import BookingList from './BookingList';
import Header from './Header';
import './App.css';

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends React.Component {

  state = {
    bookings: []
  }

  // sort results from database based on time first, then set state with bookings

  showBookings = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://bookingapi-b86e.restdb.io/rest/bookings`,
  {
    headers: new Headers({
      'x-apikey' : API_KEY
    })
  })
      .then(res => res.json())
      .then(
        (result) => {
          result.sort((a,b) => a.datetime.localeCompare(b.datetime) )
          this.setState({ bookings: result })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  filterDogWalk = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://bookingapi-b86e.restdb.io/rest/bookings?q={"bookingtype": "dogwalk"}`,
      {
        headers: new Headers({
          'x-apikey': API_KEY
        })
      })
      .then(res => res.json())
      .then(
        (result) => {
          result.sort((a, b) => a.datetime.localeCompare(b.datetime))
          this.setState({ bookings: result })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  filterHousekeeping = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://bookingapi-b86e.restdb.io/rest/bookings?q={"bookingtype": "housekeeping"}`,
      {
        headers: new Headers({
          'x-apikey': API_KEY
        })
      })
      .then(res => res.json())
      .then(
        (result) => {
          result.sort((a, b) => a.datetime.localeCompare(b.datetime))
          this.setState({ bookings: result })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookingList
          bookings={this.state.bookings}
        />
      <div style={{textAlign: "center"}}>
          <div style={{marginBottom: "1rem"}}><Button primary onClick={this.showBookings}>Show All Bookings</Button></div>
          <Button secondary onClick={this.filterDogWalk}>Show Dog Walks</Button>
          <Button secondary onClick={this.filterHousekeeping}>Show Housekeeping</Button>
      </div>
      </div>
    );
  }
}

export default App;
