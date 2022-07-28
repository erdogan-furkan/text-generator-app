import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTextByFilter } from "../../redux/text/textSlice";

function Form() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(4);
  const [format, setFormat] = useState("text");

  useEffect(() => {
    dispatch(fetchTextByFilter({ number, format }));
  }, [number, format, dispatch]);

  return (
    <div className="form-wrapper">
      <h2>Filters</h2>

      <div className="form">
        <div className="form-item">
          <label htmlFor="format">Paragraphs</label>
          <input
            type="number"
            min="0"
            value={number}
            onChange={(e) => {
              if (!e.target.value || e.target.value === "") return false;
              if (e.target.value < 0) return false;
              if (!isNaN(e.target.value)) return setNumber(e.target.value);
            }}
          />
        </div>

        <div className="form-item">
          <label htmlFor="format">Include HTML</label>
          <select name="format" onChange={(e) => setFormat(e.target.value)}>
            <option value="text">No</option>
            <option value="html">Yes</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;
