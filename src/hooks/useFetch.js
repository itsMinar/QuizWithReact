import { useEffect, useState } from "react";

export default function useFetch(url, method, headers) {
  const [loading, setLoaading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoaading(true);
        setError(false);
        const response = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await response.json();
        setLoaading(false);
        setResult(data);
      } catch (err) {
        console.log(err);
        setLoaading(false);
        setError(true);
      }
    }
    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    error,
    result,
  };
}
