import { error } from "console";

export const formatPercentage = (percentage: number) => {
    return percentage.toFixed(0) + '%';    //to fixed will take a number para and covert it to a string 
}


export const isKeyboardCodeAllowed = (code: string) => {
    return (     //the name of the typed key 
      code.startsWith("Key") ||
      code.startsWith("Digit") ||
      code === "Backspace" ||
      code === "Space"
    );
  };



export const countErrors = (actual : string, expected : string) => {
  const expectedString = expected.split('');

  const errors = expectedString.reduce((errors, char, index) => {
    if (char !== actual[index]) {
      errors++;
    }
    return errors;
  }, 0);

  return errors;
}


export const calculateAccuracyPercentage = (errors: number, total : number) => {
  const numOfCorrect = total - errors;
  return numOfCorrect / total * 100;
}