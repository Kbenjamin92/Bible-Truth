import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { dictionary } from "../../../dictionary";
import { useDropdownStyles } from "./useDropdownStyles";

export const DropdownComponent = () => {
  const classes = useDropdownStyles();

  return (
    <>
      <Dropdown className={classes.dropdownContainer}>
        <Dropdown.Toggle variant='warning' id='dropdown-basic'>
          {dictionary.DROPDOWN_TITLE}
        </Dropdown.Toggle>
        {/* UPDATE end point for items in the list */}
        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>
            {dictionary.DROPDOWN_ITEM_ONE}
          </Dropdown.Item>
          <Dropdown.Item href='#/action-2'>
            {dictionary.DROPDOWN_ITEM_TWO}
          </Dropdown.Item>
          <Dropdown.Item href='#/action-3'>
            {dictionary.DROPDOWN_ITEM_THREE}
          </Dropdown.Item>
          <Dropdown.Item href='#/action-4'>
            {dictionary.DROPDOWN_ITEM_FOUR}
          </Dropdown.Item>
          <Dropdown.Item href='#/action-5'>
            {dictionary.DROPDOWN_ITEM_FIVE}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
