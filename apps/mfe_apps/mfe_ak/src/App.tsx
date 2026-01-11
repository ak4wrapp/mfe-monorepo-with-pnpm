import React from "react";
import { CustomButton } from "@packages/ui";

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
  const projects = [
    {
      id: 1,
      name: "React Concepts Made Easy",
      url: "https://ak-react-concepts-made-easy.vercel.app/",
    },
    {
      id: 2,
      name: "Metadata Driven Dynamic Forms",
      url: "https://metadata-driven-dynamic-forms.vercel.app/",
    },
    {
      id: 3,
      name: "MFE Monorepo with PNPM",
      url: "https://mfe-monorepo-with-pnpm-shell.vercel.app/",
    },
  ];

  return (
    <>
      <h2>Hello from AK!!</h2>
      <h4>List of My Projects</h4>

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
          {projects.map((project) => (
            <tr key={project.id}>
              <td style={tdStyle}>{project.id}</td>
              <td style={tdStyle}>{project.name}</td>
              <td style={tdStyle}>
                <CustomButton
                  onClick={() => window.open(project.url, "_blank")}
                >
                  Visit
                </CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
