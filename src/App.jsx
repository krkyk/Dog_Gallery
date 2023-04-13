import "./styles.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";

export default function App() {
  return (
    <>
      <Header />
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        <Card sx={{ maxWidth: 345, m: 3 }}>
          <CardMedia
            sx={{ height: 250 }}
            image="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
            title="cute dog"
          />
        </Card>
        <Card sx={{ maxWidth: 345, m: 3 }}>
          <CardMedia
            sx={{ height: 250 }}
            image="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
            title="cute dog"
          />
        </Card>
      </Box>
      <Footer />
    </>
  );
}
