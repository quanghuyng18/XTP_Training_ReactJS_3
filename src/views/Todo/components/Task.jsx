import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

Task.propTypes = {
    handleStatus: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

function Task(props) {
    const {items} = props;
    const handleStatus = (index, status) =>{
        props.handleStatus(index, status);
    }
    const handleEdit = (index) =>{   
        props.handleEdit(index)
    }
    const handleDelete = (index) =>{
        props.handleDelete(index);
    }
    return (
        <div className="todo__task task">
        <div className="task__title">Task</div>
        <div className="task__content content">
          <table className="task__table table">
            <thead>
              <tr>
                <th>Items </th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className={classNames({
                      new: item.status === "new",
                      completed: item.status === "completed",
                      depending: item.status === "depending",
                    })}
                  >
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        className="btn btn--primary mr-15 pointer"
                        onClick={() => handleStatus(index, "new")}
                      >
                        New
                      </button>
                      <button
                        className="btn btn--primary mr-15 pointer"
                        onClick={() => handleStatus(index, "depending")}
                      >
                        Depending
                      </button>
                      <button
                        className="btn btn--primary mr-15 pointer"
                        onClick={() => handleStatus(index, "completed")}
                      >
                        Complete
                      </button>
                      <button
                        className="btn btn--primary mr-15 pointer"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn--secondary mr-15 pointer"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Task;