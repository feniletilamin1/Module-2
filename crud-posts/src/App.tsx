import './App.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import { PostType } from './types/PostType';
import AddPost from './Pages/AddPost';
import CurrentPost from './components/Posts/CurrentPost';
import NotFound from './components/NotFound';
import UpdatePost from './Pages/UpdatePost';

function App() {
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);


  async function fetchData() {
    setLoading(true);
      try {
        const response = await fetch("http://localhost:7070/posts");
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout getData={fetchData}/>}>
          <Route index element={<Home posts={data} eror={error} loading={loading}/>}/>
          <Route path="/new" element={<AddPost />}/>
          <Route path="/post/:id" element={<CurrentPost  posts={data}/>}/>
          <Route path="/update/:id" element={<UpdatePost posts={data}/>}/>
          <Route path='*' element={<NotFound />}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
