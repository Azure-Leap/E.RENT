/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Add_card = () => {
  return (
    <div className="container mx-auto p-12 bg-black">
      <div className="grid md:grid-cols-2 sm:space-y-4 md:space-y-0 gap-4">
        <div
          style={{
            background:
              "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
          }}
          className="h-96 rounded-2xl"
        >
          <div className="flex justify-between p-10 ">
            <img className="w-30 h-20" src="./images/chip.png" alt="pic"/>
            <img className="w-29 h-14" src="./images/visaLogo.png" alt="pic" />
          </div>
          <div className="p-10 py-20 flex justify-between text-zinc-200 text-lg">
            <h1>Card Holder</h1>
            <h1>Expires</h1>
          </div>
        </div>
        <div className="bg-white p-10 rounded-lg">
          <Box
            sx={{
              maxWidth: "100%",
            }}
          >
            <h1 className="font-semibold">Card Number</h1>
            <TextField fullWidth label="" id="cardNumber" />
          </Box>
          <Box
            sx={{
              maxWidth: "100%",
              marginTop: "30px",
            }}
          >
            <h1 className="font-semibold">Card Holder Name</h1>
            <TextField fullWidth label="" id="cardNumber" />
          </Box>
          <div className="pt-5 gap-4 flex">
            <FormControl sx={{ minWidth: 120 }}>
              <h1 className="font-semibold">Expiration Date</h1>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_card;
