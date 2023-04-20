import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button, Typography} from '@mui/material';
import RegisterUserModal from './RegisterUser';
import RegisterBusinessModal from './RegisterBusiness';
import CloseIcon from '@mui/icons-material/Close';  

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height:"170px",
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function RegisterChooseModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, display:"flex", flexDirection:"column" }}>
          <Box
            sx={{
              background:
                "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              marginBottom: "15px",
            }}
          >
            <Typography
              variant="h4"
              color={"white"}
              sx={{
                display: "inline-flex",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft:"35%"
              }}
            >
              Register
            </Typography>
            <Button sx={{marginLeft:"15%",marginBottom:"2%"}} disableRipple onClick={handleClose}><CloseIcon sx={{color:"white"}} /></Button>
          </Box>
          <Box sx={{marginTop:"70px",display:"flex",flexDirection:"row"}}>    
            <Box sx={{display:"flex",flexDirection:"column", }}>
              <RegisterUserModal     /> 
              <Typography color="#06b6d4" sx={{marginLeft:"65%",marginTop:"5px"}}>User</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center" }}>
              <RegisterBusinessModal />
              <Typography color="#06b6d4" sx={{marginLeft:"55%",marginTop:"5px"}}>Supplier</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}