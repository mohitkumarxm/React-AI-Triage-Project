import { useEffect, useRef, useState } from "react";

type Options = {
  text: string;
  speed?: number;
  enabled?: boolean;
};

export function useStreamingText({
  text,
  speed = 18,
  enabled = true,
}: Options) {
  const [streamedText, setStreamedText] = useState("");

  const [isStreaming, setIsStreaming] = useState(false);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled || !text) {
      setStreamedText(text);
      setIsStreaming(false);

      return;
    }

    let currentIndex = 0;

    setIsStreaming(true);

    intervalRef.current = window.setInterval(() => {
      currentIndex++;

      setStreamedText(text.slice(0, currentIndex));

      if (currentIndex >= text.length) {
        setIsStreaming(false);

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed, enabled]);

  function stopStreaming() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setStreamedText(text);

    setIsStreaming(false);
  }

  return {
    streamedText,
    isStreaming,
    stopStreaming,
  };
}
