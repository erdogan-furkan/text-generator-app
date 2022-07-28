import { useSelector } from "react-redux";

function Content() {
  const content = useSelector((state) => state.text.content);
  const status = useSelector((state) => state.text.status);
  const error = useSelector((state) => state.text.error);

  return (
    <div className="content">
      {status === "loading" ? "Loading..." : error ? error : content}
    </div>
  );
}

export default Content;
