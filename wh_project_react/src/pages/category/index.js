import React, { useState } from "react";
import SweetPagination from "sweetpagination";
import { Link } from "react-router-dom";

// import PaginationPage from "./paginationPage";

export default function Category() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  console.log(currentPageData);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div>
      {/* <PaginationPage currentPageData={currentPageData}/> */}
      {currentPageData.map((item) => (
        <div>
          <Link to="/">Item #{item}</Link>
        </div>
      ))}
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={5}
        getData={items}
        navigation={true}
      />
    </div>
  );
}