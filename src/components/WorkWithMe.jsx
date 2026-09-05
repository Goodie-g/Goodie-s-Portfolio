import styled from "styled-components";

const WorkWithMe = () => {
  return (
    <StyledWrapper>
      <a href="#Contact" className="button">
        <span className="button-bg">
          <span className="button-bg-layers">
            <span className="button-bg-layer layer-1" />
            <span className="button-bg-layer layer-2" />
            <span className="button-bg-layer layer-3" />
          </span>
        </span>

        <span className="button-inner">
          <span className="button-text">Work With Me</span>
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

    height: 3rem;
    padding: 0 1.75rem;

    border-radius: 0.5rem;

    overflow: hidden;

    background: #58c4dc;
    color: #16171d;

    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;

    text-decoration: none;

    cursor: pointer;
    isolation: isolate;
  }

  /* Background container */
  .button-bg {
    position: absolute;
    inset: 0;

    overflow: hidden;
    border-radius: inherit;

    background: #58c4dc;

    z-index: -1;
  }

  /* Large circles */
  .button-bg-layers {
    position: absolute;

    left: 50%;
    top: -65%;

    width: max(200%, 12rem);
    aspect-ratio: 1;

    transform: translateX(-50%);
  }

  .button-bg-layer {
    position: absolute;
    inset: 0;

    border-radius: 50%;

    transform: scale(0);

    transition:
      transform 1.3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .layer-1 {
    background: #2878a8;
    }

    .layer-2 {
    background: #5368d8;
    }

    .layer-3 {
    background: #9b6cff;
    }

  /* Text */
  .button-inner {
    position: relative;
    z-index: 2;

    pointer-events: none;
  }

  .button-text {
    display: block;

    transition:
      transform 1.2s cubic-bezier(0.19, 1, 0.22, 1),
      color 0.4s ease;
  }

  /* Hover */
  .button:hover .layer-1 {
    transform: scale(1);
  }

  .button:hover .layer-2 {
    transform: scale(1);

    transition-delay: 0.1s;
  }

  .button:hover .layer-3 {
    transform: scale(1);

    transition-delay: 0.2s;
  }

  .button:hover .button-text {
    color: #16171d;

    transform: translateY(-1px);

    transition:
      transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      color 0.4s ease;
  }

  /* Keyboard accessibility */
  .button:focus-visible {
    outline: 2px solid #58c4dc;
    outline-offset: 3px;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .button-bg-layer,
    .button-text {
      transition: none;
    }
  }
`;

export default WorkWithMe;
