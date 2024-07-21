import {motion} from 'framer-motion';
import { formatPercentage } from '../utils/helpers';   
import { State } from '../hooks/useEngine';

const Results = ({state, errors, accuracyPercentage, total, className} : {errors: number; 
    accuracyPercentage: number; 
    total: number; 
    className: string;
    state: State}) => {
        const initial = {opacity: 0};
        const animate = {opacity: 1};
        const duration = {duration: 0.3};
        

        if (state === 'finish') {
            return (
                <motion.ul className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}>
                    <motion.li initial={initial} animate={animate} transition={{...duration, delay: 0}} className="text-xl font-semibold">Results:</motion.li>
                    <motion.li initial={initial} animate={animate} transition={{...duration, delay: 0.5}} className="">Accuracy: {formatPercentage(accuracyPercentage)}</motion.li>
                    <motion.li initial={initial} animate={animate} transition={{...duration, delay: 1}} className="text-red-500">Errors: {errors}</motion.li>
                    <motion.li initial={initial} animate={animate} transition={{...duration, delay: 1.4}} >Typed: {total}</motion.li>
                </motion.ul>
                
            );
        }
        else {
            return null;
        }
        
}

export default Results;