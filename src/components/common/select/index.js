import React from "react";
import { Select } from "antd";

import "./styles.scss";

const { Option } = Select;

const IlluminatiSelect = ({ option, placeholder }) => {
  return (
    <Select open>
      <Option>Abc</Option>
      <Option>Def</Option>
      <Option>Ghi</Option>
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
