
import React from "react";

interface RobotImageProps {
  className?: string;
}

const RobotImage: React.FC<RobotImageProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      {/* Robot Head */}
      <rect x="106" y="66" width="300" height="260" rx="20" fill="#2B6DF0" />
      <rect x="126" y="86" width="260" height="220" rx="12" fill="#F0F2F5" />
      
      {/* Robot Eyes */}
      <circle cx="186" cy="156" r="30" fill="#2A2D34" />
      <circle cx="326" cy="156" r="30" fill="#2A2D34" />
      <circle cx="186" cy="156" r="12" fill="#00D4AA" className="animate-pulse-light" />
      <circle cx="326" cy="156" r="12" fill="#00D4AA" className="animate-pulse-light" />
      
      {/* Robot Mouth */}
      <rect x="186" y="216" width="140" height="20" rx="10" fill="#2A2D34" />
      <rect x="206" y="216" width="100" height="6" rx="3" fill="#00D4AA" />
      
      {/* Robot Antenna */}
      <rect x="246" y="30" width="20" height="36" rx="5" fill="#2A2D34" />
      <circle cx="256" cy="20" r="12" fill="#FF7D2E" className="animate-pulse-light" />
      
      {/* Robot Body */}
      <rect x="156" y="326" width="200" height="120" rx="10" fill="#2B6DF0" />
      <rect x="176" y="346" width="160" height="80" rx="5" fill="#F0F2F5" />
      
      {/* Robot Control Panel */}
      <circle cx="216" cy="386" r="15" fill="#FF7D2E" />
      <circle cx="256" cy="386" r="15" fill="#00D4AA" />
      <circle cx="296" cy="386" r="15" fill="#FF3D57" />
      
      {/* Robot Arms */}
      <rect x="76" y="346" width="80" height="20" rx="10" fill="#2A2D34" className="origin-right animate-robot-wave" />
      <circle cx="76" cy="356" r="15" fill="#2B6DF0" />
      <rect x="356" y="346" width="80" height="20" rx="10" fill="#2A2D34" />
      <circle cx="436" cy="356" r="15" fill="#2B6DF0" />
      
      {/* Robot Legs */}
      <rect x="186" y="446" width="30" height="60" rx="5" fill="#2A2D34" />
      <rect x="296" y="446" width="30" height="60" rx="5" fill="#2A2D34" />
      <rect x="171" y="496" width="60" height="10" rx="5" fill="#2B6DF0" />
      <rect x="281" y="496" width="60" height="10" rx="5" fill="#2B6DF0" />
    </svg>
  );
};

export default RobotImage;
