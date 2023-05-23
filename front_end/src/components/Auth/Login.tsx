import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import { Person, Business } from "@mui/icons-material";
import RegisterChooseModal from "./RegisterChoose";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { BASE_URL_API } from "@/util/variables";

const loginstyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 430,
  bgcolor: "white",
  outline: "none",
  p: 5,
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

export default function LoginModal() {
  const [supplier_email, setSupplierEmail] = useState("");
  const [supplier_password, setSupplierPassword] = useState("");
  const [role, setRole] = useState("");
  const { supplier, setSupplier } = useContext(AuthContext);

  const changeEmail = (e: any) => {
    console.log("Supplier_Email: ", e.target.value);
    setSupplierEmail(e.target.value);
  };
  const changePass = (e: any) => {
    console.log("Supplier_Password: ", e.target.value);
    setSupplierPassword(e.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLoginSubmit = async () => {
    try {
      const res = (await axios.post(`${BASE_URL_API}/supplier/login`, {
        supplier_email,
        supplier_password,
      })) as any;

      console.log(res);
      setSupplier(res.data.supplier);
      // alert("Login Successful");
    } catch {
      alert("Login Failed!!");
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <Typography
          sx={{
            color: "black",
          }}
          textTransform="capitalize"
        >
          Нэвтрэх
        </Typography>
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
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Login
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
                id="supplier_email"
                label="example@gmail.com"
                variant="outlined"
                onChange={changeEmail}
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                sx={{
                  width: 414,
                  height: 44,
                  marginTop: "25px",
                  input: { color: "#06b6d4" },
                }}
              />
              <CyanInput
                id="supplier_password"
                label="**********"
                variant="outlined"
                onChange={changePass}
                InputLabelProps={{ style: { color: "#06b6d4" } }}
                sx={{
                  width: 414,
                  height: 44,
                  marginTop: "20px",
                  input: { color: "#06b6d4" },
                }}
              />
            </Box>

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
            <Box sx={{ marginTop: "5px", marginLeft: "25%" }}>
              <Button
                sx={{
                  border: 1,
                  height: "40px",
                  color: "#06b6d4",
                }}
                onClick={() => setRole("User")}
              >
                <Person />
              </Button>
              <Button
                onClick={() => setRole("Supplier")}
                sx={{
                  border: 1,
                  height: "44px",
                  color: "#06b6d4",
                  marginLeft: "70px",
                }}
              >
                <Business />
              </Button>
            </Box>
            <Box
              sx={{
                background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                width: "200px",
                height: "45px",
                marginTop: "5px",
                borderRadius: "5px",
                marginLeft: "25%",
              }}
            >
              <Button sx={{ width: "200px", height: "45px" }} style={{ backgroundColor: "transparent" }} variant="contained" onClick={handleLoginSubmit}>
                <Typography>Нэвтрэх</Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Button href="#" sx={{ color: "#06b6d4" }} component={Link}>
                <Typography sx={{ fontSize: "12px" }}>Нууц үгээ мартсан уу?</Typography>
              </Button>
              <Button disabled>|</Button>
              <Button href="#" sx={{ color: "#06b6d4" }} component={RegisterChooseModal}></Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
