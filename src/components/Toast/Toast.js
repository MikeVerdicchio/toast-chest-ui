import React, { useState, useEffect } from "react";
import {
  DEFAULT_TOAST,
  TOAST_CHEST_HEALTH,
  TOAST_CHEST_RANDOM,
} from "../../constants";
import "./Toast.css";

function Toast() {
  const [toast, setToast] = useState(null);
  const loadNewToast = async () => {
    const resp = await fetch(TOAST_CHEST_RANDOM);
    const data = await resp.json();
    setToast(data.Toast);
  };
  const handleClick = () => loadNewToast();

  // Ping Toast Chest API on initial render to warm it up,
  // since free Heroku dynos sleep after 30 minutes.
  useEffect(() => {
    fetch(TOAST_CHEST_HEALTH);
  }, []);

  return (
    <div>
      <p className="Toast-text">{toast || DEFAULT_TOAST}</p>
      <button
        className="btn btn-light btn-sm"
        type="submit"
        onClick={handleClick}
      >
        {toast ? "Another!" : "Generate a toast!"}
      </button>
    </div>
  );
}

export default Toast;
