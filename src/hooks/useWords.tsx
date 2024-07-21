import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";



const generateWords = (count: number) => {    //randomly generate the words going to be typed 
    return faker.random.words(count).toLowerCase();
}


const useWords = (count: number) => {     //the self custom hook for use 
    const [words, setWords] = useState<string>(generateWords(count));
  
    const updateWords = () => {
      setWords(generateWords(count));
    }    
  
    return { words, updateWords };
  };
  


  export default useWords;