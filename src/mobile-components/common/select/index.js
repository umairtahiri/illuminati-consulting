import React, { useState } from "react";
import { Select } from "antd";

import selectArrow from "../../../images/select-arrow.svg";

import "./styles.scss";

const { Option } = Select;

const IlluminatiSelect = ({ option, defaultOption, style }) => {
  const [open, setOpen] = useState(false);

  const suffixIcon = (
    <img
      style={{ transform: open ? `rotate(180deg)` : `rotate(0deg)` }}
      src={selectArrow}
      alt=""
    />
  );
  return (
    <Select
      defaultValue={defaultOption}
      style={style}
      suffixIcon={suffixIcon}
      onDropdownVisibleChange={(open) => setOpen(open)}
    >
      {option &&
        option.map((o, index) => (
          <Option className="option" value={o.value} key={index}>
            {o.label}
          </Option>
        ))}
    </Select>
  );
};

export default IlluminatiSelect;
