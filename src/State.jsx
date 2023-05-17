import { atom } from 'recoil';

//for displaying the string
export const displayState = atom ({
    key: 'display',
    default: '0',
});
//for equation to be evaluated
export const equationState = atom({
    key: 'equation',
    default: '0',
});
