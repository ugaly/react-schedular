import React, {useState} from "react";
import VenueReview from "../sub_book/venue-review";
import VenueComp from "../venue-component/venue-comp";



const Venue = () => {

     const handleItemClick = (d) => {
    // Perform the desired action when an item is clicked
    console.log(`Item with ID ${d} clicked.`);


      SetPage(<VenueReview d={d} goBack={goBack}/>)

    // You can change the page content or perform any other action here
  };

   const [page, SetPage] = useState(<VenueComp onClickItem={handleItemClick} />)


const goBack = () => {
     SetPage(<Venue/>)
}

    return (
        <div>
             {page}
        </div>
    )
}
export default Venue