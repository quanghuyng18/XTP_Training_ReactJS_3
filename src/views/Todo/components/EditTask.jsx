import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

EditTask.propTypes = {
  isOpenEdit: PropTypes.bool.isRequired,
  valueEdit: PropTypes.string.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
  handleCloseEdit: PropTypes.func.isRequired,
};

function EditTask(props) {
  const { isOpenEdit, valueEdit } = props;
  const [valueInputEdit, setValueInputEdit] = useState('');
  useEffect(() => {
    setValueInputEdit(valueEdit);
  }, [valueEdit]);

  const handleInputEdit = (e) => {
    setValueInputEdit(e.target.value);
  };
  const handleSaveEdit = () => {
    props.handleSaveEdit(valueInputEdit);
  };
  const handleCloseEdit = () => {
    props.handleCloseEdit();
  };
  return (
    <div
      className={classNames({
        todo__edit: true,
        edit: true,
        'display-none': isOpenEdit,
      })}
    >
      <div className="edit__title">Edit: </div>
      <div className="edit__content content">
        <input
          className="content__input-todo mb-15"
          placeholder="Edit"
          name="inputEdit"
          value={valueInputEdit}
          onChange={handleInputEdit}
        />
        <div className="content__button right mr-10">
          <button className="btn btn--primary pointer mr-15" onClick={handleSaveEdit}>
            Lưu
          </button>
          <button className="btn btn--secondary pointer" onClick={handleCloseEdit}>
            Thoát
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
