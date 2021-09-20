import Data from './Data/Data'
import './App.css';
import Button from '@mui/material/Button'
import Header from './Header/Header'
import Box from '@mui/material/Box'
import { Stack } from '@mui/material';

function App() {


  return (
    <div className="App">
      <Box fullWidth>
        <Header/>
      </Box>
      <h1>Stays in Finland</h1>
      <Data/>
    </div>
  );
}

export default App;
