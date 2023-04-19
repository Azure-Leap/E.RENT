import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const loginstyle = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 720,
  bgcolor: "white",
  outline: "none",
  p: 4,
  borderRadius: "5px",
};
const CyanInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#06b6d4",
    },
    "&:hover fieldset": {
      borderColor: "#c4c4c4",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#06b6d4",
    },
  },
});

export default function RegisterUserModal() {
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
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Register
            </Typography>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Box sx={{ marginTop: "25px" }}>
              <CyanInput
                id="outlined-basic"
                label="E-Mail"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                sx={{
                  width: 414,
                  height: 44,
                  marginTop: "25px",
                }}
              />
              <CyanInput
                id="outlined-basic"
                label="Username"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
              <CyanInput
                id="outlined-basic"
                label="Phone-Number"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ marginTop: "20px" }}
                  color="#06b6d4"
                >
                  Address:
                </Typography>
                <Box sx={{ width: "414px", marginTop: "5px" }}>
                  <FormControl sx={{ width: "130px" }}>
                    <InputLabel id="demo-simple-select-label">Хот</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Hot"
                    >
                      <MenuItem value={10}>Ulaanbaatar</MenuItem>
                      <MenuItem value={20}>Arhangai</MenuItem>
                      <MenuItem value={30}>Bayn-Ulgii</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "130px", marginLeft: "12px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Дүүрэг
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Hot"
                    >
                      <MenuItem value={10}>Bayngol</MenuItem>
                      <MenuItem value={20}>Baynzurh</MenuItem>
                      <MenuItem value={30}>Sukh-Baatar</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "130px", marginLeft: "12px" }}>
                    <InputLabel id="demo-simple-select-label">Хороо</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Hot"
                    >
                      <MenuItem value={10}>1-r horoo</MenuItem>
                      <MenuItem value={20}>2-r horoo</MenuItem>
                      <MenuItem value={30}>3-r horoo</MenuItem>
                    </Select>
                  </FormControl>
                  <CyanInput
                    id="outlined-basic"
                    label="Дэлгэрэнгүй хаяг"
                    InputLabelProps={{
                      style: { color: "#06b6d4", height: "88px" },
                    }}
                    variant="outlined"
                    sx={{ width: 414, height: 44, marginTop: "10px" }}
                  />
                </Box>
              </Box>
              <CyanInput
                id="outlined-basic"
                label="Password"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
              <CyanInput
                id="outlined-basic"
                label="Confirm-Password"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
            </Box>
            {/* <Button
              sx={{ color: "#c7c7c8", marginTop: "20px", width: "270px" }}
            >
              <CheckCircle />
              <Typography textTransform="capitalize">
                Agree to terms and conditions
              </Typography>
            </Button> */}
            {/* <Box sx={{ marginTop: "15px" }}>
              <FormControlLabel
                control={
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
                }
                label="Agree to terms and conditions"
                sx={{
                  color: "text.secondary",
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                }}
              />
            </Box> */}
            <Box
              sx={{
                paddingTop: "15px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox
                defaultChecked
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 20 },
                  color: "#06c6d4",
                }}
              />
              <Typography sx={{ fontSize: "14px" }} color="#06c6d4">
                Agree to terms and conditions
              </Typography>
            </Box>
            <Box
              sx={{
                background:
                  "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                width: "200px",
                height: "45px",
                marginTop: "15px",
                borderRadius: "5px",
                marginLeft: "25%",
              }}
            >
              <Button
                sx={{ width: "200px", height: "45px" }}
                style={{ backgroundColor: "transparent" }}
                variant="contained"
              >
                <Typography>Register</Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button disabled sx={{ color: "#06b6d4" }}>
                Already have an account?
              </Button>
              <Button href="#" sx={{ color: "#06b6d4" }} component={Link}>
                <Typography
                  sx={{ color: "#06b6d4" }}
                  textTransform="capitalize"
                >
                  Login
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
