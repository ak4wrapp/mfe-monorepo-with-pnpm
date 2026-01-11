import React from "react";

const thStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "left",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
};

export default function AKApp() {
  return (
    <>
      <h2>Hello from AK!!</h2>
      <h4>My Projects</h4>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "16px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Project Name</th>
            <th style={thStyle}>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>React Concepts Made Easy</td>
            <td style={tdStyle}>
              <a
                href="https://ak-react-concepts-made-easy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </td>
          </tr>

          <tr>
            <td style={tdStyle}>2</td>
            <td style={tdStyle}>Metadata Driven Dynamic Forms</td>
            <td style={tdStyle}>
              <a
                href="https://metadata-driven-dynamic-forms.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </td>
          </tr>

          <tr>
            <td style={tdStyle}>3</td>
            <td style={tdStyle}>MFE Monorepo with PNPM</td>
            <td style={tdStyle}>
              <a
                href="https://mfe-monorepo-with-pnpm-shell.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
