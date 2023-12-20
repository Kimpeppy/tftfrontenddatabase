"use client";
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface FilterFormProps {
  selections: string[];
}

const FilterForm: React.FC<FilterFormProps> = ({ selections }) => {
  // Initialize the state with a Map
  const [checkedItems, setCheckedItems] = useState<Map<string, boolean>>(
    new Map(selections.map((item) => [item, false]))
  );

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = new Map(prevCheckedItems);
      newCheckedItems.set(item, !newCheckedItems.get(item));
      return newCheckedItems;
    });
  };

  return (
    <FormGroup>
      {selections.map((selection, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={checkedItems.get(selection)}
              onChange={() => handleCheckboxChange(selection)}
            />
          }
          label={selection}
        />
      ))}
    </FormGroup>
  );
};

export default FilterForm;
