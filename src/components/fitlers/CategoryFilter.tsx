import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { FC, useMemo } from "react";
import { toTitleCase } from "../../utils";
import { Hub } from "../../types/hubs";

type CategoryFilterProps = {
  data: Hub[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
};

const CategoryFilter: FC<CategoryFilterProps> = ({ data = [], value = "", onChange }) => {
  const categories = useMemo(() => {
    const allCategories = data?.map((hub) => {
      return toTitleCase(hub.category || "");
    });

    return [...new Set(allCategories)] || [];
  }, [data]);

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Category"
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {categories?.map((category) => {
          return (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
