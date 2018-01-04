import { StyleSheet } from 'aphrodite/no-important';

import { blackSquare } from './squareStyles';

export default StyleSheet.create({
    container: {
        background: '#bfbea7',
        display: 'flex'
    },
    square: {
        ...blackSquare,
        width: '200px',
        height: '250px'
    }
});