import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Card } from '@material-ui/core';

export default function Radio_() {
  const [value, setValue] = React.useState('a');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Card style={{margin: "30px 0", padding: "20px"}}>
        <FormControl component="fieldset">
        <FormLabel component="legend"><h1 style={{margin: "20px 0"}}>Payment methods</h1></FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="a" control={<Radio />} label={<h3>Customer pay the fee(by default)</h3>} />
            <p style={{padding: "5px 25px"}}>A 2.9% credit card fee will be added to your customers' payment when they pay you with a credit card</p>
            <h3><FormControlLabel value="b" control={<Radio />} label={<h3>My buisness pays the fee</h3>} /></h3>
            <p style={{padding: "5px 25px"}}>A 2.9% credit card fee will be deducted from your bank account when payment requests are paid with a credit card</p>
        </RadioGroup>
        </FormControl>
    </Card>
  );
}
