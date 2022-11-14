import React from "react";
import { useState } from "react";
const ListItem = ({ item }) => {
  const values = Object.entries(item);

  return (
    <tr>
      {values.map((data) => (
        <td key={data[0]}>{JSON.stringify(data[1])}</td>
      ))}
    </tr>
  );
};

export default ListItem;
