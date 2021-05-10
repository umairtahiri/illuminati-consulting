import React from "react";
import { Select } from "antd";

import "./styles.scss";

const { Option } = Select;

const IlluminatiSelect = ({ option, defaultOption, style }) => {
  return (
    <Select defaultValue={defaultOption} style={style}>
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
