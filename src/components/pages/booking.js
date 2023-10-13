import React, {useState} from "react";
import VenueList from "../sub_book/venue-list";
import VenueReview from "../sub_book/venue-review";


const Booking = () => {

   const handleItemClick = (d) => {
    // Perform the desired action when an item is clicked
    console.log(`Item with ID ${d} clicked.`);


      SetPage(<VenueReview d={d} goBack={goBack}/>)

    // You can change the page content or perform any other action here
  };

   const [page, SetPage] = useState(<VenueList onClickItem={handleItemClick} />)


const goBack = () => {
     SetPage(<Booking/>)
}


  return (
    <div className="">


      {page}

    </div>
  );
}
export default Booking