// // src/remotes.ts
// export default function getRemotes(mode: string) {
//   return {
//     development: {
//       atlas: "http://localhost:5174/atlas/remoteEntry.v1.js",
//       nova: "http://localhost:5175/nova/remoteEntry.v1.js",
//     },
//     production: {
//       atlas: "/atlas/remoteEntry.v1.js",
//       nova: "/nova/remoteEntry.v1.js",
//     },
//   }[mode];
// }

export default function getRemotes(mode: string) {
  return {
    development: {
      atlas: "http://localhost:5174/assets/remoteEntry.v1.js",
      nova: "http://localhost:5175/assets/remoteEntry.v1.js",
    },
    production: {
      atlas: "/atlas/assets/remoteEntry.v1.js",
      nova: "/nova/assets/remoteEntry.v1.js",
    },
  }[mode];
}
