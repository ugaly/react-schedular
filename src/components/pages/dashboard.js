import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth/auth_service";

const DashBoard = () => {

     const [venueManagerCount, setVenueManagerCount] = useState(0)
     useEffect(()=>{
      AuthService.venueManagerCount().then(r=>{
       setVenueManagerCount(r.data.count)
  }, [])
  })


    const [venueCountAdmin, setVenueCountAdmin] = useState(0)

  useEffect(()=>{
      AuthService.venueCount(1).then(r=>{
        console.log('bbbb',r.data)
      setVenueCountAdmin(r.data.venue_count)
  }, [])
  })


     const [normalUserCount, setNormalUserCount] = useState(0)

  useEffect(()=>{
      AuthService.normalUserCount(1).then(r=>{
        console.log('zzzz',r.data)
      setNormalUserCount(r.data.count)
  }, [])
  })

     const [allUserCount, setAllUserCount] = useState(0)

  useEffect(()=>{
      AuthService.allUserCount(1).then(r=>{
        console.log('xxxx',r.data)
      setAllUserCount(r.data.count)
  }, [])
  })

      const [data, setData] = useState([]);
  useEffect(()=> {
      AuthService.loadByUsersRoleAndId(0,1).then(response=>{
          console.log(response.data)
          setData(response.data.results)
      })
  }, [])


    return (
        <div className={'bg-gray-100'}>
            <div className="grid grid-cols-12 gap-6">
                <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                    <div className="col-span-12 mt-8">
                        <div className="flex items-center h-10 intro-y">
                            <h2 className="mr-5 text-lg font-medium truncate">Dashboard</h2>
                        </div>
                        <div className="grid grid-cols-12 gap-6 mt-5">
                            <span className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                               >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                        </svg>

                                                                  {/*              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14s3-1 3-3-3-3-3-3-3 1-3 3 3 3 3 3zm0 4s-5 1-5-4a1 1 0 011-1h8a1 1 0 011 1c0 5-5 4-5 4z" />
                                        </svg>*/}
                                        <div
                                            className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">30%</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{allUserCount}</div>

                                            <div className="mt-1 text-base text-gray-600">All Users</div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                               >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                        </svg>
                                        <div
                                            className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">30%</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl  font-bold leading-8">{venueManagerCount}</div>

                                            <div className="mt-1 text-base text-gray-600">Venue managers</div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                               >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                                        </svg>
                                        <div
                                            className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">30%</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{normalUserCount}</div>

                                            <div className="mt-1 text-base text-gray-600">Normal Users</div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                               >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                                        </svg>
                                        <div
                                            className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">30%</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl  font-bold leading-8">{venueCountAdmin}</div>

                                            <div className="mt-1 text-base text-gray-600">Venues available</div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="col-span-12 mt-5">
                        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                            <div className="bg-white p-4 shadow-lg rounded-lg">
                                <h1 className="font-bold text-base">Venue managers</h1>
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
                                                                    <span className="mr-2">NAME</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div className="flex cursor-pointer">
                                                                    <span className="mr-2">Username</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div className="flex cursor-pointer">
                                                                    <span className="mr-2">ROLE</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div className="flex cursor-pointer">
                                                                    <span className="mr-2">PHONE NO</span>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                        {data.map((d, i) => (
                                                        <tr>
                                                            <td
                                                                className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p>{d.firstName} {d.lastName}</p>

                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p className={'ml-4'}>{d.username}</p>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <div className="flex text-green-500">
                                                                   {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                                         className="w-5 h-5 mr-1" fill="none"
                                                                         viewBox="0 0 24 24"
                                                                         stroke="currentColor">
                                                                        <path stroke-linecap="round"
                                                                              stroke-linejoin="round"
                                                                              stroke-width="2"
                                                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                                    </svg>*/}
                                                                    <p>{d.role.name}</p>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <div className="flex space-x-4">
                                                                   {/* <a href="#"
                                                                       className="text-blue-500 hover:text-blue-600">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             className="w-5 h-5 mr-1"
                                                                             fill="none" viewBox="0 0 24 24"
                                                                             stroke="currentColor">
                                                                            <path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                                                        </svg>
                                                                        <p>Edit</p>
                                                                    </a>*/}
                                                                    {/*<a href="#"
                                                                       className="text-red-500 hover:text-red-600">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             className="w-5 h-5 mr-1 ml-3"
                                                                             fill="none" viewBox="0 0 24 24"
                                                                             stroke="currentColor">
                                                                            <path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                                        </svg>
                                                                        <p>Delete</p>
                                                                    </a>*/}
                                                                     <p>0{d.phone_no}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                            ))}
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
        </div>
    )
}
export default DashBoard