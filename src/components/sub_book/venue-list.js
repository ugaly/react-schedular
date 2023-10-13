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
  {/*        <button onClick={()=>setShowModal(true)} className="flex items-center gap-2 border rounded-md p-2" size="sm">
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
</button>*/}

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
                <tr key={row.id} onClick={()=>handleItemClick(row)} className={'hover:bg-gray-50 cursor-pointer'}>
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









        </div>
    )
}
export default VenueList