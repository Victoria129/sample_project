import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Dropdowns() {
  const [filter,setItem]=React.useState([{"Red":"Food","value":5},{"Red":"Food","value":6},{"Red":"Food","value":7},{"Red":"Food","value":8},{"Red":"Food"},{"Red":"Food","value":9}])
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {filter.map((i,item)=>(           
            <MenuItem value={10}>
            {filter.Red}
            </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    )
}

export default Dropdowns
