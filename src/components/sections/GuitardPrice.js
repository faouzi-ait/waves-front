import React, { useState, useContext } from "react";
import { Loader } from "../../utils/utilities";
import { Guitards } from "../../context/GuitardsProvider";

import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const BrandsFilter = ({ label, getName }) => {
  const [guitards] = useContext(Guitards);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = _ => {
    setIsOpen(!isOpen);
  };

  getName(selectedValue);

  return (
    <List style={{ width: "80%" }}>
      <ListItem
        style={{
          borderBottom: "1px solid #bdbdbd",
          padding: "10px 0 7px 4.3rem"
        }}
        onClick={handleClick}
      >
        <ListItemText primary={label} className="collapse_title" />
        {isOpen ? (
          <i className="fa fa-chevron-up"></i>
        ) : (
          <i className="fa fa-chevron-down"></i>
        )}
      </ListItem>
      <Collapse in={isOpen}>
        {!guitards.loading.get ? (
          <>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={selectedValue}
            >
              <div className="filter__box">
                <span>Less than $500</span>
                <Radio
                  onChange={e => setSelectedValue(e.target.value)}
                  value="l500"
                  name="l500"
                />
                <span>Between $500 & $1000</span>
                <Radio
                  onChange={e => setSelectedValue(e.target.value)}
                  value="b500&1000"
                  name="b500&1000"
                />
                <span>More than &1000</span>
                <Radio
                  onChange={e => setSelectedValue(e.target.value)}
                  value="m1000"
                  name="m1000"
                />
              </div>
            </RadioGroup>
          </>
        ) : (
          <Loader title="Loading brands and woods" />
        )}
      </Collapse>
    </List>
  );
};

export default BrandsFilter;
