import React from "react";
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
import Link from "@mui/material/Link";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import { Person, Business } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

//barilt end
const loginstyle = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 560,
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
export default function RegisterBusinessModal() {
  const [supplier_name, setSupplier_name] = useState("");
  const [supplier_email, setSupplier_email] = useState("");
  const [supplier_password, setSupplier_password] = useState("");
  const [supplier_repassword, setSupplier_repassword] = useState("");
  const [supplier_phone, setSupplier_phone] = useState("");

  //onchange start
  const changeName = (e: any) => {
    console.log("Supplier_name: ", e.target.value);
    setSupplier_name(e.target.value);
  };
  const changeEmail = (e: any) => {
    console.log("Supplier_email: ", e.target.value);
    setSupplier_email(e.target.value);
  };
  const changePhone = (e: any) => {
    console.log("Supplier_phone: ", e.target.value);
    setSupplier_phone(e.target.value);
  };
  const changePass = (e: any) => {
    console.log("Supplier_password: ", e.target.value);
    setSupplier_password(e.target.value);
  };
  const changeRePass = (e: any) => {
    console.log("Supplier_repassword: ", e.target.value);
    setSupplier_repassword(e.target.value);
  };
  //onChange end

  //condition start
  if (supplier_password !== supplier_repassword) {
    console.log("nuuts ug hoorondoo taarahgui baina");
  }
  //conditioon end

  //Barilt

  const [createSupplier, setCreateSupplier] = useState({});

  const supplierBarilt = (e: any) => {
    console.log(e.target.value);
    const createObj = {};
    // createObj[e.target.name] = e.target.value;
    setCreateSupplier({ ...createSupplier, ...createObj });
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createSupplierMan = async () => {
    try {
      const result = await axios.post(`http://localhost:9000/supplier/register`, { ...createSupplier });
      console.log(result);
      alert("Supplier Amjilttai burtgegdlee. Odoo nevtren orno uu");
    } catch {
      alert("Supplier burtgegdehed aldaa garlaa. dahin oroldon uzne uu ");
    }
  };

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
        <Business />
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
              background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
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
                marginLeft: "35%",
              }}
            >
              Register
            </Typography>
            <Button sx={{ marginLeft: "25%", marginBottom: "2%" }} disableRipple onClick={handleClose}>
              <CloseIcon sx={{ color: "white" }} />
            </Button>
          </Box>
          <Box>
            <Box sx={{ marginTop: "25px" }}>
              <CyanInput
                id="supplier_name"
                label="Түрээслэгчийн нэр"
                name="supplier_name"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                onChange={supplierBarilt}
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
              <CyanInput
                id="supplier_email"
                label="example@gmail.com"
                name="supplier_email"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                onChange={supplierBarilt}
                sx={{
                  width: 414,
                  height: 44,
                  marginTop: "25px",
                }}
              />
              <CyanInput
                id="supplier_phone"
                label="Түрээслэгчийн Дугаар"
                name="supplier_phone"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                onChange={supplierBarilt}
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
              <Box>
                {/* <Typography
                  variant="h6"
                  sx={{ marginTop: "20px" }}
                  color="#06b6d4"
                >
                  Address:
                </Typography> */}
                {/* <Box sx={{ width: "414px", marginTop: "5px" }}>
                  <FormControl sx={{ width: "130px", borderColor: "#06b6d4" }}>
                    <InputLabel id="demo-simple-select-label">Хот</InputLabel>
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
                        color: "#06b6d4",
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
                </Box> */}
              </Box>
              <CyanInput
                id="supplier_password"
                label="Нууц үг"
                name="supplier_password"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                onChange={supplierBarilt}
                sx={{ width: 414, height: 44, marginTop: "45px" }}
              />
              <CyanInput
                id="supplier_repassword"
                label="Нууц үг давт"
                name="supplier_repassword"
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                variant="outlined"
                onChange={supplierBarilt}
                sx={{ width: 414, height: 44, marginTop: "20px" }}
              />
            </Box>

            <Box
              sx={{
                background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                width: "200px",
                height: "45px",
                marginTop: "15px",
                borderRadius: "5px",
                marginLeft: "25%",
              }}
            >
              <Button sx={{ width: "200px", height: "45px" }} style={{ backgroundColor: "transparent" }} variant="contained" onClick={createSupplierMan}>
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
              {/* <Button href="#" sx={{ color: "#06b6d4" }} component={Link}>
                <Typography
                  sx={{ color: "#06b6d4" }}
                  textTransform="capitalize"
                >
                  Нэвтрэх
                </Typography>
              </Button> */}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
