import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTextByFilter } from "../../redux/text/textSlice";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.text.content);
  const [number, setNumber] = useState(4);
  const [format, setFormat] = useState("text");

  useEffect(() => {
    dispatch(fetchTextByFilter({ number, format }));
  }, [number, format, dispatch]);

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h2>Filters</h2>
        <div
          className="copy"
          onClick={() => {
            navigator.clipboard.writeText(content);
            toast("Copied to clipboard!", {
              style: {
                background: "#333",
                color: "#fff",
              },
            });
          }}
        >
          Copy to clipboard
        </div>
      </div>

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
      <Toaster position="bottom-center" />
    </div>
  );
}

export default Form;
