import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './circular.scss';

function Circular() {
    return (
        <CircularProgressbar
            value={50}
            text={`${50}%`}
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',

                // Text size
                textSize: '18px',
                pathColor: `red`,
                textColor: 'white',
                trailColor: '#d6d6d6',
                backgroundColor: 'red',

            })}
        />
    )
}

export default Circular
