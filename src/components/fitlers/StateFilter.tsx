import { FormControlLabel, Checkbox } from "@mui/material";
import { ChangeEvent, FC } from "react";

type StateFilterProps = {
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const StateFilter: FC<StateFilterProps> = ({ checked = false, onChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label="Active State"
    />
  );
};

export default StateFilter;
