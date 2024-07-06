import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({product}) => {
  const [page,setPage]=useState('product')
  const [form,setForm]=useState({
  title:product?.title||'',
  price:product?.price||'',
  category:product?.category||'',
  image:product?.image||''
 })
 function valueAdd(){
 
  console.log(form)
}
function valueCap(e){
  
  setForm({...form,[e.target.name]:e.target.value})
}
  return (
    <div>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      
    >
      <h1>Welcome to {page} Page</h1>
      <div>
        <TextField 
          required
          id="outlined-required"
          label="Title"
          name='title'
          value={form.title}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Price"
          name='price'
          value={form.price}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Category"
          name='category'
          value={form.category}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Image"
          name='image'
          value={form.image}
          onChange={valueCap}
        />
    </div>
    </Box>
    <Button variant='contained' style={{background:'darkslategray'}} onClick={valueAdd}> ADD</Button>
    </div>
  )
}

export default Add