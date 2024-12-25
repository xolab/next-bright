"use client"
import React from "react";

function RevealContent({children}) {
  const [
    isSnippetShown,
    setIsSnippetShown,
  ] = React.useState(false);

  if (isSnippetShown) {
    return children;
  }

  return (
    <div className="reveal">
      <button
        onClick={() =>
          setIsSnippetShown(true)
        }
      >
        Reveal Content
      </button>
    </div>
  );
}

export default RevealContent;
