import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

// Create the FileList component. In the interest of doing the simplest thing that
// can possibly work, we’ll render a plain unordered list of file names. Once it
// works we’ll extract the list items into a FileListItem component.
const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

function getFileName(file) {
  return [
    <FileIcon file={file} key={0} />,
    <td className="file-name" key={1}>
      {file.name}
    </td>,
  ];
}

function FileIcon({ file }) {
  let icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
}

const FileListItem = ({ file }) => (
  <tr className="file-list-item">{getFileName(file)}</tr>
);


const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  // notice small p
  files: PropTypes.array, // notice big P
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};


ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
