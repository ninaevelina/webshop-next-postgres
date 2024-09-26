"use client";

import React, { useState } from "react";
import "./accordion.scss";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div
        onClick={() => setIsActive(!isActive)}
        className={`accordion-title-block ${
          isActive ? "accordion-open" : "accordion-closed"
        }`}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div
          className={`accordion-content-block ${
            isActive ? "content-open" : "content-closed"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
}
