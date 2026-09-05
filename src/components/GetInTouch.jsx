import React from "react";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <StyledWrapper>
      <a href="mailto:godlucmbise@gmail.com" className="button">
        <span className="button-bg">
          <span className="button-bg-layers">
            <span className="button-bg-layer layer-1" />
            <span className="button-bg-layer layer-2" />
            <span className="button-bg-layer layer-3" />
          </span>
        </span>

        <span className="button-inner">
          <FaEnvelope aria-hidden="true" className="button-icon" />
          <span className="button-text">Get in Touch</span>
        </span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
    padding: 0.75rem 1.75rem;

    gap: 0.75rem;

    border: none;
    border-radius: 0.5rem;

    background: #58c4dc;
    color: #16171d;

    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;

    text-decoration: none;
    cursor: pointer;

    overflow: hidden;
    isolation: isolate;
  }

  /* Background */
  .button-bg {
    position: absolute;
    inset: 0;

    overflow: hidden;
    border-radius: inherit;

    background: #58c4dc;

    z-index: 0;
  }

  /* Wave container */
  .button-bg-layers {
    position: absolute;
    left: 50%;
    top: -65%;

    width: max(200%, 12rem);
    aspect-ratio: 1;

    transform: translateX(-50%);
  }

  /* Base wave */
  .button-bg-layer {
    position: absolute;
    inset: 0;

    border-radius: 50%;

    transform: scale(0);

    transition:
      transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  /* Deep blue */
  .layer-1 {
    z-index: 1;
    background: #2878a8;
  }

  /* Indigo */
  .layer-2 {
    z-index: 2;
    background: #5368d8;
  }

  /* Violet */
  .layer-3 {
    z-index: 3;
    background: #9b6cff;
  }

  /* Button content */
  .button-inner {
    position: relative;
    z-index: 5;

    display: inline-flex;
    align-items: center;

    gap: 0.75rem;

    pointer-events: none;
  }

  .button-text {
    transition:
      transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .button-icon {
    font-size: 1.125rem;

    transition:
      transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  /* Hover waves */
  .button:hover .layer-1 {
    transform: scale(1);
  }

  .button:hover .layer-2 {
    transform: scale(1.15);
    transition-delay: 0.08s;
  }

  .button:hover .layer-3 {
    transform: scale(1.3);
    transition-delay: 0.16s;
  }

  /* Content */
  .button:hover .button-text {
    transform: translateY(-1px);
  }

  .button:hover .button-icon {
    transform: translateX(2px) rotate(-5deg);
  }

  /* Focus */
  .button:focus-visible {
    outline: 2px solid #58c4dc;
    outline-offset: 3px;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .button-bg-layer,
    .button-text,
    .button-icon {
      transition: none;
    }
  }
`;

export default GetInTouch;