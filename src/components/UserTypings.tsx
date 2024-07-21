import Caret from "./Caret";
import cn from 'classnames';   //importing the cn function from the classnames library

const UserTypings = ({userInput, className, words} : {userInput: string; className: string; words : string}) => {
    const typedCharacters = userInput.split('');

    return (
        <div className={`${className}`}>
            {typedCharacters.map((char, index) => {
                return <Character actual={char} key={`${char}_${index}`} expected={words[index]}/>; //the key attribute does not act too much here 
            })}
            <Caret />
        </div>
    );

}

const Character = ({actual, expected} : {actual : string; expected: string}) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";
    
    return <span className={cn({
        'text-primary-400': isCorrect && !isWhiteSpace,
        'text-red-500': !isCorrect && !isWhiteSpace,
        'bg-red-500/50': !isCorrect && isWhiteSpace
    })}>{expected}</span>
}







export default UserTypings;