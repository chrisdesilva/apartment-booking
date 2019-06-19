import React from 'react';
import { Button, Form, Message, Modal } from 'semantic-ui-react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';

const options = [
    { key:"dogwalk", text:"Dog Walk", value:"dogwalk" },
    { key:"housekeeping", text:"Housekeeping", value:"housekeeping" }
]

class BookingModal extends React.Component {

    state = {
        bookings: null,
        email: null,
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        bookingType: null,
        bookingDate: null,
        bookingTime: null,
        submitted: false
    }

    // when user clicks the booking button, update state with current data to simulate having backend

    updateBookingList = () => {
        this.setState({ bookings: this.props.bookings })
    }

    // saves new booking data to local state. would push this data to database if using Mongo, Firebase, etc

    handleSubmitBooking = e => {
        e.preventDefault()
        this.setState({
            submitted: true,
            bookings: [...this.state.bookings, {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                bookingType: this.state.bookingType,
                bookingDate: this.state.bookingDate,
                bookingTime: this.state.bookingTime
            }],
            email: "",
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            bookingType: "",
            bookingDate: "",
            bookingTime: ""
        })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return (
            <div>
                <Modal trigger={<Button onClick={this.updateBookingList} id="bookingButton">Create Booking</Button>}>
                    <Modal.Header>Create booking</Modal.Header>
                    <Modal.Content>
                        <Form success onSubmit={this.handleSubmitBooking}>
                            <Form.Group>
                                <Form.Input onChange={this.handleChange} name="name" value={this.state.name} id="input" label="Name" width={8} />
                                <Form.Select onChange={this.handleChange} name="bookingType" value={this.state.bookingType} options={options} label="Booking type" width={8} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input onChange={this.handleChange} type="email" name="email" value={this.state.email} label="Email" width={8} />
                                <DateInput
                                    dateFormat="MMMM D, YYYY" 
                                    onChange={this.handleChange} 
                                    name="bookingDate" 
                                    value={this.state.bookingDate} 
                                    label="Booking Date" 
                                    width={8} 
                                 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input onChange={this.handleChange} name="address" value={this.state.address} label="Street Address" width={8} />
                                <TimeInput
                                    timeFormat="ampm"
                                    onChange={this.handleChange} 
                                    name="bookingTime" 
                                    value={this.state.bookingTime} 
                                    label="Booking Time" 
                                    width={8} 
                                 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input onChange={this.handleChange} name="city" value={this.state.city} label="City" width={8} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input onChange={this.handleChange} name="state" value={this.state.state} label="State" width={4} />
                                <Form.Input onChange={this.handleChange} name="zip" pattern="[0-9]{5}" value={this.state.zip} label="Zip code" width={4} />
                            </Form.Group>
                            <div style={{ textAlign: "right" }}>
                                <Button 
                                    id="bookingButton"
                                    disabled={
                                        !this.state.email ||
                                        !this.state.address ||
                                        !this.state.zip ||
                                        !this.state.city ||
                                        !this.state.state ||
                                        !this.state.name ||
                                        !this.state.bookingDate ||
                                        !this.state.bookingTime ||
                                        !this.state.bookingType

                                    }
                                >
                                    Create booking
                                </Button>
                            </div>
                            {this.state.submitted && <Message success header='Done!' content="Thanks for booking with us!" />}
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default BookingModal;