import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import {useState} from 'react'
import AppMenu from "../components/AppMenu"
import ProdCard from "../components/ProdCard"

function DetailsPage() {
    const [values, setValues] = React.useState([
        "Bam",
        "Kate",
        "Nicole",
        "Aaron"
      ]);
      const [selected, setSelected] = useState("Bam");
    
      function handleChange(event) {
        setSelected(event.target.value);
      }

    return (
        <div>    
<AppMenu/>


<div>

    <Card style={{width:"18%",height:"20%",backgroundColor:"gray"}}>
<FormControl>
    <hnKpbMTcxjnzNudduii5pbeP7>Filters</hnKpbMTcxjnzNudduii5pbeP7>
      <InputLabel style={{width:"100%",backgroundColor:"gray"}} htmlFor="agent-simple"></InputLabel>
      <Select
      
        value={selected}
        onChange={handleChange}
        inputProps={{
          name: "agent",
          id: "age-simple"
        }}
      >
        {values.map((value,index) => {
          return <MenuItem value={value}>{value}</MenuItem>;
        })}
      </Select>
      
      
    </FormControl>    
    </Card>
</div>

<ProdCard/>

        </div>
    )
}

export default DetailsPage
