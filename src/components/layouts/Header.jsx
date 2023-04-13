import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "#a0522d" }}
    >
      <Typography variant="h4" sx={{ p: 2, ml: 5 }}>
        Cute Dog Gallery
      </Typography>
    </AppBar>
  );
}
