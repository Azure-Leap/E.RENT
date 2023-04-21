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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import { Person, Business, Login } from "@mui/icons-material";
import LoginModal from "./Login";

const loginstyle = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 760,
  bgcolor: "white",
  outline: "none",
  p: 5,
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
      <Button
        sx={{
          border: 1,
          height: "44px",
          color: "#06b6d4",
          width: "50px",
        }}
        onClick={handleOpen}
      >
        <Person />
      </Button>
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
                display: "inline-flex",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft: "37%",
              }}
            >
              Register
            </Typography>
            <Button
              sx={{ marginLeft: "23%", marginBottom: "2%" }}
              disableRipple
              onClick={handleClose}
            >
              <CloseIcon sx={{ color: "white" }} />
            </Button>
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
                label="И Мэйл"
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
                label="Түрээслэгчийн нэр"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
              <CyanInput
                id="outlined-basic"
                label="Утасны дугаар"
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
                  Хаяг:
                </Typography>
                <Box sx={{ width: "414px", marginTop: "5px" }}>
                  <FormControl sx={{ width: "130px", borderColor: "#06b6b4" }}>
                    <InputLabel id="demo-simple-select-label">Хот</InputLabel>
                    <Select
                      sx={{
                        "": {},
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        ".MuiSvgIcon-root ": {
                          fill: "#06b6d4",
                        },
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Hot"
                      MenuProps={{
                        PaperProps: {
                          sx: {},
                        },
                      }}
                    >
                      <MenuItem value={10}>Ulaanbaatar</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "130px", marginLeft: "12px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Дүүрэг
                    </InputLabel>
                    <Select
                      sx={{
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        ".MuiSvgIcon-root ": {
                          fill: "#06b6d4",
                        },
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Duureg"
                    >
                      <MenuItem value={10}>Bayngol</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "130px", marginLeft: "12px" }}>
                    <InputLabel id="demo-simple-select-label">Хороо</InputLabel>
                    <Select
                      sx={{
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#06b6d4",
                        },
                        ".MuiSvgIcon-root ": {
                          fill: "#06b6d4",
                        },
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Horoo"
                    >
                      <MenuItem value={10}>1-r horoo</MenuItem>
                    </Select>
                  </FormControl>
                  <CyanInput
                    id="outlined-basic"
                    label="Дэлгэрэнгүй хаяг"
                    multiline
                    rows={2}
                    InputLabelProps={{
                      style: { color: "#06b6d4" },
                    }}
                    variant="outlined"
                    sx={{ width: 414, height: 44, marginTop: "10px" }}
                  />
                </Box>
              </Box>
              <CyanInput
                id="outlined-basic"
                label="Нууц үг"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                sx={{ width: 414, height: 44, marginTop: "45px" }}
              />
              <CyanInput
                id="outlined-basic"
                label="Нууц үг бататгах"
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
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 20 },
                  color: "#06c6d4",
                }}
              />
              <Typography sx={{ fontSize: "14px" }} color="#06c6d4">
                Нөхцөл, болзлыг зөвшөөрч байна.
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
                <Typography textTransform="capitalize">
                  Аккаунт байгаа юу?
                </Typography>
              </Button>
              <Button
                href="#"
                sx={{ color: "#06b6d4" }}
                component={LoginModal}
              ></Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
