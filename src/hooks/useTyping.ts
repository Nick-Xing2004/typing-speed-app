
import { useCallback, useEffect, useRef, useState } from "react";
import { isKeyboardCodeAllowed } from "../utils/helpers";

const useTypings = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0);   //the index of the current cursor 
  const [typed, setTyped] = useState<string>("");    
  const totalTyped = useRef(0);

  const keydownHandler = ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isKeyboardCodeAllowed(code)) {  
        return;     
      }

      switch (key) {
        case "Backspace":
          setTyped((prev) => prev.slice(0, -1));   //would return a new string truncating the last index of the old string
          setCursor((cursor) => cursor - 1);  
          totalTyped.current -= 1;
          break;
        default:
          setTyped((prev) => prev.concat(key));
          setCursor((cursor) => cursor + 1);
          totalTyped.current += 1;
      }
    };
    

  const clearTyped = () => {
    setTyped("");
    setCursor(0); 
  };

  const resetTotalTyped = () => {
    totalTyped.current = 0;
  };

  // attach the keydown event listener to record keystrokes
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);  

  return {
    typed,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped: totalTyped.current
  };
};

export default useTypings;
