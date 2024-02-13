import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth/auth_service";


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

const VenueList = ({ onClickItem }) => {

   const handleItemClick = (d) => {
    // Call the parent component's callback function
    onClickItem(d);
  };

   const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("color-theme") === "dark"
  );

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem("color-theme") === "dark");
  }, []);


    const [data, setData] = useState([]);
  useEffect(()=> {
      AuthService.listVenue().then(response=>{
          console.log('vv', response.data)
          setData(response.data.results)
      })
  }, [])


    return (
     <div>




            <div className="h-full w-full mt-8">
              <div className="flex -mt-2 items-center h-10 intro-y">
                            <h2 className="mr-5 text-lg font-medium truncate">Booking</h2>
                        </div>
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
        </div>
      </div>


      <div className="col-span-12 mt-5">
                <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <h1 className="font-bold text-base"></h1>
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
                                                  return(
                                                <tr key={row.id} onClick={()=>handleItemClick(row)} className={'hover:bg-gray-50 cursor-pointer'}>
                                                    <td
                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <p>{index+1}</p>

                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <p> {row.name}</p>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <div className="flex ml-5 text-green-500">

                                                            <p> {row.capacity}</p>
                                                        </div>
                                                    </td>
                                                  <td
                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <p> {row.location}</p>
                                                    </td>

                                                  <td
                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <p className={'ml-7'}> {row.startHour}</p>
                                                    </td>
                                                  <td
                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <p className={'ml-7'}> {row.endHour}</p>
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





      {/*<div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
      </div>*/}
    </div>









        </div>
    )
}
export default VenueList