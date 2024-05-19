"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "../styles/card.module.css";

export default function ActionAreaCard({ image, heading, text, alt }) {
  return (
    <Card sx={{ width: "33%" }} className={styles.card}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt={alt} />
        <CardContent sx={{ padding: "0rem 5% 5% 5% !important" }}>
          <Typography gutterBottom variant="body3" component="div">
            {heading}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{paddingTop:"3rem !important"}}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
