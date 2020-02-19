import React, { useState, useContext } from "react";
import { Loader } from "../../utils/utilities";
import { Guitards } from "../../context/GuitardsProvider";

import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const BrandsFilter = ({ label, getName }) => {
  const [guitards] = useContext(Guitards);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = _ => {
    setIsOpen(!isOpen);
  };

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
            <FormLabel component="legend" className="filter__label--box">
              Select a price range option below
            </FormLabel>
            <div className="filter__box">
              <span>Less than $500</span>
              <Checkbox value="l500" onClick={e => getName(e)} />
              <span>Between $500 & $1000</span>
              <Checkbox value="b500&1000" onClick={e => getName(e)} />
              <span>More than &1000</span>
              <Checkbox value="m1000" onClick={e => getName(e)} />
            </div>
          </>
        ) : (
          <Loader title="Loading brands and woods" />
        )}
      </Collapse>
    </List>
  );
};

export default BrandsFilter;
