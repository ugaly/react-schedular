/*
import React, { useState } from 'react';

const AddEventForm = ({ isOpen, closeForm, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
  });

  const handleSubmit = () => {
    onFormSubmit(formData);
    closeForm();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      {/!* ... (The rest of the modal code remains the same) *!/}
      <div className="mt-4">
        <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
          Event Title
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="eventTitle"
            name="eventTitle"
            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
          Event Date
        </label>
        <div className="mt-1">
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="eventStartTime" className="block text-sm font-medium text-gray-700">
          Event Start Time
        </label>
        <div className="mt-1">
          <input
            type="time"
            id="eventStartTime"
            name="eventStartTime"
            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="eventEndTime" className="block text-sm font-medium text-gray-700">
          Event End Time
        </label>
        <div className="mt-1">
          <input
            type="time"
            id="eventEndTime"
            name="eventEndTime"
            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
        >
          Save Event
        </button>
      </div>
    </div>
  );
};

export default AddEventForm;
*/

import React, { useState } from 'react';

const AddEventForm = ({ isOpen, closeForm, onFormSubmit }) => {
   const [formData, setFormData] = useState({
    title: '',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
  });

  const handleSubmit = () => {
    onFormSubmit(formData);
    closeForm();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Add Event
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
                <div className="mt-4">
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="eventStartTime" className="block text-sm font-medium text-gray-700">
                    Event Start Time
                  </label>
                  <input
                    type="time"
                    id="eventStartTime"
                    name="eventStartTime"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="eventEndTime" className="block text-sm font-medium text-gray-700">
                    Event End Time
                  </label>
                  <input
                    type="time"
                    id="eventEndTime"
                    name="eventEndTime"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  />
                </div>
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
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventForm;
