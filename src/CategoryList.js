import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function CategoryList({ data, onSelectId }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
    onSelectId(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          {data?.length &&
            data?.map(
              (item) =>
                item?.parentId === null && (
                  <React.Fragment>
                    <FormControlLabel
                      key={item?.id}
                      value={item?.id}
                      control={<Radio />}
                      label={item?.category}
                    />
                  </React.Fragment>
                )
            )}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default CategoryList;
