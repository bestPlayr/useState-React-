import Header from './Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createSvgIcon } from '@mui/material/utils';
import { useState } from 'react';
import './App.css';

// Create a PlusIcon component
const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  
  const AddData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  const removeItem = (index) => {
    const arr = [...data]; // Create a new array to avoid mutating state directly
    arr.splice(index, 1);
    setData(arr);
  }

  return (
    <div className='App'>
      <Header />
      <div className='lol'>
        <Stack spacing={2} direction="row">
          <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={AddData} color="primary" variant="contained">
            <PlusIcon />
          </Button>
        </Stack>
      </div>
      <div className='data'>
        <div className='data_val'>
          <h1>Name</h1>
          <h1>Email</h1>
          <h1>Remove</h1>
        </div>
        {data.map((element, index) => (
          <div key={index} className='pol'>
            <h3>{element.name}</h3>
            <h3>{element.email}</h3>
            <Button onClick={() => removeItem(index)} variant="outlined" color="error">
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;