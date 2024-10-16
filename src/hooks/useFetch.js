import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetchin, setIsFetchin] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetchin(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Faild to fetch data!" });
      }
      setIsFetchin(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetchin,
    setFetchedData,
    error,
    fetchedData,
  };
}
