import '../css/components/Table.css'

function Table({ designer, tags, similarFonts, tools, writingSystems, license, published }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Designed by</td>
          <td>{designer[0]?.name || "N/A"}</td>
        </tr>
        <tr>
          <td>Built With</td>
          <td>{tags.join(', ') || "N/A"}</td>
        </tr>
        <tr>
          <td>Similar Fonts</td>
          <td>{similarFonts.join(', ') || "N/A"}</td>
        </tr>
        <tr>
          <td>Built With</td>
          <td>{tools}</td>
        </tr>
        <tr>
          <td>Writing systems</td>
          <td>{writingSystems}</td>
        </tr>
        <tr>
          <td>License</td>
          <td>{license}</td>
        </tr>
        <tr>
          <td>Published</td>
          <td>{published}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
