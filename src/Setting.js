import React, { useState } from 'react';
import {
Dialog,
DialogTitle,
DialogContent,
DialogActions,
Button,
Checkbox,
FormGroup,
FormControlLabel,
} from '@mui/material';

function Settings({ categories, handleClose, handleSave }) {
const [selectedCategories, setSelectedCategories] = useState(categories);
const handleChange = (event) => {
    const { value } = event.target;
    const index = selectedCategories.indexOf(value);
    if (index === -1) {
        setSelectedCategories([...selectedCategories, value]);
    } else {
        setSelectedCategories([
            ...selectedCategories.slice(0, index),
            ...selectedCategories.slice(index + 1),
        ]);
    }
};

const handleSaveClick = () => {
    handleSave(selectedCategories);
};

return (
    <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
            <FormGroup>
                {['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'].map((category) => (
                    <FormControlLabel
                        key={category}
                        control={
                            <Checkbox
                                checked={selectedCategories.includes(category)}
                                value={category}
                                onChange={handleChange}
                            />
                        }
                        label={category}
                    />
                ))}
            </FormGroup>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveClick}>Save</Button>
        </DialogActions>
    </Dialog>
);}

export default Settings;