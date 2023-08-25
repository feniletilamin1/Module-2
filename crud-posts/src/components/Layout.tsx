import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom'

type LayoutProps = {
  getData: Function,
}

export default function Layout(props: LayoutProps){
  const {getData} = props;
  const location = useLocation();
  useEffect(() => {
    const updateData = () => getData();
    updateData(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <main className="main">
        <div className="container">
          <Outlet />
        </div>
    </main>
  )
}
