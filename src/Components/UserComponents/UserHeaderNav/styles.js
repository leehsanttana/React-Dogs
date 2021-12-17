import styled from "styled-components";

export const UserHeaderNav = styled.nav`
  .nav-default {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    a,
    button {
      background: #eee;
      border-radius: 0.2rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: 0.1s ease;
      cursor: pointer;

      &:hover,
      &:focus {
        background: #fff;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }
    }
    .active {
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
    }

    .active svg > * {
      fill: #fb1;
    }
  }

  .nav-mobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    a,
    button {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      background: none;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;

      &:hover svg > * {
        fill: #fb1;
      }
    }

    button {
      border-bottom: none;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  .nav-mobile-active {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }

  .mobile-button {
    background: #eee;
    border-radius: 0.2rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s ease;
    cursor: pointer;
  }

  .mobile-button-active {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
    outline: none;
  }

  .mobile-button::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0px 6px currentColor, 0 -6px currentColor;
    transition: 0.2s ease;
  }

  .mobile-button-active::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0px 8px currentColor, 0 -8px currentColor;
  }
`;

export const UserHeaderNavButton = styled.button``;
