import React from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <table className="table-container">
      <tbody>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
