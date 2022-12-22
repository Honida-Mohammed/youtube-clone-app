import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => setVideos(data.items)
    );
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 HMO Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};
// My prayers were answered
export default Feed;

