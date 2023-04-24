import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Similar() {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Box sx={{ paddingTop: "30px" }}>
      <Typography variant="h3" sx={{ marginLeft: "50px" }} color="#06b6d4">
        Төстэй бараанууд
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "scroll",
          marginTop: "20px",
        }}
      >
        <Card sx={{ width: 345, marginLeft: "50px", flexShrink: "0" }}>
          <CardMedia
            sx={{ height: 200, backgroundColor: "yellow" }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent
            sx={
              {
                //   display: "flex",
                //   flexDirection: "column",
                //   alignItems: "center",
              }
            }
          >
            <Typography variant="h4" component="div" color="#06b6d4">
              Card
            </Typography>
            {/* Rating */}
            <Rating
              value={value}
              readOnly
              size="small"
              sx={{ marginTop: "5px" }}
            />
            {/* Price */}
            <Typography variant="h6" color="#06b6d4" sx={{ marginTop: "10px" }}>
              69,970₮/month
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 345, marginLeft: "50px", flexShrink: "0" }}>
          <CardMedia
            sx={{ height: 200, backgroundColor: "yellow" }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent
            sx={{
              background:
                "linear-gradient(to right bottom,#55A3DF, #4BA58C,#1FC4DC,#5ECDB1)",
            }}
          >
            <Typography variant="h4" component="div" color="white">
              Card
            </Typography>
            {/* Rating */}
            <Rating
              value={value}
              readOnly
              size="small"
              sx={{ marginTop: "5px" }}
            />
            {/* Price */}
            <Typography variant="h6" color="white" sx={{ marginTop: "10px" }}>
              69,970₮/month
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
