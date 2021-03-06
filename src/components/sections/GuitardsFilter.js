import React, { useState, useContext } from "react";
import { Loader } from "../../utils/utilities";
import { Guitards } from "../../context/GuitardsProvider";

import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const BrandsFilter = ({ list, label, getName }) => {
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
          list.map((item, i) => (
            <div className="filter__box" key={i}>
              <span>{item.name}</span>
              <Checkbox value={item.name} onClick={e => getName(e)} />
            </div>
          ))
        ) : (
          <Loader title="Loading brands and woods" />
        )}
      </Collapse>
    </List>
  );
};

export default BrandsFilter;
