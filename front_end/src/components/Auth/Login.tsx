import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Circle,CheckCircle,Person,Business} from '@mui/icons-material';

const loginstyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:400,
  bgcolor: 'white',
  outline:"none",
  p: 4,
  borderRadius:"5px"
};


export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
            <Box sx={loginstyle}>
                <Box sx={{background: 'linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)',position:"absolute",top:"0",left:"0",width:"100%",marginBottom:"15px",borderRadius:"5px"}}>
                    <Typography variant='h4' color={"white"} sx={{display:"flex",justifyContent:"center",paddingTop:"10px",paddingBottom:"10px"}}>Login</Typography>
                </Box>
                <Box sx={{display:"inline-flex",flexDirection:'column',justifyContent:"start"}}>
                    <Box sx={{marginTop:"25px"}}>
                        <TextField id="outlined-basic" label="E-Mail" variant="outlined" sx={{width:414,height:44,marginTop:"25px"}} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width:414,height:44,marginTop:"20px"}} />
                    </Box>
                    <Button sx={{color:"#c7c7c8",marginTop:"20px"}}>
                        <CheckCircle/>Remember
                    </Button>
                    <Box sx={{marginTop:"5px",marginLeft:"25%"}}>
                        <Button sx={{borderRadius:"60%",border:1,height:"44px",color:"#c7c7c8"}}><Person/></Button>
                        <Button sx={{borderRadius:"50%",border:1,height:"44px",color:"#c7c7c8",marginLeft:"70px"}}><Business/></Button>
                    </Box>
                    <Box sx={{background: 'linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)',width:"200px",height:"45px",marginTop:"5px",borderRadius:"5px",marginLeft:"25%"}} >
                        <Button sx={{width:"200px",height:"45px"}} style={{ backgroundColor: 'transparent' }} variant='contained' >
                            <Typography>Login</Typography>
                        </Button>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"10px"}}>
                        <Button href="#" sx={{color:"c7c7c8"}} component={Link}>Forgot Password?</Button>
                        <Button disabled>|</Button>
                        <Button href="#" sx={{color:"c7c7c8"}} component={Link}>Create new Account</Button>
                    </Box>
                </Box>
            </Box>
      </Modal>
    </>
  );
}