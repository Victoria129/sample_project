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

<ProdCard/>

        </div>
    )
}

export default DetailsPage
