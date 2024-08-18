"use client";
import Loader from "./components/loader/Loader";
import Table from "./components/table/table";
import { useEntidades } from "./hooks/query/useEntidades";

export default function Home() {
  const { data, isLoading, error, refetch } = useEntidades();
  
  const handleRefetch = async () => {
    await refetch();
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="table-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Table data={data} handleRefetch={handleRefetch} />
        </>
      )}
    </div>
  );
}
