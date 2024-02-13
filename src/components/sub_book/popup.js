import React, { useState } from 'react';
import AuthService from "../../services/auth/auth_service";

const Popup = ({ isOpen, closePopup, onSubmit, selectedSlot }) => {
  const [event, setEvent] = useState({ title: '', start: selectedSlot?.start, end: selectedSlot?.end });

  const handleSubmit = () => {
 onSubmit(event);



// Include these ISO strings in your form data






    closePopup();
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
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  {selectedSlot ? 'Add Event' : 'Edit Event'}
                </h3>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Event Title"
                    className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={event.title}
                    onChange={(e) => setEvent({ ...event, title: e.target.value })}
                  />
                </div>
                {selectedSlot && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Selected Date and Time:</p>
                    <p className="text-lg font-medium text-gray-900">
                      {selectedSlot.start.toLocaleDateString()}{' '}
                      {selectedSlot.start.toLocaleTimeString()} -{' '}
                      {selectedSlot.end.toLocaleTimeString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSubmit}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              onClick={closePopup}
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

export default Popup;
