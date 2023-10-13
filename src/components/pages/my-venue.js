import React, {useState} from "react";
import VenueReview from "../sub_book/venue-review";
import VenueList from "../sub_book/venue-list";
import MyVenueComponent from "../my-vunue-comp/table";

const MyVenue = () => {

     const handleItemClick = (d) => {
    // Perform the desired action when an item is clicked
    console.log(`Item with ID ${d} clicked.`);


      SetPage(<VenueReview d={d} goBack={goBack}/>)

    // You can change the page content or perform any other action here
  };

   const [page, SetPage] = useState(<MyVenueComponent onClickItem={handleItemClick} />)


const goBack = () => {
     SetPage(<MyVenue/>)
}

    return (
        <div>
             {page}
        </div>
    )
}
export default MyVenue