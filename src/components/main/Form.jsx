import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function Form({ reloadImages }) {
  // API取得URL用
  const [breed, setBreed] = useState("shiba");
  // 検索ボックス表示用
  const [breedName, setBreedName] = useState("柴犬");
  const dogs = [
    { name: "柴犬", value: "shiba" },
    { name: "エアデールテリア", value: "airedale" },
    { name: "パグ", value: "pug" },
    { name: "ポメラニアン", value: "pomeranian" },
    { name: "エントレブッフ・キャトル・ドッグ", value: "entlebucher" },
    { name: "ラブラドール・レトリバー", value: "labrador" }
  ];

  function handleChange(event) {
    // eventが通常の動きをしませんよという宣言
    event.preventDefault();
    dogs.forEach((dog) => {
      if (Object.values(dog).includes(event.target.value)) {
        setBreedName(dog.name);
        setBreed(event.target.value);
      }
    });
    // breedにはまだ前回の状態が入っているのでevent.target.valueを渡す
    reloadImages(event.target.value);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ my: 3, width: "50%" }}>
        <InputLabel id="select-label">犬種</InputLabel>
        <Select
          labelId="select-label"
          id="select-breed"
          value={breedName}
          label="犬種"
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>選択してください</em>;
            }

            return selected;
          }}
        >
          <MenuItem value={"shiba"}>柴犬</MenuItem>
          <MenuItem value={"airedale"}>エアデールテリア</MenuItem>
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
