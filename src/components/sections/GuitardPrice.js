import React, { useState, useContext } from 'react';
import { Loader } from '../../utils/utilities';
import { Guitards } from '../../context/GuitardsProvider';

import ListItemText from '@material-ui/core/ListItemText';
import RadioGroup from '@material-ui/core/RadioGroup';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import Radio from '@material-ui/core/Radio';
import List from '@material-ui/core/List';

const BrandsFilter = ({ label, getPriceRange }) => {
  const [guitards] = useContext(Guitards);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');

  const handleClick = () => setIsOpen(!isOpen);

  getPriceRange(selectedValue);

  return (
    <List style={{ width: '80%' }}>
      <ListItem
        style={{
          borderBottom: '1px solid #bdbdbd',
          padding: '10px 0 7px 4.3rem',
        }}
        onClick={handleClick}>
        <ListItemText primary={label} className="collapse_title" />
        <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </ListItem>
      <Collapse in={isOpen}>
        {!guitards.loading.get ? (
          <>
            <RadioGroup value={selectedValue}>
              <div className="filter__box">
                <span>All Prices</span>
                <Radio
                  onChange={(e) => setSelectedValue(e.target.value)}
                  value="all"
                />
                <span>Less than $500</span>
                <Radio
                  onChange={(e) => setSelectedValue(e.target.value)}
                  value="l500"
                />
                <span>Between $500 &amp; $1000</span>
                <Radio
                  onChange={(e) => setSelectedValue(e.target.value)}
                  value="b500&amp;1000"
                />
                <span>More than $1000</span>
                <Radio
                  onChange={(e) => setSelectedValue(e.target.value)}
                  value="m1000"
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
