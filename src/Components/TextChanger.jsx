import React, { useEffect, useState } from "react";

const TextChanger = () => {
  const texts = [
    "Hi, I'm Farhan Ahmad",
    "Welcome to my portfolio!",
   
  ];

  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = texts[textIndex];

      if (isForward) {
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(fullText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsForward(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 70); // speed of typing/deleting

    return () => clearInterval(intervalId);
  }, [charIndex, isForward, textIndex, texts]);

  return (
    <div
      className="relative overflow-hidden    :"
      style={{ minHeight: '4rem' }}
    >
      <div
        className="absolute bottom-0 left-0 w-full transition-all ease-out duration-500"
        style={{
          transform: isForward ? 'translateY(0)' : 'translateY(100%)',
          opacity: isForward ? 1 : 0,
        }}
      >
        {currentText}
      </div>
    </div>
  );
};

export default TextChanger;
