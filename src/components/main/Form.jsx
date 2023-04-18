import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function Form({ reloadImages }) {
  const [breed, setBreed] = useState("柴犬");
  const dogs = [
    { name: "パグ", value: "pug" },
    { name: "ボーダーコリー", value: "boeder collie" },
    { name: "ポメラニアン", value: "pomeranian" },
    { name: "エントレブッフ・キャトル・ドッグ", value: "entlebucher" },
    { name: "ラブラドール・レトリバー", value: "labrador" }
  ];
  // console.log(breed);

  function handleChange(event) {
    // eventが通常の動きをしませんよという宣言
    event.preventDefault();
    dogs.map((dog) => {
      if (Object.values(dog).includes(event.target.value)) {
        return setBreed(dog.name);
        // return console.log(dog.name);
      } else {
        return null;
      }
    });

    reloadImages(breed);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ my: 3, width: "50%" }}>
        <InputLabel id="select-label">犬種</InputLabel>
        <Select
          labelId="select-label"
          id="select-breed"
          value={breed}
          label="犬種"
          name={"a"}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>選択してください</em>;
            }

            return selected;
          }}
        >
          <MenuItem value={"shiba"}>柴犬</MenuItem>
          <MenuItem value={"boeder collie"}>ボーダーコリー</MenuItem>
          <MenuItem value={"pug"}>パグ</MenuItem>
          <MenuItem value={"pomeranian"}>ポメラニアン</MenuItem>
          <MenuItem value={"entlebucher"}>
            エントレブッフ・キャトル・ドッグ
          </MenuItem>
          <MenuItem value={"labrador"}>ラブラドール・レトリバー</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
