import {useCallback, useState} from 'react';
import useWords from './useWords';
import useCountdown from './useCountDow';
import useTypings from './useTyping';
import {countErrors, calculateAccuracyPercentage} from '../utils/helpers';
import { useEffect } from 'react';

export type State = 'start' | 'run' | 'finish';

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const {words, updateWords} = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdown(COUNTDOWN_SECONDS);
    const {typed, cursor, clearTyped, resetTotalTyped, totalTyped} = useTypings(state !== 'finish');  


    const [errors, setErrors] = useState(0);

    const isStarting = state === 'start' && cursor > 0;
    const areWordsFinished = cursor === words.length;      

    const sumeErrors = () => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prev) => {         //this function would only change the value of the state errors 
            return prev + countErrors(typed, wordsReached);     
        });
    }

    useEffect(() => {
        if (isStarting) {
            setState('run');
            startCountdown();
        }
    }, [isStarting, startCountdown]);


    useEffect(() => {
        if (!timeLeft) {
            setState('finish');
            sumeErrors();
            console.log('time is up!');
        }
    }, [timeLeft, state]);         


    useEffect(() => {   //once the words are finished, then we began to sum the errors
        if (areWordsFinished) {    //the execution of the following codes are determined by the value of the areWordsFinished
          console.log("words are finished...");   
          sumeErrors();
          updateWords();    
          clearTyped();      
        }
      }, [clearTyped, areWordsFinished, updateWords, sumeErrors]);



    const restart = () => {
        console.log("restarting...");
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updateWords();
        clearTyped();     
    };


    return {state, words, timeLeft, typed, errors, totalTyped, restart};    
}




export default useEngine;