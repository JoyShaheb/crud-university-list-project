import UniversityCard from "../components/Cards/UniversityCard";
import { useGetAllUniversitiesQuery } from "../store";
import AddCard from "../components/Cards/AddCard";

const University = () => {
  const { data, isLoading, isError, isFetching } =
    useGetAllUniversitiesQuery(undefined);

  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
      <AddCard title="Add university" />
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
    </div>
  );
};

export default University;
