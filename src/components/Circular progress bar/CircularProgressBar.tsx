import React from 'react';
import './circularprogressbar.scss';

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - percentage) / 100) * circumference;

  return (
    <svg className="circular-progress-bar" width="100" height="100">
      <circle
        className="circular-progress-bar__background"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="5"
      />
      
      <circle
        className="circular-progress-bar__progress"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="5"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={progressOffset}
      />
    </svg>
  );
};

export default CircularProgressBar;
