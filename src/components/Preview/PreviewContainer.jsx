import React, { useState } from "react";
import { styled, flexCenter } from "@100mslive/react-ui";
import PreJoinScreen from "./PreJoinScreen";
import Preview from "../Preview";

const PreviewContainer = ({ token, onJoin, env, skipPreview, initialName }) => {
  const [isNameScreen, setIsNameScreen] = useState(!skipPreview);
  return (
    <Container>
      {isNameScreen ? (
        <PreJoinScreen
          initialName={initialName}
          setIsNameScreen={setIsNameScreen}
        />
      ) : (
        <Preview
          initialName={initialName}
          skipPreview={skipPreview}
          env={env}
          onJoin={onJoin}
          token={token}
        />
      )}
    </Container>
  );
};

const Container = styled("div", {
  width: "100%",
  ...flexCenter,
  flexDirection: "column",
});

export default PreviewContainer;
