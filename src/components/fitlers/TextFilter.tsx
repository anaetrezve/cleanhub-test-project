import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

type TextFilterProps = {
  value: string;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextFilter: FC<TextFilterProps> = ({ value = "", onSearch }) => {
  return (
    <TextField
      fullWidth
      value={value}
      label="Search by hub name"
      size="small"
      onChange={onSearch}
    />
  );
};

export default TextFilter;
