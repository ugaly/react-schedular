
import React, {useState, useEffect} from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import {EVENTS} from "../../events";
import AuthService from "../../services/auth/auth_service";
import { Alert } from "@mui/material";

const VenueReview = ({d, goBack}) => {
//   const [events, setEvents] = useState([])
//   const [fetching, setFetching] = useState(true)

//   const data_obj = []

//   useEffect(() => {
//   AuthService.loadBookingByVenue(d.id).then((response) => {
//     console.log('Mwambuzi', response.data)
//     response.data.map((r) => {
//       const new_obj = {
//         event_id: r['id'],
//         title : r['title'],
//         start: new Date(r['start'].replace("-", " ").slice(0,16).replace("T", " ").replace("-", " ")),
//         end: new Date(r['end'].replace("-", " ").slice(0,16).replace("T", " ").replace("-", " ")),
//         draggable: false,
//         //color: r['user']==sessionStorage.getItem('user_id')?'#1E8449':'#E74C3C',
//         //deletable: r['user']==sessionStorage.getItem('user_id')?true: sessionStorage.getItem('role')=='Admin'?true:sessionStorage.getItem('role')=='Venue Manager'?true:false,
//         //editable:  r['user']==sessionStorage.getItem('user_id')?true: sessionStorage.getItem('role')=='Admin'?true:sessionStorage.getItem('role')=='Venue Manager'?true:false,

//       }
//       data_obj.push(new_obj)
//       setFetching(false)
//     })
   
//     console.log(EVENTS)
//     console.log("--------------------")
//     console.log(data_obj)
//     setEvents(data_obj)
    
//     //console.log(events)
//     // const formattedEvents = response.data.map((event) => {
//     //   // Create Date objects in UTC
//     //   const startDate = new Date(event.start);
//     //   const endDate = new Date(event.end);

//     //   // Adjust to Nairobi Time (GMT+3)
//     //   startDate.setMinutes(startDate.getMinutes() - startDate.getTimezoneOffset() + 0); // Adjust for Nairobi Time
//     //   endDate.setMinutes(endDate.getMinutes() - endDate.getTimezoneOffset() + 0); // Adjust for Nairobi Time

//     //   return {
//     //     ...event,
//     //     start: startDate,
//     //     end: endDate,
//     //   };
//     // });

//   });
// }, [fetching]);

const [events, setEvents] = useState([]);
const [fetching, setFetching] = useState(true);

useEffect(() => {
  const currentTime = new Date(); 
  AuthService.loadBookingByVenue(d.id).then((response) => {

   
    const data_obj = response.data.map((r) => {

      const eventStartTime = new Date(r.start);
      const eventEndTime = new Date(r.end);
      const isEventInPast = currentTime > eventEndTime;
      return {

        event_id: r.id,
        title: r.title,
        start: eventStartTime,
        end: eventEndTime,
        draggable: false,
        disabled: isEventInPast,

        // event_id: r.id,
        // title: r.title,
        // start: new Date(r.start),
        // end: new Date(r.end),
        // draggable: false,
        // disabled: true,
        color: r.user == sessionStorage.getItem('user_id') ? '#1E8449' : '#E74C3C',
        deletable: r.user==sessionStorage.getItem('user_id')?true: sessionStorage.getItem('role')=='Admin'?true:sessionStorage.getItem('role')=='Venue Manager'?true:false,
        editable: r.user==sessionStorage.getItem('user_id')?true: sessionStorage.getItem('role')=='Admin'?true:sessionStorage.getItem('role')=='Venue Manager'?true:false,
      };
    });
    setEvents(data_obj);
    setFetching(false);
  });
}, [d.id]);






  console.log(d.id)
  const [vv, ccc] = useState(d.id)
  const currentDate = new Date();

  // const handleConfirm = async (event, action) => {

  //   if (action === "edit") {

  //     const bookData = {
  //       title: event.title,
  //       start: event.start,
  //       end: event.end,
  //     };
  //     console.log('CLICKEDDDDDDDDDDDDDDD', event)
  //     AuthService.updateBooking(event.event_id, bookData).then(r => {
  //         console.log(r.data)
  //         alert(r.data.message)
  //     })

  //   } else if (action === "create") {

      
  //     const eventData = {
  //       title: event.title,
  //       start: event.start,
  //       end: event.end,
  //       venue:d.id
  //     };

  //     console.log('TIMEEEEE', event.end)
  //     AuthService.postschedule(eventData).then(response => {
  //       console.log("Event created:", response.data);
  //       alert(response.data.message)
        
    
  //     })

  //   }
  
    
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res({
  //         ...event,
  //         event_id: event.event_id || Math.random()
  //       });
  //     }, 1000);
  //   });
  // };



  const handleConfirm = async (event, action) => {
    if (action === "edit") {
      const bookData = {
        title: event.title,
        start: event.start,
        end: event.end,
      };
      console.log('CLICKEDDDDDDDDDDDDDDD', event);
      // AuthService.updateBooking(event.event_id, bookData).then((response) => {
      //   console.log(response.data);
      //   alert(response.data.message);
      //   // Load updated events after editing
      //   loadEvents();
      // });


      AuthService.updateBooking(event.event_id, bookData).then((response) => {
        if (response.status === 201) {
          console.log("Event created:", response.data);
          alert(response.data.message);
          // Load updated events after creating
          loadEvents();
      } else if(response.status === 200){

        alert(response.data.message);
        // Load updated events after creating
        loadEvents();

      } else {
          console.error("Event creation failed:", response.data.error);
          // Display the error message to the user
          // alert(response.data.error);
      }
    }).catch(error => {
      console.error("An error occurred:", error);
      if (error.response && error.response.data && error.response.data.error) {
          // Display the error message to the user
          // alert(error.response.data.error);
      } else {
          // If the error response is not structured as expected, display a generic error message
          // alert("An error occurred while making the request.");
          alert("Booking Update failed, booking might be overwrap with other event please choose onother time.");
          loadEvents();
      }
  });
    



    } else if (action === "create") {
      const eventData = {
        title: event.title,
        start: event.start,
        end: event.end,
        venue: d.id,
      };
  
      console.log('TIMEEEEE', event.end);
      // AuthService.postschedule(eventData).then(response => {
      //   console.log("Event created:", response.data);
        
      //   // Load updated events after creating
      //   loadEvents();
      //   // alert(response.data.message);
      // })

      AuthService.postschedule(eventData).then(response => {
        if (response.status === 201) {
            console.log("Event created:", response.data);
            
            // Load updated events after creating
            loadEvents();
        } else {
            console.error("Event creation failed:", response.data.error);
            // Display the error message to the user
            alert(response.data.error);
        }
    }).catch(error => {
        console.error("An error occurred:", error);
        if (error.response && error.response.data && error.response.data.error) {
            // Display the error message to the user
            alert(error.response.data.error);
        } else {
            // If the error response is not structured as expected, display a generic error message
            // alert("An error occurred while making the request.");
            alert("Booking might be overwrap with other please choose time.");
            loadEvents();
        }
    });
    
    
    
    
    }
  
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(event);
      }, 1000);
    });
  };


  const loadEvents = () => {
    const currentTime = new Date();
    AuthService.loadBookingByVenue(d.id).then((response) => {
      setFetching(true);
      const data_obj = response.data.map((r) => {
        const eventStartTime = new Date(r.start);
        const eventEndTime = new Date(r.end);
        const isEventInPast = currentTime > eventEndTime;
        return {
          event_id: r.id,
          title: r.title,
          start: eventStartTime,
          end: eventEndTime,
          draggable: false,
          disabled: isEventInPast,
          color: r.user == sessionStorage.getItem('user_id') ? '#1E8449' : '#E74C3C',
          deletable: r.user == sessionStorage.getItem('user_id') ? true : 
                      sessionStorage.getItem('role') == 'Admin' ? true :
                      sessionStorage.getItem('role') == 'Venue Manager' ? true : false,
          editable: r.user == sessionStorage.getItem('user_id') ? true :
                     sessionStorage.getItem('role') == 'Admin' ? true :
                     sessionStorage.getItem('role') == 'Venue Manager' ? true : false,
        };
      });
      setEvents(data_obj);
    
      setFetching(false);
    });
  };
  



  
  const handleDelete = async (deletedId) => {
      console.log(deletedId)
      // Simulate http request: return the deleted id
      return new Promise((res, rej) => {

        AuthService.deleteBooking(deletedId).then(r=> {
          setTimeout(() => {
            res(deletedId);
            alert('Booking cancelled')
        }, 3000);
        })
       
    });
  };


window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
  goBack();
};


const fetchRemote = async (query) => {
  console.log({ query });
  
  // Simulate fetching remote data with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 1000);
  });
};



return (
    <div>
        <div className="p-4 border-2 border-gray-300 bg-white border-dashed rounded-lg">

        <div className="mb-2">
          <h2 className="text-xl font-semibold text-gray-800">Venue Details</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="text-gray-600">
            <p className="text-sm font-semibold">Venue Name:</p>
            <p className="text-sm font-semibold text-gray-800">{d.name} </p>
          </div>

          <div className="text-gray-600">
            <p className="text-sm font-semibold">Location:</p>
            <p className="text-sm font-semibold text-gray-800">{d.location}</p>
          </div>


            <div className="text-gray-600">
            <p className="text-sm font-semibold">Capacity:</p>
            <p className="text-sm font-semibold text-gray-800">{d.capacity}</p>
          </div>

          <div className="text-gray-600">
            <p className="text-sm font-semibold">Hours:</p>
            <p className="text-sm font-semibold text-gray-800">{d.startHour}:00am - {d.endHour}:00pm</p>
          </div>

            <div className="text-gray-600">
            {/* <span className={'bx bx-plus text-2xl'}></span> */}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Venue Schedule</h2>
        </div>

        <div className="bg-white">
        {fetching ?(
          <><p>Fetching</p></>
        ):(
          <>
          <Scheduler
             getRemoteEvents={fetchRemote}
            view="week"
            deletable={false}
            // deletable={sessionStorage.getItem('role')=='User'?false:true}
            draggable={false}
            // events={data_obj}
            // events={events}
            onConfirm={handleConfirm}
            onDelete={handleDelete}
            week={{
              weekDays: [0, 1, 2, 3, 4, 5, 6],
              weekStartOn: 1,
              startHour: d.startHour,
              endHour: d.endHour,
              step: 60,
    
              // navigation: true,
              // disableGoToDay: false

              cellRenderer: ({ height, start, onClick, ...props }) => {
          // Fake some condition up
          const currentTime = new Date(); // Get the current time
          const cellTime = start;
          const isCellInPast = cellTime < currentTime;
    
          const disabled = isCellInPast;
          const restProps = disabled ? {} : props;
          return (
            <button
              style={{
                height: "100%",
                background: disabled ? "#ffffff" : "transparent",
                cursor: disabled ? "not-allowed" : "pointer"
              }}
              onClick={() => {
                if (disabled) {
                  return alert("Time is in the past and cannot place or modify booking");
                }
                onClick();
              }}
              disableRipple={disabled}
              // disabled={disabled}
              {...restProps}
            ></button>
          );
        }





            }}
            selectedDate={currentDate} 

            // customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
            // viewerExtraComponent={(fields, event) => {
            //   return (
            //     <div>
            //       <p >Useful to render custom fields...</p>
            //       <p>Description: {event.description || "Nothing..."}</p>
            //     </div>
            //   );
            // }}

      //       fields={[
      //   {
      //     name: "user_id",
      //     type: "select",
      //     // Should provide options with type:"select"
      //     options: [
      //       { id: 1, text: "John", value: 1 },
      //       { id: 2, text: "Mark", value: 2 }
      //     ],
      //     config: { label: "User", required: true, errMsg: "Plz Select User" }
      //   },
      //   {
      //     name: "Description",
      //     type: "input",
      //     default: "Default Value...",
      //     config: { label: "Details", multiline: true, rows: 4 }
      //   },
      //   {
      //     name: "anotherdate",
      //     type: "date",
      //     config: {
      //       label: "Other Date",
      //       md: 6,
      //       modalVariant: "dialog",
      //       type: "datetime"
      //     }
      //   }
      // ]}


          />
          </>
        )}
        </div>

          
        </div>
</div>

)}
export default VenueReview



/*

import React, { useState } from "react";

import { Scheduler } from "@aldabil/react-scheduler";

import {EVENTS} from "../../events";
import {EventActions, ProcessedEvent} from "@aldabil/react-scheduler/dist/Scheduler";
import { alpha } from '@material-ui/core/styles'



function CustomEditor({ scheduler }) {
  const event = scheduler.edited;

  // Make your own form/state
  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || "",
  });
  const [error, setError] = useState("");

  const handleChange = (value, name) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };




  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <p>Load your custom form/fields</p>
        <input
          label="Title"
          value={state.title}
          onChange={(e) => handleChange(e.target.value, "title")}
          error={!!error}
          helperText={error}
          fullWidth
        />
        <input
          label="Description"
          value={state.description}
          onChange={(e) => handleChange(e.target.value, "description")}
          fullWidth
        />
      </div>
      <div>
        <button onClick={scheduler.close}>Cancel</button>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
}

function VenueReview({d, goBack}) {


     window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {

  goBack()

  // You can also redirect the user to a specific page if needed
  // window.location.href = "/your-custom-page";
};



 const fetchRemote = async (query: ViewEvent): Promise<ProcessedEvent[]> => {
    console.log({ query });
    /!**Simulate fetchin remote data *!/
    return new Promise((res) => {
      setTimeout(() => {
        res(EVENTS);
      }, 3000);
    });
  };


const handleConfirm = async (
    event: ProcessedEvent,
    action: EventActions
  ): Promise<ProcessedEvent> => {
    console.log("handleConfirm =", action, event.title);

    /!**
     * Make sure to return 4 mandatory fields:
     * event_id: string|number
     * title: string
     * start: Date|string
     * end: Date|string
     * ....extra other fields depend on your custom fields/editor properties
     *!/
    // Simulate http request: return added/edited event
    return new Promise((res, rej) => {
      if (action === "edit") {
        /!** PUT event to remote DB *!/
      } else if (action === "create") {
        /!**POST event to remote DB *!/
      }

      const isFail = Math.random() > 0.6;
      // Make it slow just for testing
      setTimeout(() => {
        if (isFail) {
          rej("Ops... Faild");
        } else {
          res({
            ...event,
            event_id: event.event_id || Math.random()
          });
        }
      }, 1000);
    });
  };




  return (
    <div className={'bg-white p-4 border-2  border-gray-200 border-dashed rounded-lg border-gray-900'}>
        <Scheduler
         getRemoteEvents={fetchRemote}
         events={EVENTS}
onConfirm={handleConfirm}
         fields={
             {
                 name: "description",
                 type: "input",
                 config: {
                     label: "Description", required: true, min: 3, email: true, variant: "outlined"
                 }
             }
         }

      week={{
        weekDays: [0, 1, 2, 3, 4, 5, 6],
        weekStartOn: 1,
        startHour: d.startHour,
        endHour: d.endHour,
         step: 60,

      }}
      /!*customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}*!/
      viewerExtraComponent={(fields, event) => {
        return (
          <div>
            <p >Useful to render custom fields...</p>
            <p>Description: {event.description || "Nothing..."}</p>
          </div>
        );
      }}
    />
    </div>


  );
}

export default VenueReview;
*/

/*

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const VenueReview = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 9, 15, 10, 0),
      end: new Date(2023, 9, 15, 12, 0),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 9, 16, 14, 0),
      end: new Date(2023, 9, 16, 16, 0),
    },
    // Add more events as needed
  ];

     const getMinAndMaxTime = date => {
    const minTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0); // 8:00 am
    const maxTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0); // 8:00 pm
    return { min: minTime, max: maxTime };
  };

  return (
    <div>
      <h2>My Scheduler</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 900 }}
        defaultView="week"
         min={getMinAndMaxTime(new Date()).min}
        max={getMinAndMaxTime(new Date()).max}
      />
    </div>
  );
};

export default VenueReview;
*/






// import React, {useEffect, useState} from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';
// import Popup from "./popup";
// import AddEventForm from "./AddEventForm";
// import EditEventForm from "./EditEventForm";
// import AuthService from "../../services/auth/auth_service";


// const localizer = momentLocalizer(moment);

// const VenueReview = ({d, goBack}) => {
//   const [events, setEvents] = useState([
//     // {
//     //   id: 1,
//     //   created_by: 'Joseph Mwalwama',
//     //   title: 'Event 1',
//     //   start: new Date(2023, 9, 15, 10, 0),
//     //   end: new Date(2023, 9, 15, 12, 0),

//     // },
//     // {
//     //   id: 2,
//     //   title: 'Event 2',
//     //   created_by: 'Allen Mwalwama',
//     //   start: new Date(2023, 9, 16, 14, 0),
//     //   end: new Date(2023, 9, 16, 16, 0),
//     // },
//     // Add more events as needed
//   ]);

// useEffect(() => {
//   AuthService.loadBookingByVenue(d.id).then((response) => {
//     const formattedEvents = response.data.map((event) => {
//       // Create Date objects in UTC
//       const startDate = new Date(event.start);
//       const endDate = new Date(event.end);

//       // Adjust to Nairobi Time (GMT+3)
//       startDate.setMinutes(startDate.getMinutes() - startDate.getTimezoneOffset() + 0); // Adjust for Nairobi Time
//       endDate.setMinutes(endDate.getMinutes() - endDate.getTimezoneOffset() + 0); // Adjust for Nairobi Time

//       return {
//         ...event,
//         start: startDate,
//         end: endDate,
//       };
//     });

//     console.log('Booking by venue', formattedEvents);
//     setEvents(formattedEvents);
//   });
// }, []);


//    window.history.pushState(null, null, window.location.href);
// window.onpopstate = function () {
//   // Show an alert when the user clicks the back button

//   goBack()

//   // You can also redirect the user to a specific page if needed
//   // window.location.href = "/your-custom-page";
// };


//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isEventPopupOpen, setEventPopupOpen] = useState(false);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [isAddFormOpen, setAddFormOpen] = useState(false);
//   const [isEditFormOpen, setEditFormOpen] = useState(false); // State for the edit form


//   const openEventPopup = (slot) => {
//     setSelectedSlot(slot);
//     setEventPopupOpen(true);
//   };

//   const openAddForm = () => {
//     setAddFormOpen(true);
//   };

//   const closeEventPopup = () => {
//     setSelectedSlot(null);
//     setEventPopupOpen(false);
//   };

//   const closeAddForm = () => {
//     setAddFormOpen(false);
//   };

//   const handleEventFormSubmit = (eventData) => {

//   if (selectedSlot) {
//     const newEvent = {
//       title: eventData.title,
//       start: selectedSlot.start,
//       end: selectedSlot.end,
//     };

//     // Check for overlapping events
//     const isOverlapping = events.some((event) =>
//       (event.start < newEvent.start && newEvent.start < event.end) ||
//       (event.start < newEvent.end && newEvent.end < event.end)
//     );

//     if (!isOverlapping) {
//       setEvents([...events, newEvent]);
//       console.log(newEvent)

//         const startISOString =  newEvent.start.toISOString().split('.')[0]; // Remove milliseconds and 'Z'
// const endISOString = newEvent.end.toISOString().split('.')[0]; // Remove milliseconds and 'Z'

//        console.log('hhhhhmmmm', newEvent)
//     const eventData = {
//       title: newEvent.title,
//       start: startISOString,
//       end: endISOString,
//       venue: d.id,
//       user: sessionStorage.getItem('user_id')
//     };
//      AuthService.postschedule(eventData)
//       .then(response => {
//         console.log("Event created:", response.data);




//         AuthService.loadBookingByVenue(d.id).then((response) => {
//     const formattedEvents = response.data.map((event) => {
//       // Create Date objects in UTC
//       const startDate = new Date(event.start);
//       const endDate = new Date(event.end);

//       // Adjust to Nairobi Time (GMT+3)
//       startDate.setMinutes(startDate.getMinutes() - startDate.getTimezoneOffset() + 0); // Adjust for Nairobi Time
//       endDate.setMinutes(endDate.getMinutes() - endDate.getTimezoneOffset() + 0); // Adjust for Nairobi Time

//       return {
//         ...event,
//         start: startDate,
//         end: endDate,
//       };
//     });

//     console.log('Booking by venue', formattedEvents);
//     setEvents(formattedEvents);
//   });


//         alert(response.data.message)
//       })
//         .catch(err=>{
//           console.error('vvvvvvvvvvvvvvvvv', err)
//         })



//     } else {
//       alert("Event overlaps with existing events. Please choose a different time.");
//         return false
//     }
//   }

//   setEventPopupOpen(false);
// };


//   const handleAddFormSubmit = (formData) => {

//     const { title, date, startTime, endTime } = formData;
//     const start = new Date(date);
//     start.setHours(startTime.getHours());
//     start.setMinutes(startTime.getMinutes());

//     const end = new Date(date);
//     end.setHours(endTime.getHours());
//     end.setMinutes(endTime.getMinutes());

//     const newEvent = {
//       title,
//       start,
//       end,
//     };




//     setEvents([...events, newEvent]);
//     setAddFormOpen(false);
//   };

//     const closeEditForm = () => {
//     setEditFormOpen(false);
//   };

//       const openEditForm = () => {
//     setEditFormOpen(true);
//   };


//        const handleEditFormSubmit = (eventData) => {
//     if (selectedEvent) {
//       // Find the index of the selected event
//       const eventIndex = events.findIndex((event) => event === selectedEvent);
//       if (eventIndex !== -1) {
//         const updatedEvents = [...events];
//         updatedEvents[eventIndex] = eventData;
//         setEvents(updatedEvents);
//         setEditFormOpen(false);
//       }
//     }
//   };


//   const getMinAndMaxTime = date => {
//       const minTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), d.startHour, 0); // 8:00 am
//       const maxTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), d.endHour, 0); // 8:00 pm
//       return { min: minTime, max: maxTime };
//   };



//   const CustomEventComponent = ({ event }) => {
//         const customStyles = {
//         backgroundColor: 'blue',
//         color: 'white',
//         borderRadius: '5px',
//         padding: '4px',
//   };


//   return (
//    <div className="p-2 rounded-md shadow-md bg-blue-500 text-white" style={customStyles}>
//       <div className="text-lg font-semibold">{event.title}</div>
//       <div className="text-sm">{event.user}</div>
//       <div className="text-sm">{event.date}</div>
//       <div className="text-sm">
//         {event.start.toLocaleTimeString()} - {event.end.toLocaleTimeString()}
//       </div>
//       <div className="text-xs mt-2 bg-yellow-500 text-black px-2 py-1 rounded-full">
//         {event.status}
//       </div>
//     </div>
//   );
// };




// const eventStyleGetter = (event) => {
//   const backgroundColor = event.color; 

//   const style = {
//     backgroundColor:'green',
//     color: 'white', 
//     borderRadius: '1px',
//     border: 'none',
//     marginTop:'20px'
//   };

//   return {
//     style,
//   };
// };

//   return (
//     <div>
//       <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg">

//   <div className=" bg-blue-100">
//     <h2 className="text-xl  ml-4 font-semibold text-gray-800">Venue Details</h2>
//   </div>

//   <div className="grid grid-cols-2 mb-3 md:grid-cols-5 bg-blue-100 gap-6">
//     <div className="text-gray-600 ml-6">
//       <p className="text-sm font-semibold">Venue Name:</p>
//       <p className="text-sm font-semibold text-gray-800">{d.name} </p>
//     </div>

//     <div className="text-gray-600">
//       <p className="text-sm font-semibold">Location:</p>
//       <p className="text-sm font-semibold text-gray-800">{d.location}</p>
//     </div>


//        <div className="text-gray-600">
//       <p className="text-sm font-semibold">Capacity:</p>
//       <p className="text-sm font-semibold text-gray-800">{d.capacity}</p>
//     </div>

//     <div className="text-gray-600">
//       <p className="text-sm font-semibold">Hours:</p>
//       <p className="text-sm font-semibold text-gray-800">{d.startHour}:00am - {d.endHour}:00pm</p>
//     </div>

//        <div className="text-gray-600">
//       <span onClick={openAddForm} className={'bx bx-plus text-2xl'}></span>
//     </div>
//   </div>






//     <Calendar
//   localizer={localizer}
//   events={events}
//   startAccessor="start"
//   endAccessor="end"
//   style={{ height: 750, marginTop:'30px' }}
//   defaultView="week"
//   eventPropGetter={eventStyleGetter}
//    min={getMinAndMaxTime(new Date()).min}
//         max={getMinAndMaxTime(new Date()).max}
//   getNow={() => new Date()}
//   selectable
//    onSelectEvent={(event) => {
//     openEditForm();
//     setSelectedEvent(event);
//   }}
//   onSelectSlot={(slot) => {
//     const role = sessionStorage.getItem("role");
//     if (role === "Admin" || role === "User") {
//       openEventPopup(slot);
//     }
//   }}
//   draggableAccessor={(event) => {
//     const role = sessionStorage.getItem("role");
//     if (role === "Admin" || role === "User") {
//       return true;
//     } else {
//       return false;
//     }
//   }}
  
// />



//       {isEventPopupOpen && (
//         <Popup
//           isOpen={isEventPopupOpen}
//           closePopup={closeEventPopup}
//           onSubmit={handleEventFormSubmit}
//           selectedSlot={selectedSlot}
//         />
//       )}

//       {isAddFormOpen && (
//         <AddEventForm
//           isOpen={isAddFormOpen}
//           closeForm={closeAddForm}
//           onFormSubmit={handleAddFormSubmit}
//         />
//       )}

//       {isEditFormOpen && (
//         <EditEventForm
//           isOpen={isEditFormOpen}
//           closeForm={closeEditForm}
//           onFormSubmit={handleEditFormSubmit} // Handler for updating events
//           selectedEvent={selectedEvent} // Pass the selected event to the edit form
//         />
//       )}
//     </div>
//       </div>
//   );
// };

// export default VenueReview;






