import React, { useState } from "react";
import Axios from "axios";
import "../Form.css";
import { BiCamera } from "react-icons/bi";

function Form({ setData, data }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [tickets, setTickets] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [time, setTime] = useState("");
  const [speakers, setSpeakers] = useState("");

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dakiak4mc/image/upload",
      formData
    ).then((res) => {
      console.log(res.data.url);
      setSelectedFile(res.data.url);
    });
  };

  const addEvent = () => {
    Axios.post("http://localhost:8002/events", {
      name: eventName,
      image: selectedFile,
      tickets: tickets,
      description: description,
      date: date,
      venue: venue,
      time: time,
      speakers: speakers,
    }).then((res) => {
      setData([...data, res.data]);
    });
  };

  return (
    <div className="form">
    <div className="signup-container">
      <div className="left-container">
        <h1>TECH ME OUT</h1>
        <div className="puppy">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="right-container">
        <header>
          <h1>Yay, puppies! Ensure your pup gets the best care! </h1>
          <div className="set">
            <div className="pets-name">
              <label for="events-name">Name of the Event</label>
              <input
                id="events-name"
                placeholder="Event Name"
                type="text"
                value={eventName}
                onChange={(e) => {
                  setEventName(e.target.value);
                }}
              ></input>
            </div>
            <div className="pets-photo">
              <button id="pets-upload">
                <BiCamera />
                <input
                  type="file"
                  id="file-selector"
                  onChange={(e) => {
                    uploadImage(e.target.files);
                  }}
                />
              </button>
              <label for="pets-upload">Upload a photo</label>
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label for="events-venue">Venue</label>
              <input
                id="events-venue"
                placeholder="Venue..."
                type="text"
                value={venue}
                onChange={(e) => {
                  setVenue(e.target.value);
                }}
              ></input>
            </div>
            <div className="pets-birthday">
              <label for="pets-birthday">Event Date</label>
              <input
                id="pets-birthday"
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label for="events-venue">Tickets Available</label>
              <input
                id="events-tickets"
                placeholder="Tickets Available..."
                type="number"
                value={tickets}
                onChange={(e) => {
                  setTickets(e.target.value);
                }}
              ></input>
            </div>
            <div className="pets-birthday">
              <label for="pets-birthday">Time the Event Starts</label>
              <input
                id="pets-birthday"
                placeholder="Time..."
                type="text"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="pets-weight">
            <label for="pet-weight-0-25">Speakers at the event</label>
            <div className="radio-container">
              <input
                value={speakers}
                placeholder="Add the speakers for this event"
                onChange={(e) => {
                  setSpeakers(e.target.value);
                }}
                type="text"
              />
            </div>
            <label for="pet-weight-0-25">Event description</label>
            <div className="radio-container">
              <input
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Event Description"
              />
            </div>
          </div>
        </header>
        <footer>
          <div className="set">
            <button id="back">Back</button>
            <button id="next" onClick={addEvent}>
              Next
            </button>
          </div>
        </footer>
      </div>
    </div>
  </div>
  );
}

export default Form;
