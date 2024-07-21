import React from 'react';
import {faker} from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import useEngine from './hooks/useEngine';
import { calculateAccuracyPercentage } from './utils/helpers';

function App() {
  const {state, words, timeLeft, typed, errors, totalTyped, restart} = useEngine();    //the typed is a string || words is also a string

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypings userInput={typed} className='absolute inset-0' words={words}/>
      </WordsContainer>
      <RestartButton className='mx-auto mt-10 text-slate-500' onRestart={restart}/>
      <Results state={state} total={totalTyped} errors={errors} className='mt-100' accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}/>  
    </>
  );
}


const WordsContainer = ({children} : {children : React.ReactNode}) => {
    return (
      <div className='max-w-xl mt-3 relative text-3xl leading-relaxed break-all'>
        {children}
      </div>
    );
}

const GenerateWords = ({words}: {words: string}) => {
  return <div className='text-slate-500'>{words}</div>;
}

const CountdownTimer = ({timeLeft}: {timeLeft: number}) => {
  return <h2 className='text-primary-400 font-medium'>Time: {timeLeft}</h2>;
}

export default App;
