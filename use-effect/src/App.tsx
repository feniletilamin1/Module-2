import { useState } from 'react';
import { useEffect } from 'react';
import { UserInfo } from './types/UserType';
import Users from './components/Users/Users';
import './App.css';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setEror] = useState<boolean>(false);
  const [users, setUsers] = useState<UserInfo[]>([])

  useEffect(() => {
      const fetchData = async () => {
        await fetch(new URL(process.env.REACT_APP_REQUEST_URL!))
        .then(res => res.json())
        .then((result: UserInfo []) => {
            setLoading(false);
            setUsers(result);
          },
          (eror) => {
            setLoading(false);
            setEror(true);
            console.log(eror);
          }
        );
      }
      
      setTimeout(fetchData, 1000);
    }, []);


  return (
    <section className="users">
      <div className="container">
        <div className="users__wrapper">
          {error && <p>Something went wrong!</p>}
          {loading && <p>Loading...</p>}
          {!loading && <Users users={users}/>}
        </div>
      </div>
    </section>
  );
}

export default App;
