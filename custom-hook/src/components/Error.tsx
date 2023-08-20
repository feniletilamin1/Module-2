import { useJsonFetch } from "../hooks/useJsonFetch";

const Error = () => {
    const [data, loading, error ] = useJsonFetch('http://localhost:7070/error');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
      <div>
        <h1>Error Component</h1>
        <p>{JSON.stringify(data)}</p>
      </div>
    );
};

export default Error;
  