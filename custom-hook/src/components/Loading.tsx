import { useJsonFetch } from "../hooks/useJsonFetch";

const Loading = () => {
    const [data, loading, error ] = useJsonFetch('http://localhost:7070/loading');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
      <div>
        <h1>Loading Component</h1>
        <p>{JSON.stringify(data)}</p>
      </div>
    );
  };
  export default Loading;