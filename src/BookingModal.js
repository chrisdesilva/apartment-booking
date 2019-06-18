import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

const options = [
    { key:"dogwalk", text:"Dog Walk", value:"dogwalk" },
    { key:"housekeeping", text:"Housekeeping", value:"housekeeping" }
]

class BookingModal extends React.Component {

    state = {
        bookings: this.props.bookings,
        email: null,
        name: null,
        address: null,
        bookingType: null,
        bookingData: null,
        bookingTime: null,
    }

    handleSubmitBooking = e => {
        e.preventDefault()

    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return (
            <div>
                <Modal trigger={<Button id="bookingButton">Create Booking</Button>}>
                    <Modal.Header>Create booking</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Group>
                                <Form.Input onChange={this.handleChange} name="name" value={this.state.name} id="input" label="Name" width={8} required />
                                <Form.Select onChange={this.handleChange} name="bookingType" value={this.state.bookingType} options={options} label="Booking type" width={8} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="Email" width={8} required />
                                <Form.Input label="Booking Date" width={8} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="Street Address" width={8} required />
                                <Form.Input label="Booking Time" width={8} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="City" width={8} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="State" width={4} required />
                                <Form.Input label="Zip code" width={4} required />
                            </Form.Group>
                        </Form>
                        <div style={{ textAlign: "right" }}><Button id="bookingButton">Create booking</Button></div>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default BookingModal;