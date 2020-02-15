import React, { useState } from "react";
import { Loader } from "../../utils/utilities";

import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const BrandsFilter = ({ list, label, getName }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        {list.map((item, i) => (
          <div className="filter__box" key={i}>
            <span>{item.name}</span>
            <Checkbox value={item.name} onClick={e => getName(e)} />
          </div>
        ))}
      </Collapse>
    </List>
  );
};

export default BrandsFilter;
