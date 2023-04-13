import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";

export default function CreateCard({ images }) {
  if (images === null) {
    return (
      <Box sx={{ display: "flex", ml: 20, my: 10 }}>
        <CircularProgress color="inherit" sixe={45} />
        <Typography variant="h4" sx={{ ml: 2 }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {images.map((image, index) => {
        return (
          <Card elevation={4} sx={{ m: 3 }} key={index}>
            <CardMedia sx={{ height: 250 }} image={image} title="cute dog" />
          </Card>
        );
      })}
    </>
  );
}
