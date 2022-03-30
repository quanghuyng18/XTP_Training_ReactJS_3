import React from "react";
import PropTypes from "prop-types";

Person.propTypes = {};

function Person(props) {
  const { item } = props;

  return (
    <div>
      <div>
        Thong tin sinh vien:
        <div>MSSV: {item.id}</div>
        <div>Ho Ten: {item.name}</div>
      </div>

      <div>Diem mon hoc:
          <div>Toan: {item.points.math}</div>
          <div>Tieng anh: {item.points.english}</div>
          <div>Su: {item.points.history}</div>
          
      </div>
      <hr/>
    </div>
  );
}

export default Person;
