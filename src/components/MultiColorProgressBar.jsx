import React from 'react';


const MultiColorProgressBar = ({ segments }) => {
    const radius = 28;
    const strokeWidth = 5.5;
    const viewBoxSize = radius * 2 + strokeWidth * 2;
    const circumference = 2 * Math.PI * radius;

    const renderSegments = () => {
        let currentOffset = 0;

        return segments.map((segment, index) => {
            const { color, percentage } = segment;
            const segmentLength = (percentage / 100) * circumference;
            const offset = currentOffset;
            currentOffset -= segmentLength;

            return (
                <circle
                    key={index}
                    cx={viewBoxSize / 2}
                    cy={viewBoxSize / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeDasharray={`${segmentLength} ${circumference}`}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`}
                />
            );
        });
    };

    return (
        <svg width={viewBoxSize} height={viewBoxSize} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            {renderSegments()}
        </svg>
    );
};

export default MultiColorProgressBar;