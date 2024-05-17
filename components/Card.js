"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ image, heading, text, alt }) {
  return (
    <Card sx={{ width: "33%" }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt={alt} />
        <CardContent sx={{ padding: "3rem 1rem !important" }}>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
