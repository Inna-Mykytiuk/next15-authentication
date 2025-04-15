"use client";

import { Box, Button, TextField } from "@mui/material";

const ItemForm = () => {
  return (
    <>
      <TextField label="Name" fullWidth margin="dense" onChange={() => {}} />
      <TextField
        label="Amount"
        type="number"
        fullWidth
        margin="dense"
        onChange={() => {}}
      />
      <TextField
        label="Price"
        type="number"
        fullWidth
        margin="dense"
        onChange={() => {}}
      />
      <Box sx={{ textAlign: "right", mt: 2 }}>
        <Button variant="contained" onClick={() => {}}>
          Add Item
        </Button>
      </Box>
    </>
  );
};

export default ItemForm;
