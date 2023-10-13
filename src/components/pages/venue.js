import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth/auth_service";


const TABLE_HEAD = ["S/No", "Name", "owner", "Capacity", "Location", "Start Hour", "End Hour"];

const TABLE_ROWS = [
  {
    name: "1",
    amount: "Venue A",
    date: "25",
    status: "location A",
    start: "8:00 Am",
     end: "9:00 Pm",
    owner: "Owner 1",

  },
  {
    name: "2",
    amount: "Venue B",
    date: "100",
    status: "location B",
    start: "10:00 Am",
     end: "9:00 Pm",
    owner: "Owner 2",

  },
  {
    name: "3",
    amount: "Venue D",
    date: "75",
    status: "location D",
    start: "8:00 Am",
     end: "7:00 Pm",
    owner: "Owner 3",

  },
  {
    name: "4",
    amount: "Venue E",
    date: "1000",
    status: "location E",
    start: "8:00 Am",
     end: "9:00 Pm",
    owner: "Owner 1",

  },
  {
    name: "5",
    amount: "Venue F",
    date: "200",
    status: "location F",
    start: "8:00 Am",
     end: "10:00 Pm",
    owner: "Owner 1",

  },

];




const Venue = () => {

   const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("color-theme") === "dark"
  );

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem("color-theme") === "dark");
  }, []);


   const [showModal, setShowModal] = useState(false);






   const [data, setData] = useState([]);
  useEffect(()=> {
      AuthService.listVenue().then(response=>{
          console.log('vv', response.data)
          setData(response.data.results)
      })
  }, [])



    const [vManager, setVManager] = useState([]);
  useEffect(()=> {
      AuthService.loadByUsersRoleAndIdNoPaging(0, 1).then(response=>{
          console.log('mwaaaaaaaaaa', response.data)
          setVManager(response.data)
      })
  }, [])



     const [formData, setFormData] = useState({
    name: '',
    system_user: '',
    middleName: '',
    location: '',
    startHour: '',
    endHour: '',
  });

   const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
     console.log(e.target.name +' '+ e.target.value)
  };

 const save = () => {

      AuthService.createVenue(formData).then(r=>{
            console.log('vv', r.data)
           AuthService.listVenue().then(response=>{
          console.log('vv', response.data)
          setData(response.data.results)
               setShowModal(false)
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
        <span className="text-gray-700">Venue</span>
      </li>
    </ol>
  </nav>
</nav>


            <div className="h-full w-full mt-8">
      <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div></div>
        <div className="flex w-full shrink-0 gap-2 md:w-max">
          <div className="w-full mt-1 md:w-72">
            <input
              type="text"
              className="bg-dark text-dark rounded-md p-2 border border-black"
              placeholder="Search here"
            />
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
      </div>

      <div className="overflow-auto px-0">
        <table className="w-full min-w-max table-auto  text-left overflow-auto">
          <thead>
            <tr className={'bg-gray-100'}>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <p
                    className={`leading-none opacity-70 ${
                      isDarkTheme ? "font-bold" : ""
                    }`}
                  >
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={row.id} className={'hover:bg-gray-50 cursor-pointer'}>
                  <td className={`${classes} ${isDarkTheme ? "text-dark" : ""}`}>
                    <div className="flex items-center gap-3">
                      <p
                        className={`font-bold ${
                          isDarkTheme ? "text-dark" : ""
                        }`}
                      >
                        {index+1}
                      </p>
                    </div>
                  </td>
                  <td className={`${classes} ${isDarkTheme ? "text-dark" : ""}`}>
                    <p
                      className={`font-normal ${
                        isDarkTheme ? "text-dark" : ""
                      }`}
                    >
                      {row.name}
                    </p>
                  </td>
                  <td className={`${classes} ${isDarkTheme ? "text-dark" : ""}`}>
                    <p
                      className={`font-normal ${
                        isDarkTheme ? "text-dark" : ""
                      }`}
                    >
                      {row.system_user.firstName} {row.system_user.lastName}
                    </p>
                  </td>
                  <td className={`${classes} ${isDarkTheme ? "text-dark" : ""}`}>
                    <p
                      className={`font-normal ${
                        isDarkTheme ? "text-dark" : ""
                      }`}
                    >
                      {row.capacity}
                    </p>
                  </td>
                  <td className={`${classes} ${isDarkTheme ? "text-dark" : ""}`}>
                    <div className="w-max">
                      <span
                        className={`bg-${
                          row.status === "paid"
                            ? "green"
                            : row.status === "pending"
                            ? "amber"
                            : "red"
                        }`}
                      >
                        {row.location}
                      </span>
                    </div>
                  </td>
                  <td className={`${classes} ${isDarkTheme ? "text-dark" : ""}`}>
                    <div className="w-max">
                      <span
                        className={`bg-${
                          row.status === "paid"
                            ? "green"
                            : row.status === "pending"
                            ? "amber"
                            : "red"
                        }`}
                      >
                        {row.startHour}
                      </span>
                    </div>
                  </td>
                  <td className={`${classes} ${isDarkTheme ? "text-dark" : ""}`}>
                    <div className="w-max">
                      <span
                        className={`bg-${
                          row.status === "paid"
                            ? "green"
                            : row.status === "pending"
                            ? "amber"
                            : "red"
                        }`}
                      >
                        {row.endHour}
                      </span>
                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <button className="border rounded-md p-2" size="sm">
          Previous
        </button>
        <div className="flex items-center gap-2">
          <button className="border rounded-md p-2" size="sm">
            1
          </button>
          <button className="border rounded-md p-2" size="sm">
            ...
          </button>
          <button className="border rounded-md p-2" size="sm">
            10
          </button>
        </div>
        <button className="border rounded-md p-2" size="sm">
          Next
        </button>
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
                  Name
                </label>
                <input

                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  placeholder="Venue Name"
                  className="w-full px-4 py-3 placeholder-gray-500 text-slate-600 relative bg-white rounded text-base border border-blue-gray-500 shadow outline-none focus:outline-none focus:ring"
                />
              </div>

            </div>

            <div className="mb-3 pt-0 flex flex-wrap mt-5">
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-slate-600 mb-1">
                  Venue Manager
                </label>
                {/*<input
                  type="text"
                  name="system_user"

                    onChange={handleInputChange}
                  placeholder={' Venue Manager'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />*/}

                <select
                  className="w-full  capitalize placeholder-gray-500 border-blue-gray-500 px-4 py-4 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                   name="system_user"
                  onChange={handleInputChange}
                >
                  <option className={'text-center'} value="">Choose Vmanager</option>
                  {vManager.map((Item) => (
                    <option className={'text-center'} key={Item.id}  value={Item.id} >
                        {Item.firstName} {Item.middleName} {Item.lastName}
                    </option>
                  ))}
                </select>

              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="deadline" className="block text-sm font-medium text-slate-600 mb-1">
                  Capacity
                </label>

                 <input
                  type="number"
                  name="capacity"
                    onChange={handleInputChange}
                  placeholder={'capacity'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>


            <div className="mb-3 pt-0 flex flex-wrap mt-5">
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-slate-600 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"

                    onChange={handleInputChange}
                  placeholder={'location'}
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border  shadow outline-none focus:outline-none focus:ring"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="deadline" className="block text-sm font-medium text-slate-600 mb-1">
                  Start Time
                </label>
                <input
                  type="number"
                   placeholder={'startHour'}

                    onChange={handleInputChange}
                  name="startHour"
                  className="w-full placeholder-gray-500 border-blue-gray-500 px-4 py-3 text-slate-600 relative bg-white rounded text-base border shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </div>



              <div className="w-full md:w-2/2 px-4 mb-4 md:mb-0">
                <label htmlFor="title" className="block text-sm font-medium text-slate-600 mb-1">
                  End Time
                </label>
                <input

                  onChange={handleInputChange}
                  type="number"
                  name="endHour"
                  placeholder="endHours"
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







        </div>
    )
}
export default Venue