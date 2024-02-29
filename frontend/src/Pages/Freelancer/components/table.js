import { MdDelete } from "react-icons/md";
export const Table = (props) => {
  const deleteLanguage = (language) => {
    props.setLanguages((prevLanguages) =>
      prevLanguages.filter((value) => value !== language)
    );
  };
  return (
    <table className="my-2 table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">language</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.Languages.map((value, index) => (
          <tr key={index}>
            <td>
              <span className="">{value}</span>
            </td>
            <td>
              <div>
                <MdDelete
                  onClick={() => deleteLanguage(value)}
                  style={{ cursor: "pointer" }}
                  className="mx-2 text-danger"
                  size={25}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
