"use client";

import { Slider } from "@/components/Slider/Slider";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { StyledTab } from "./page.styles";
import { ITab } from "@/interfaces";
import { Catalog } from "@/components/Catalog/Catalog";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = useState(0);
  const tabs: ITab[] = [
    {
      label: "Anillos",
      category: "rings",
    },
    {
      label: "Aretes",
      category: "earrings",
    },
    {
      label: "Manillas",
      category: "handles",
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Slider />
      <Box sx={{ marginY: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, index) => (
            <StyledTab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <Catalog category={tab.category} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
