/*
import React, { useState } from 'react';

const EditEventForm = ({ isOpen, closeForm, onFormSubmit, selectedEvent }) => {
  const [formData, setFormData] = useState({
    title: selectedEvent.title,
    // You can add other event details here
  });

  const handleSubmit = () => {
    onFormSubmit({ ...selectedEvent, ...formData });
    closeForm();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
    >

      {/!* Rest of your code for the edit form *!/}
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Edit Event
            </h3>
            <div className="mt-4">
              <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
                Event Title
              </label>
              <input
                type="text"
                id="eventTitle"
                name="eventTitle"
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            {/!* Add other form fields for event details *!/}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          onClick={handleSubmit}
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
        >
          Save Event
        </button>
        <button
          onClick={closeForm}
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover-bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditEventForm;
*/

import React, { useState } from 'react';

const EditEventForm = ({ isOpen, closeForm, onFormSubmit, selectedEvent }) => {

  const [formData, setFormData] = useState({
    title: selectedEvent.title,
    start: selectedEvent.start,
    end: selectedEvent.end,
    id: selectedEvent.id,
    user: selectedEvent.user,

    // You can add other event details here
  });

  const handleSubmit = () => {
    onFormSubmit({ ...selectedEvent, ...formData });
    console.log(formData)
    closeForm();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative bg-white rounded-lg w-full max-w-md p-6 sm:p-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Event </h3>
        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
              Event Title
            </label>
            <input
              type="text"
              id="eventTitle"
              name="eventTitle"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
              Event Start
            </label>
          <input
              type="text"
              id="eventStart"
              name="eventStart"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={formData.start}
              onChange={(e) => setFormData({ ...formData, start: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
              Event End
            </label>
          <input
              type="text"
              id="eventEnd"
              name="eventEnd"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={formData.end}
              onChange={(e) => setFormData({ ...formData, start: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
              Event id
            </label>
          <input
              type="text"
              id="id"
              name="id"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            />
          </div>

          {/* Add other form fields for event details */}
        </div>
        <div className="mt-6 flex justify-end">
          {formData.user == sessionStorage.getItem('user_id') || sessionStorage.getItem('role') === 'Admin' ? (
  <button
    onClick={handleSubmit}
    className="px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
  >
    Save Event
  </button>
) : (
  <div></div>
)}

          <button
            onClick={closeForm}
            className="ml-3 px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventForm;
