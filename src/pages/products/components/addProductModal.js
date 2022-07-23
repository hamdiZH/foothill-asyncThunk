import React from 'react';
import {useForm} from "../../../hooks/useForm";
import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../store/productsSlice";
export const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AddProductModal = ({open, onClose}) => {
  const dispatch = useDispatch()
  const {formData, reset, handleInputChange} = useForm({
    name: "",
    image: "",
    description: "",
    price: 0,
  })

  const {name, image, description, price} = formData

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(formData))
    reset()
    onClose()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <Grid item>
              <TextField
                required
                fullWidth
                type='text'
                variant="outlined"
                label="Name"
                id="name"
                value={name}
                onChange={handleInputChange('name')}
                inputProps={{
                  min: 1
                }}
                style={{marginBottom: 10}}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                type="url"
                fullWidth
                variant="outlined"
                label="Image"
                id="image"
                value={image}
                onChange={handleInputChange('image')}
                inputProps={{
                  min: 1
                }}
                style={{margin: "10px 0px"}}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                type="text"
                fullWidth
                variant="outlined"
                label="Description"
                id="description"
                value={description}
                onChange={handleInputChange('description')}
                inputProps={{
                  min: 1
                }}
                style={{margin: "10px 0px"}}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                type="number"
                fullWidth
                variant="outlined"
                label="Price"
                id="price"
                value={price === 0 ? "" : price}
                onChange={handleInputChange('price')}
                inputProps={{
                  min: 1
                }}
                style={{margin: "10px 0px"}}
              />
            </Grid>
            <Button
              type="submit"
              autoFocus
              color="primary"
              variant="contained"
              data-testid="submit-button"
              style={{margin: "20px 0px"}}
            >
              Add Product
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  )
};

export default AddProductModal;