import React, {useState} from "react";
import AuthService from "../../services/auth/auth_service";

const Profile = () => {


     const [showModal, setShowModal] = useState(false);

const [formData, setFormData] = useState({
    password: '',
    repeat_password: '',

  });
     const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
     console.log(e.target.name +' '+ e.target.value)
  };



const changePassword = () => {
  const { password, repeat_password } = formData;

  if (password.trim() === '' || repeat_password.trim() === '') {
    alert("Please enter a password in both fields.");
    return;
  }

  if (password.length < 4) {
    alert("Password must be at least 4 characters long.");
    return;
  }

  if (password === repeat_password) {
    // Passwords match, it's not empty, and it meets the minimum length requirement
    AuthService.passwordChange({password: password}).then(response => {
      console.log(response.data)

        if (response.data.message = 'Password updated successfully.'){
             alert(response.data.message)
            setShowModal(false)
        } else if (response.data.message = 'Invalid request.'){
            alert('There is problem while updating password try again')
        }
    });
  } else {
    alert("Passwords do not match");
  }
};



    return (
        <div>

            <div className="flex items-center h-10 intro-y">
                            <h2 className="mr-5 mt-14 text-lg font-medium truncate">Profile</h2>
                        </div>

            <div className="mx-20 grid">

                <div className="flex">
    <span className="my-10 mx-auto text-center font-bold">
      <span target="_blank" className="text-blue-600">
          My profile </span>
    </span>
                </div>


                <div className="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">

                    <div className="relative">

                        <img className="w-40 h-40 rounded-md object-cover"
                             src="https://www.gravatar.com/avatar/?d=mp"
                             alt="User"/>


                        <div
                            className="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
                            title="User is online"></div>
                    </div>


                    <div className="flex flex-col px-6 cursor-pointer">

                        <div className="flex h-8 flex-row">

                            <a href="https://github.com/EgoistDeveloper/" target="_blank">
                                <h2 className="text-lg font-semibold">{sessionStorage.getItem('username')}</h2>
                            </a>



                        </div>


                        <div className="my-2 flex flex-row space-x-2">

                            <div className="flex flex-row">


                                <div className="text-xs text-gray-400/80 hover:text-gray-400">
                                    {sessionStorage.getItem('first_name')} {sessionStorage.getItem('last_name')}

                                </div>
                            </div>


                            <div className="flex flex-row">


                                <div className="text-xs text-gray-400/80 hover:text-gray-400"></div>
                            </div>


                            <div className="flex flex-row">


                                <div className="text-xs text-gray-400/80 hover:text-gray-400">{sessionStorage.getItem('email')}</div>
                            </div>
                        </div>


                        <div className="mt-2 flex flex-row items-center space-x-5">

                            <span
                               className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                                <div className="flex flex-row items-center justify-center">


                                    <span className="font-bold text-gray-600"> {sessionStorage.getItem('first_name')} </span>
                                </div>

                                <div className="mt-2 text-sm text-gray-400">First name</div>
                            </span>


                            <span
                               className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                                <div className="flex flex-row items-center justify-center">

                                    <span className="font-bold text-gray-600"> {sessionStorage.getItem('last_name')} </span>
                                </div>

                                <div className="mt-2 text-sm text-gray-400">Last name</div>
                            </span>


                            <span
                               className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                                <div className="flex flex-row items-center justify-center">

                                    <span className="font-bold text-gray-600"> {sessionStorage.getItem('email')} </span>
                                </div>

                                <div className="mt-2 text-sm text-gray-400">Email</div>
                            </span>
                        </div>
                    </div>


                    <div className="w-100 flex flex-grow flex-col items-end justify-start">
                        <div className="flex flex-row space-x-3">

                            <button onClick={()=>setShowModal(true)}
                                className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">
                                change password
                            </button>


                            <button className="flex rounded-md bg-gray-100 py-2 px-1 text-white
        transition-all duration-150 ease-in-out hover:bg-gray-200">

                            </button>
                        </div>
                    </div>
                </div>
            </div>








            {showModal ? (
  <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-4xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="relative p-6 flex-auto">
            <div className="mb-3 pt-0 flex flex-wrap">
              <div className="w-full md:w-2/2 px-4 mb-4 md:mb-0">
                <label htmlFor="title" className="block text-sm font-medium text-slate-600 mb-1">
                  Password
                </label>
                <input

                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  placeholder="*********"
                  className="w-full px-4 py-3 placeholder-gray-500 text-slate-600 relative bg-white rounded text-base border border-blue-gray-500 shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>

              <div className="mb-3 pt-0 flex flex-wrap">
              <div className="w-full md:w-2/2 px-4 mb-4 md:mb-0">
                <label htmlFor="title" className="block text-sm font-medium text-slate-600 mb-1">
                  Repeat Password
                </label>
                <input

                  onChange={handleInputChange}
                  type="password"
                  name="repeat_password"
                  placeholder="*********"
                  className="w-full px-4 py-3 placeholder-gray-500 text-slate-600 relative bg-white rounded text-base border border-blue-gray-500 shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>


          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >

              Close
            </button>
            <button
              className="bg-blue-600  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => changePassword()}
            >

               <button variant="small" className="text-xs font-medium text-blue-white-600">
                    Change
               </button>

            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
) : null}











        </div>
    )
}
export default Profile