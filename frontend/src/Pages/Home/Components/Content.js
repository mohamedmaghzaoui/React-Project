import styles from "../Css/content.module.css";
export const Content = () => {
  return (
    <div id={styles.content} className="position-absolute container-fluid ">
      <div className="text-light container-fluid py-3 row ">
        <div className="row col-3  ">
          <img
            className="img-fluid rounded-4    "
            src="data:image/jpeg;base64,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"
            alt=""
          />

          <p className="py-1 ">je peux creer facilement ton site web</p>
          <div className="row">
            <img
              style={{ height: "40px" }}
              className="img-fluid rounded-circle col-2 p-0 m-0"
              src="data:image/png;base64,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"
              alt=""
            />
            <span style={{ fontSize: "12px" }} className="py-2 fw-bold col ">
              Customer 1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
