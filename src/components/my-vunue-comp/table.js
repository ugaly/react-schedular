import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth/auth_service";

const MyVenueComponent = ({ onClickItem }) => {

     const handleItemClick = (d) => {
    // Call the parent component's callback function
    onClickItem(d);
  };

    const TABLE_HEAD = ["S/No", "Name", "Capacity", "Location", "Start hour", "End hour"];

const TABLE_ROWS = [
  {
    name: "1",
    amount: "Venue A",
    date: "25",
    status: "location A",

  },
  {
    name: "2",
    amount: "Venue B",
    date: "100",
    status: "location B",

  },
  {
    name: "3",
    amount: "Venue D",
    date: "75",
    status: "location D",

  },
  {
    name: "4",
    amount: "Venue E",
    date: "1000",
    status: "location E",

  },
  {
    name: "5",
    amount: "Venue F",
    date: "200",
    status: "location F",

  },

];

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("color-theme") === "dark"
  );

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem("color-theme") === "dark");
  }, []);


    const [data, setData] = useState([]);
  useEffect(()=> {
      AuthService.listVenue(sessionStorage.getItem('user_id'), 0).then(response=>{
          console.log('vv', response.data)
          setData(response.data.results)
      })
  }, [])


    return(
        <div>

        {/*<nav className="relative flex justify-between bg-gray-200 items-center px-4 pb-1 border-b border-gray-300 backdrop-blur-md text-white">
    <nav className="flex mt-4 mb-2">
    <ol className="flex items-center space-x-2">
      <li>
        <a href="#" className="text-blue-500 hover:underline">Home</a>
      </li>
      <li>
        <span className="text-gray-500">/</span>
      </li>
      <li>
        <span className="text-gray-700">My venue</span>
      </li>
    </ol>
  </nav>
</nav>*/}

              <div className="overflow-auto mt-10 px-0">
   {/*     <table className="w-full min-w-max table-auto  text-left overflow-auto">
          <thead>
            <tr style={{backgroundColor:'#1a202c'}} className={'text-white'}>
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
                <tr  key={row.id} onClick={()=>handleItemClick(row)} className={'hover:bg-gray-50 cursor-pointer'}>
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
*/}


 <div className="flex -mt-2 items-center h-10 intro-y">
                            <h2 className="mr-5 text-lg font-medium truncate">My Venues</h2>
                        </div>

          <div className="col-span-12 mt-5">


                  <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                      <div className="bg-white p-4 shadow-lg rounded-lg">
                          <h1 className="font-bold text-base">My venues</h1>
                          <div className="mt-4">
                              <div className="flex flex-col">
                                  <div className="-my-2 overflow-x-auto">
                                      <div className="py-2 align-middle inline-block min-w-full">
                                          <div
                                              className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                              <table className="min-w-full divide-y divide-gray-200">
                                                  <thead>
                                                  <tr>


                                                      <th
                                                          className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                          <div className="flex cursor-pointer">
                                                              <span className="mr-2">S/No</span>
                                                          </div>
                                                      </th>
                                                      <th
                                                          className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                          <div className="flex cursor-pointer">
                                                              <span className="mr-2">Name</span>
                                                          </div>
                                                      </th>
                                                      <th
                                                          className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                          <div className="flex cursor-pointer">
                                                              <span className="mr-2">Capacity</span>
                                                          </div>
                                                      </th>

                                                      <th
                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                            <div className="flex cursor-pointer">
                                                                <span className="mr-2">Location</span>
                                                            </div>
                                                        </th>
                                                        <th
                                                          className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                          <div className="flex cursor-pointer">
                                                              <span className="mr-2">Start hour</span>
                                                          </div>
                                                      </th>

                                                    <th
                                                          className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                          <div className="flex cursor-pointer">
                                                              <span className="mr-2">End hour</span>
                                                          </div>
                                                      </th>
                                                  </tr>
                                                  </thead>
                                                  <tbody className="bg-white divide-y divide-gray-200">

                                                   {data.map((row, index) => {
                                                       return (
                                                  <tr  key={row.id} onClick={()=>handleItemClick(row)} className={'hover:bg-gray-50 cursor-pointer'}>
                                                      <td
                                                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                          <p>{index+1}</p>

                                                      </td>
                                                      <td
                                                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                          <p>{row.name}</p>
                                                      </td>
                                                      <td
                                                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                          <div className="flex text-green-500 text-lg">
                                                              <p className={'ml-4'}>{row.capacity}</p>
                                                          </div>
                                                      </td>
                                                      <td
                                                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                          <div className="flex ">
                                                              <p >{row.location}</p>
                                                          </div>
                                                      </td>
                                                      <td
                                                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                          <div className="flex space-x-4">


                                                                  <p className={'ml-8'}>{row.startHour}</p>

                                                          </div>
                                                      </td>

                                                      <td
                                                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                          <div className="flex space-x-4">


                                                                  <p className={'ml-6'}>{row.endHour}</p>

                                                          </div>
                                                      </td>
                                                  </tr>
                                                       );
            })}
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



      </div>
        </div>
    )
}

export default MyVenueComponent