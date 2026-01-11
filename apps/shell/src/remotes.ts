export default function getRemotes(env: Record<string, string>) {
  const mfe_ak: string = env.VITE_mfe_ak_REMOTE_URL;
  const mfe_rk: string = env.VITE_mfe_rk_REMOTE_URL;

  console.log("Configured Remotes - mfe_ak:", mfe_ak);
  console.log("Configured Remotes - mfe_rk:", mfe_rk);
  return {
    mfe_ak: mfe_ak,
    mfe_rk: mfe_rk,
  };
}
