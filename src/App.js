import React from 'react';
import BookingList from './BookingList';
import Header from './Header';
import './App.css';

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends React.Component {

  state = {
    bookings: []
  }

  componentDidMount() {
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

  render() {
    return (
      <div className="App">
        <Header />
        <BookingList
          bookings={this.state.bookings}
        />
      </div>
    );
  }
}

export default App;
