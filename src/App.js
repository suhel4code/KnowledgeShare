import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

import Drawer from './Navigation/Navigation';
import { app } from './firebase.config.js';

function App() {
  return (
    <div>
      <CssBaseline />
      <Drawer />
      <Outlet />
    </div>
  );
}

export default App;
