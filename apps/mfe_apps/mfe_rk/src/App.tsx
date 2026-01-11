import React from "react";
import { CustomButton } from "@packages/ui";

export default function mfe_rk() {
  const storyUrl =
    "https://react-concepts-made-easy.vercel.app/learning/excercise/random-story-generator";

  return (
    <>
      <h2>Hello from RK!! why the dog here !!!!</h2>
      <pre>Read a story?</pre>
      <h4>
        click{" "}
        <CustomButton onClick={() => window.open(storyUrl, "_blank")}>
          here
        </CustomButton>
      </h4>
    </>
  );
}
