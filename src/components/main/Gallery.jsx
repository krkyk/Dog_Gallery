import { Box } from "@mui/material";
import CreateCard from "./CreateCard";
import { useEffect, useState } from "react";
import { fetchImages } from "../../api";

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState(null);

  useEffect(() => {
    fetchImages("shiba").then((imageUrls) => {
      setImageUrls(imageUrls);
    });
  }, []);

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
      <CreateCard images={imageUrls} />
    </Box>
  );
}
