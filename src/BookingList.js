import React from 'react';
import { Table } from 'semantic-ui-react';
import moment from 'moment';
import BookingModal from './BookingModal';

const BookingList = props => {
    return (
        <div className="bookingList" >
            <div id="bookingHeader">
                <h2>Bookings</h2>
                <BookingModal 
                    bookings={props.bookings}
                />
            </div>
            <Table id="table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell id="tableHeader">Customer</Table.HeaderCell>
                        <Table.HeaderCell id="tableHeader">Email</Table.HeaderCell>
                        <Table.HeaderCell id="tableHeader">Address</Table.HeaderCell>
                        <Table.HeaderCell id="tableHeader">Booking Type</Table.HeaderCell>
                        <Table.HeaderCell id="tableHeader">Booking Date/Time</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {props.bookings.map(booking => {
                        return <Table.Row key={booking._id} verticalAlign="top">
                            <Table.Cell>{booking.name}</Table.Cell>
                            <Table.Cell>{booking.email}</Table.Cell>
                            <Table.Cell>
                                {booking.address} <br />
                                <span id="bookingCity">{booking.city.toLowerCase()}</span>, {booking.state.toUpperCase()}, {booking.zip}
                            </Table.Cell>
                            <Table.Cell id="bookingType">{booking.bookingtype.split('w').join(' w')}</Table.Cell>
                            <Table.Cell>{moment(booking.datetime).format("MMMM D, YYYY [at] h:mm a")}</Table.Cell>
                        </Table.Row>
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default BookingList;