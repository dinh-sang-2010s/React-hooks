import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

FilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

FilterForm.defaultProps = {
  onSubmit: null,
};
function FilterForm(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState("");

  //hooks useRef tạo ra 1 một obj và nó giữ lại data sau mỗi lần render không bị mất đi data.
  const typingTimeoutRef = useRef(null);

  function handleSearchOnChange(e) {
    const value = e.target.value;
    setSearch(value);

    if (!onSubmit) return;

    //kiểm tra nếu typing.current sau mỗi lần gõ thì nó sẽ xóa khoảng time set rồi set từ đâu

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // mỗi lần gõ sẽ đợi chờ 300ms sẽ submmit

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        search: value,
      };

      onSubmit(formValue);
    }, 300);
  }

  return (
    <form>
      <input type="text" value={search} onChange={handleSearchOnChange} />
    </form>
  );
}

export default FilterForm;
