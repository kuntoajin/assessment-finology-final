import GoogleMapReact from 'google-map-react'

const ContactUs = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>
    const data = {
        center: {
            lat: 3.140853,
            lng: 101.693207
          },
          zoom: 11
    }

    return (
        <div className="contact__us">
            <div className="title">
                <h2>Contact Us</h2>
            </div>
            <div className="form__map">
                <div className="form">
                    <form>
                        <div className="name">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Enter your name"/>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Enter your email"/>
                        </div>
                        <div className="subject">
                            <label htmlFor="subject" placeholder="subject">Subject</label>
                            <select>
                                <option value="" disabled>-</option>
                                <option value="What do you think?">What do you think?</option>
                            </select>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message here"></textarea>
                        </div>
                        <div className="button">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div className="map">
                    <div style={{ height: '49vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyD34NGBcdSI953a72Q9E7NRiKkDBBoH9g0' }}
                            defaultCenter={data.center}
                            defaultZoom={data.zoom}
                            >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs