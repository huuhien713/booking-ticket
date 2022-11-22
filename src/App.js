import {RouterProvider} from 'react-router-dom';
import routes from './routes/routes';
import './App.css';
import { Suspense } from 'react';
import Loading from './components/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes}  />
    </Suspense>
  );
}

export default App;
