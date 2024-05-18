"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../styles/navigation.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(window) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.container} sx={{ width: "90%" }}>
      <Box
        className={styles.box}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className={styles.tabs}
        >
          <Tab
            className={styles.label}
            label="HOME"
            {...a11yProps(0)}
            href="/"
          />
          <Tab
            className={styles.label}
            label="ABOUT"
            {...a11yProps(1)}
            href="/about"
          />
          <Tab
            className={styles.label}
            label="THINGS TO DO"
            {...a11yProps(2)}
            href="/things-to-do"
          />
          <Tab
            className={styles.label}
            label="FAQ"
            {...a11yProps(3)}
            href="/faq"
          />
          <Tab
            className={styles.label}
            label="CONTACT"
            {...a11yProps(4)}
            href="/contact"
          />
        </Tabs>
      </Box>
    </Box>
  );
}
