import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth/auth_service";


const UserManagement = () => {


      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
       const [showModal, setShowModal] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [data, setData] = useState([]);
  useEffect(()=> {
      AuthService.loadByUsersRoleAndId(0,1).then(response=>{
          console.log(response.data)
          setData(response.data.results)
      })
  }, [])





  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone_no: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
     console.log(e.target.name +' '+ e.target.value)
  };


 const save = () => {

      if (!formData.username || !formData.firstName || !formData.lastName || !formData.email || !formData.phone_no) {
    alert("Please fill in all required fields.");
    return;
  }

     AuthService.createVenueManager(formData).then(r=>{
         console.log(r.data)
         AuthService.loadByUsersRoleAndId(0,1).then(response=>{
             console.log(response.data)
          setData(response.data.results)
             setShowModal(false)

      })
     })
      .catch((error) => {
        console.error("Error saving data1111:", error);
        if (error.response && error.response.data && error.response.data.message) {
          alert("Error saving data: " + error.response.data.message);
        } else {
          alert("Error saving data. User might be exist.");
        }
      });
 }

  const [showModalEdit, setShowModalEdit] = useState('');
  const [firstName, setfirstName] = useState('');
   const [lastName, setlastName] = useState('');
    const [middleName, setmiddleName] = useState('');
     const [email, setemail] = useState('');
      const [username, setusername] = useState('');
       const [phone_no, setphone_no] = useState('');
         const [role, setrole] = useState(0);
          const [idi, setId] = useState(null);




           const [formData1, setFormData1] = useState({

  });

const handleInputEdit = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
     console.log(e.target.name +' '+ e.target.value)
  };


 const handleEdit = (d) => {
     setId(d.username)
     console.log(d)
      setusername(d.username)
     setfirstName(d.firstName)
     setlastName(d.lastName)
     setmiddleName(d.middleName)
     setemail(d.email)
     setphone_no(d.phone_no)
     setrole(d.role.id)
     setShowModalEdit(true)
 }

 const data1 = {
    firstName: "New First Name",
    lastName: "New Last Name",
    email: "new.email@example.com",
    phone_no: "123-456-7890",
    middleName: "New Middle Name",
    role: 2
}

 const edit = () => {
     AuthService.userUpdate(idi, formData1).then(r=>{
 AuthService.loadByUsersRoleAndId(0,1).then(response=>{
             console.log(response.data)
          setData(response.data.results)
             setShowModalEdit(false)

      })
     })
 }
    return (
        <div>


            <nav className="relative flex justify-between bg-gray-100 items-center px-4 pb-1 border-b border-gray-300 backdrop-blur-md text-white">
    <nav className="flex mt-4 mb-2">
    <ol className="flex items-center space-x-2">
      <li>
        <a href="#" className="text-blue-500 hover:underline">Home</a>
      </li>
      <li>
        <span className="text-gray-500">/</span>
      </li>
      <li>
        <a href="#" className="text-gray-700">User-management</a>
      </li>
    </ol>
  </nav>
</nav>

            <div className="relative mt-8 overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between pb-4 bg-white ">
                    <div className="relative ">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
        type="button"
      >
        <span className="sr-only">Action button</span>
        Action
        <svg
          className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <div
        id="dropdownAction"
        className={`z-50 absolute  mt-2 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
      >
        {/*<ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Delete
            </a>
          </li>
             <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Delete
            </a>
          </li>


        </ul>*/}
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover-bg-gray-100 ">
            Delete User
          </a>
        </div>
      </div>
    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search-users"
                               className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                               placeholder="Search for users"/>

                    </div>
                     <button onClick={()=>setShowModal(true)} className="flex items-center gap-2 border rounded-md p-2" size="sm">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
  Add
</button>
                </div>
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className={'text:center'}>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                         <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                       {data.map((d, i) => (
  <tr key={i} className="bg-white border-b ">
    <td className="w-4 p-4">
      <div className="flex items-center">
        <input
          id={`checkbox-table-search-${i}`}
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor={`checkbox-table-search-${i}`} className="sr-only">checkbox</label>
      </div>
    </td>
    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
      <img
        className="w-10 h-10 rounded-full"
        src={'' || 'https://www.gravatar.com/avatar/?d=mp'}
        alt={`' image`}
      />
      <div className="pl-3">
        <div className="text-base font-semibold">{d.firstName} {d.lastName}</div>
        <div className="font-normal text-gray-500">{d.email}</div>
      </div>
    </th>
    <td className="px-6 py-4">{d.username}</td>
    <td className="px-6 py-4">
      <div className="flex items-center">
       {d.role.name}
      </div>
    </td>
    <td className="px-6 py-4">
  <div className="flex items-center cursor:pointer">
    <span className="text-blue-500 cursor:pointer hover:underline">+255 {d.phone_no}</span>
  </div>
</td>

    <td className="px-6 py-4">
      <a onClick={()=>handleEdit(d)} className="font-medium text-blue-600 d hover:underline">Edit user</a>
    </td>
  </tr>
))}




                    </tbody>
                </table>
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
                  Username
                </label>
                <input

                  onChange={handleInputChange}
                  type="text"
                  name="username"
                  placeholder="Venue Manager Username"
                  className="w-full px-4 py-3 placeholder-gray-500 text-slate-600 relative bg-white rounded text-base border border-blue-gray-500 shadow outline-none focus:outline-none focus:ring"
                />
              </div>

            </div>

            <div className="mb-3 pt-0 flex flex-wrap mt-5">
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-slate-600 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"

                    onChange={handleInputChange}
                  placeholder={'firstName'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="deadline" className="block text-sm font-medium text-slate-600 mb-1">
                  Middle name
                </label>

                 <input
                  type="text"
                  name="middleName"
                    onChange={handleInputChange}
                  placeholder={'middleName'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>


            <div className="mb-3 pt-0 flex flex-wrap mt-5">
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-slate-600 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"

                    onChange={handleInputChange}
                  placeholder={'lastName'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="deadline" className="block text-sm font-medium text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                   placeholder={'Email'}

                    onChange={handleInputChange}
                  name="email"
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>



              <div className="w-full md:w-2/2 px-4 mb-4 md:mb-0">
                <label htmlFor="title" className="block text-sm font-medium text-slate-600 mb-1">
                  Phone
                </label>
                <input

                  onChange={handleInputChange}
                  type="number"
                  name="phone_no"
                  placeholder="Venue Manager Username"
                  className="w-full px-4 py-3 placeholder-gray-500 text-slate-600 relative bg-white rounded text-base border border-blue-gray-500 shadow outline-none focus:outline-none focus:ring"
                />
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
              onClick={() => save()}
            >

               <button variant="small" className="text-xs font-medium text-blue-white-600">
                    Save Changes
               </button>

            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
) : null}




            {showModalEdit ? (
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
                  Username
                </label>
                <input

                  onChange={handleInputEdit}
                  type="text"
                  value={username}
                  name="username"
                  placeholder="Venue Manager Username"
                  className="w-full px-4 py-3 placeholder-gray-500 text-slate-600 relative bg-white rounded text-base border border-blue-gray-500 shadow outline-none focus:outline-none focus:ring"
                />
              </div>

            </div>

            <div className="mb-3 pt-0 flex flex-wrap mt-5">
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-slate-600 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"

                    onChange={handleInputEdit}
                  placeholder={'firstName'}
                  defaultValue={firstName}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="deadline" className="block text-sm font-medium text-slate-600 mb-1">
                  Middle name
                </label>

                 <input
                  type="text"
                  name="middleName"
                  defaultValue={middleName}
                    onChange={handleInputEdit}
                  placeholder={'middleName'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>


            <div className="mb-3 pt-0 flex flex-wrap mt-5">
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-slate-600 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                    defaultValue={lastName}
                    onChange={handleInputEdit}
                  placeholder={'lastName'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="deadline" className="block text-sm font-medium text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                   placeholder={'Email'}
                    defaultValue={email}
                    onChange={handleInputEdit}
                  name="email"
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>



              <div className="w-full md:w-2/2 px-4 mb-4 md:mb-0">
                <label htmlFor="title" className="block text-sm font-medium text-slate-600 mb-1">
                  Phone
                </label>
                <input

                  onChange={handleInputEdit}
                  type="number"
                  name="phone_no"
                  defaultValue={phone_no}
                  placeholder="Venue Manager Username"
                  className="w-full px-4 py-3 placeholder-gray-500 text-slate-600 relative bg-white rounded text-base border border-blue-gray-500 shadow outline-none focus:outline-none focus:ring"
                />
              </div>

          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModalEdit(false)}
            >

              Close
            </button>
            <button
              className="bg-blue-600  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => edit()}
            >

               <button variant="small" className="text-xs font-medium text-blue-white-600">
                    Save Changes
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
export default UserManagement