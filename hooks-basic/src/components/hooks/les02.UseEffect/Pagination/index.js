import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

function Pagination(props) {
  const { onPageChange, pagination } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  const styleButton = {
    marginRight: 5,
    width: 50,
    borderRadius: 50,
    height: 35,
  };

  const styleNumber = {
    width: 50,
    height: 35,
    border: "2px solid black",
    textAlign: "center",
    lineHeight: 2,
    marginRight: 5,
    borderRadius: 20,
  };

  return (
    <div className="pagination" style={{ justifyContent: "center" }}>
      <button
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
        style={styleButton}
      >
        Prev
      </button>
      <div className="row m-0">
        <div className="col" style={styleNumber}>
          1
        </div>
      </div>

      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
        style={styleButton}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
