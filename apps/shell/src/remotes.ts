export default function getRemotes(env: Record<string, string>) {
  const atlas: string = env.VITE_ATLAS_REMOTE_URL;
  const nova: string = env.VITE_NOVA_REMOTE_URL;

  console.log("Configured Remotes - Atlas:", atlas);
  console.log("Configured Remotes - Nova:", nova);
  return {
    atlas: atlas,
    nova: nova,
  };
}
