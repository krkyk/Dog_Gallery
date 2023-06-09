import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function Form({ reloadImages }) {
  const [breed, setBreed] = useState("柴犬");
  const dogs = [
    { name: "柴犬", value: "shiba" },
    { name: "エアデールテリア", value: "airedale" },
    { name: "パグ", value: "pug" },
    { name: "ポメラニアン", value: "pomeranian" },
    { name: "エントレブッフ・キャトル・ドッグ", value: "entlebucher" },
    { name: "ラブラドール・レトリバー", value: "labrador" },
    { name: "シベリアン・ハスキー", value: "husky" },
    { name: "秋田犬", value: "akita" },
    { name: "パピヨン", value: "papillon" },
    { name: "サモエド", value: "samoyed" },
    { name: "ディンゴ", value: "dingo" }
  ];

  function handleChange(event) {
    // eventが通常の動きをしませんよという宣言
    event.preventDefault();
    const dogObj = dogs.find((dog) =>
      Object.values(dog).includes(event.target.value)
    );
    setBreed(dogObj.name);
    reloadImages(dogObj.value);
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
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>選択してください</em>;
            }

            return selected;
          }}
        >
          {dogs.map((dog) => {
            return <MenuItem value={dog.value}>{dog.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
