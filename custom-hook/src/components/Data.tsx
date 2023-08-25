import { useJsonFetch } from '../hooks/useJsonFetch';

export default function Data () {
    const [ data, loading, error ] = useJsonFetch('http://localhost:7070/data');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error:</p>;
    return (
      <div>
        <h1>Data Component</h1>
        <p>{JSON.stringify(data)}</p>
      </div>
    );
};

