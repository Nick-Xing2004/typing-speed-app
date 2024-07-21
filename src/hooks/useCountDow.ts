import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds); 
  const intervalRef = useRef<NodeJS.Timer | null>(null);     
  const hasTimerEnded = timeLeft <= 0;
  const isRunning = intervalRef.current != null;

  const startCountdown = () => {
    if (!hasTimerEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);       
      }, 1000);     
    }
  };

  const resetCountdown = () => {     
    clearInterval(intervalRef.current!);
    intervalRef.current = null;      //setInterval ----> the js built-in function to dealing with repeated actions. 
    setTimeLeft(seconds);      
  };

  // when the countdown reaches 0, clear the countdown interval
  useEffect(() => {
    if (hasTimerEnded) {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;       
    }
  }, [hasTimerEnded]);

  // clear interval when component unmounts       
  useEffect(() => {    
    return () => clearInterval(intervalRef.current!);
  }, []);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdown;