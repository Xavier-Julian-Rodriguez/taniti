"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ButtonSizes({ buttonText }) {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Button
        variant="contained"
        size="medium"
        sx={{
          padding: "8px 16px !important",
          margin: "0 100px !important",
          bgcolor: "#15ae5d",
          color: "#ffffff",
          border: "solid 1px #000000",
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
