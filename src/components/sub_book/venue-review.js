import React, {useState} from "react";
import {Scheduler} from "@aldabil/react-scheduler";
import {EVENTS} from "../../events";
import AuthService from "../../services/auth/auth_service";

const VenueReview = ({d, goBack}) => {

    console.log(d.id)
    const [vv, ccc] = useState(d.id)




     const currentDate = new Date();


const handleConfirm = async (event, action) => {
    console.log(event, action);
    if (action === "edit") {
      /** PUT event to remote DB */
    } else if (action === "create") {
      /**POST event to remote DB */


     const eventData = {
      title: event.title,
      start: event.start,
      end: event.end,
          venue:vv
    };


    AuthService.postschedule(eventData)
      .then(response => {
        console.log("Event created:", response.data);

        // Handle any additional logic after the event is successfully created
      })

    }
    /**
     * Make sure to return 4 mandatory fields:
     * event_id: string|number
     * title: string
     * start: Date|string
     * end: Date|string
     * ....extra other fields depend on your custom fields/editor properties
     */
    // Simulate http request: return added/edited event
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          ...event,
          event_id: event.event_id || Math.random()
        });
      }, 3000);
    });
  };



const handleDelete = async (deletedId) => {
    console.log(deletedId)
    // Simulate http request: return the deleted id
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 3000);
    });
  };


 /*const fetchRemote = async (query) => {
    console.log("Query: ", query);
    const queryParams = parseQuery(query);
    let startDate = new Date(queryParams.start).toISOString();
    let endDate = new Date(queryParams.end).toISOString();
    const newQuery = `?start=${startDate}&end=${endDate}`;
    console.log(newQuery);
    /!**Simulate fetchin remote data *!/
    return new Promise((res) => {
      setTimeout(() => {
        res(EVENTS);
      }, 3000);
    });
  };*/


 window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
  // Show an alert when the user clicks the back button
  /*alert("Your click browser back button");*/
  goBack()

  // You can also redirect the user to a specific page if needed
  // window.location.href = "/your-custom-page";
};


    return (
       /* <div>
            {d}
             <div className="p-4 border-2  border-gray-200 border-dashed rounded-lg dark:border-gray-900">


                  <Scheduler
      view="week"
      events={EVENTS}
      onConfirm={handleConfirm}
       onDelete={handleDelete}
      editable={false}

       /!*remoteEvents={fetchRemote}*!/

       /!*week={{
        weekDays: [0, 1, 2, 3, 4, 5, 6],
        weekStartOn: 6,
        startHour: 8,
        endHour: 19,
        step: 30
      }}*!/

       week={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 1,
            startHour: 8,
            endHour: 20,
            step: 30,

          }}



      selectedDate={currentDate} // Use the current date and time
    />


              </div>
        </div>*/
        <div>
  {/*{d}*/}

  <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg">

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
      <span className={'bx bx-plus text-2xl'}></span>
    </div>
  </div>



  <div className="mt-6">
    <h2 className="text-2xl font-semibold text-gray-800">Venue Schedule</h2>
  </div>



    <Scheduler
      view="week"
      events={EVENTS}
      onConfirm={handleConfirm}
      onDelete={handleDelete}
      editable={false}
      week={{
        weekDays: [0, 1, 2, 3, 4, 5, 6],
        weekStartOn: 1,
        startHour: d.startHour,
        endHour: d.endHour,
        step: 30,
      }}
      selectedDate={currentDate} // Use the current date and time
    />
  </div>
</div>

    )
}
export default VenueReview