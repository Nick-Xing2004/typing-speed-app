import classNames from 'classnames';
import {MdRefresh} from 'react-icons/md';
import {useRef} from 'react';

//the useEfect runs after the re-render of the component 
const RestartButton = ({onRestart: handleRestart, className = ''} : {onRestart: () => void; className: string}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    const handleClick = () => {
        buttonRef.current?.blur();
        handleRestart();
    }

    return (
        <button onClick={handleClick} className={`px-8 py-2 rounded block hover:bg-slate-700/50 ${className}`}>
            <MdRefresh className='w-6 h-6'/>
        </button>
    );
}

export default RestartButton;