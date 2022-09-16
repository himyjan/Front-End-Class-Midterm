import styled from 'styled-components';
import mediaQuery from './mediaQuery';
import Messages from '../pages/Messages';

const HomeStyledComponents = styled(Messages)`
  table {
    border: 1px solid lightgray;
  }

  tbody {
    border-bottom: 1px solid lightgray;
  }

  th {
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 2px 4px;
  }

  tfoot {
    color: gray;
  }

  tfoot th {
    font-weight: normal;
  }
`;

export default HomeStyledComponents;
