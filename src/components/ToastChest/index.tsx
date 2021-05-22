import React, { useState, useEffect } from "react";
import {
  DEFAULT_TOAST,
  TOAST_CHEST_HEALTH,
  TOAST_CHEST_RANDOM,
} from "../../constants";

import ErrorModal from "../ErrorModal/";
import * as Styled from "./styled";

import type { Props, ToastChestResp } from "./types";

const ToastChest: React.FC<Props> = () => {
  const [toast, setToast] = useState<string>(DEFAULT_TOAST);
  const [error, setError] = useState<boolean>(false);

  const loadNewToast = async () => {
    try {
      const resp = await fetch(TOAST_CHEST_RANDOM);
      const data: ToastChestResp = await resp.json();
      setToast(data.Toast);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  // Ping Toast Chest API on initial render to warm it up,
  // since free Heroku dynos sleep after 30 minutes.
  useEffect(() => {
    fetch(TOAST_CHEST_HEALTH);
  }, []);

  return (
    <Styled.AppContainer>
      <Styled.Header>
        {error && <ErrorModal isOpen={true} onClose={() => setError(false)} />}

        <Styled.Text>{toast}</Styled.Text>
        <Styled.GenerateButton onClick={() => loadNewToast()}>
          {toast ? "Another!" : "Generate a toast!"}
        </Styled.GenerateButton>
      </Styled.Header>
    </Styled.AppContainer>
  );
};

export default ToastChest;
