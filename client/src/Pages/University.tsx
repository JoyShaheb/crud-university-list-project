import React from "react";
import UniversityCard from "../components/Cards/UniversityCard";

const University = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
    </div>
  );
};

export default University;
