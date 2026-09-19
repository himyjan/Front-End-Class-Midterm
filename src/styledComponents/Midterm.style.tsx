import styled from 'styled-components';
import mediaQuery from './mediaQuery';
import Midterm from '../pages/Midterm';

const MidtermStyledComponents = styled(Midterm)`
  .midterm-menu-bar {
    position: fixed;
    display: flex;
    z-index: 10;
    top: 0;
    left: 0;
    color: #ffffff;

    background-color: #f44336;
    ${mediaQuery('mobile')`
      flex-direction: row;
      width: 100%;
      height: 68px;
    `}
    ${mediaQuery('desktop')`
      flex-direction: column;
      width: 300px;
      height: 100%;
    `}
  }

  .midterm-menu-bar-content {
    ${mediaQuery('mobile')`
      display: none;
    `}

    ${mediaQuery('desktop')`
      display: block;
    `}
  }

  .midterm-home {
    position: absolute;
    width: calc(100% - 32px);

    ${mediaQuery('mobile')`
      top: 68px;
      left: 0;
      margin: 0 16px;
    `}

    ${mediaQuery('desktop')`
      top: 0;
      left: 300px;
    `}
  }

  .midterm-home-image-box {
    display: flex;
    flex-wrap: wrap;
  }

  .midterm-home-image {
    object-fit: cover;

    ${mediaQuery('mobile')`
      width: 100%;
      height: 212.33px;
    `}

    ${mediaQuery('desktop')`
      width: 498px;
      height: 277px;
    `}
  }

  .midterm-home-contract-box {
    display: flex;
    flex-direction: column;
  }

  .midterm-home-contract-input-box {
    display: flex;

    ${mediaQuery('mobile')`
      flex-direction: column;
    `}

    ${mediaQuery('desktop')`
      flex-direction: row;
    `}
  }

  .midterm-home-contract-input {
    width: 100%;
    border: 1px solid #cccccc;
  }

  .midterm-home-btn-send-message {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f44336;
    color: #ffffff;
  }

  .font-weight700 {
    font-weight: bold;
  }
`;

export default MidtermStyledComponents;
