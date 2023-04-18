import { Box } from "@mui/material";
import CreateCard from "./CreateCard";
import { useEffect, useState } from "react";
import { fetchImages } from "../../api";
import Form from "./Form";

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState(null);

  useEffect(() => {
    fetchImages("shiba").then((imageUrls) => {
      setImageUrls(imageUrls);
    });
  }, []);

  function reloadImages(prop) {
    fetchImages(prop).then((imageUrls) => {
      setImageUrls(imageUrls);
    });
  }

  return (
    <>
      <Form reloadImages={reloadImages} />
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        <CreateCard images={imageUrls} />
      </Box>
    </>
  );
}
