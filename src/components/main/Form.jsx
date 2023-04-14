import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [breed, setBreed] = useState("柴犬");

  function handleChange(event) {
    // eventが通常の動きをしませんよという宣言
    event.preventDefault();
    setBreed(event.target.value);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ my: 3, width: "50%" }}>
        <InputLabel id="breed-label">犬種</InputLabel>
        <Select
          labelId="breed-label"
          id="breed"
          value={breed}
          onChange={handleChange}
        >
          <MenuItem value={"shiba"}>柴犬</MenuItem>
          <MenuItem value={"boeder collie"}>ボーダーコリー</MenuItem>
          <MenuItem value={"pug"}>パグ</MenuItem>
          <MenuItem value={"pomeranian"}>ポメラニアン</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
