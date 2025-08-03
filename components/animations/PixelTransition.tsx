'use client';
import React, { useState, CSSProperties } from "react";

interface CardFlipProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
  flipDuration?: number; // in seconds
}

const CardFlip: React.FC<CardFlipProps> = ({
  frontContent,
  backContent,
  className = "",
  style = {},
  aspectRatio = "100%",
  flipDuration = 0.6,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  const handleMouseEnter = (): void => {
    setIsFlipped(true);
  };

  const handleMouseLeave = (): void => {
    setIsFlipped(false);
  };

  const handleClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`
        ${className}
        w-[300px]
        max-w-full
        relative
        cursor-pointer
      `}
      style={{
        ...style,
        perspective: "1000px", // Enables 3D space for children
      }}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
    >
      <div style={{ paddingTop: aspectRatio }} />

      {/* Card container with flip animation */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: `transform ${flipDuration}s ease-in-out`,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front side */}
        <div
          className="
            absolute
            inset-0
            w-full
            h-full
            bg-[#222]
            text-white
            rounded-[15px]
            border-2
            border-white
            overflow-hidden
          "
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {frontContent}
        </div>

        {/* Back side */}
        <div
          className="
            absolute
            inset-0
            w-full
            h-full
            bg-[#333]
            text-white
            rounded-[15px]
            border-2
            border-white
            overflow-hidden
          "
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default CardFlip;