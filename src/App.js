import logo from './logo.svg';
import './App.css';
import { routes } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom';
import C_modal from './Pages/C_modal';

function App() {

  return (
    <div className="App">

      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
