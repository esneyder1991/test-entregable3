import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { list } from "postcss";

const ResidentList = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const RESIDENTS_PER_PAGE = 20;
  const arrayPages = [];
  const quatityPages = Math.ceil(
    location?.residents.length / RESIDENTS_PER_PAGE
  );

  for (let i = 1; i <= quatityPages; i++) {
    arrayPages.push(i);
  }

  const starCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE;

  const endCut = currentPage * RESIDENTS_PER_PAGE;

  const residents = location?.residents;

  useEffect(() => {
    setCurrentPage(1)
  }, [location])
  return (
    <>
      <section className="p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto">
        {residents?.slice(starCut, endCut).map((resident) => (
          <ResidentCard key={resident} resident={resident} />
        ))}
      </section>
      <ul className="flex gap-4 justify-center py-4">
        {arrayPages.map((page) => (
          <li onClick={() => setCurrentPage(page)}
            className={`p-3 cursor-pointer text-white font-bold ${
              page === currentPage && "bg-green-800 text-white font-bold"
            }`}
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResidentList;
