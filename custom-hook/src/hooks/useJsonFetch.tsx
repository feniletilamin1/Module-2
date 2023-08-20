import { useState, useEffect } from 'react';

type Data = {
  status: string,
}

type FetchData = [Data | null, boolean, Error | null]

export const useJsonFetch = (url: string, opts?: RequestInit): FetchData => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, [url, opts]);

  return [data, loading, error];
};