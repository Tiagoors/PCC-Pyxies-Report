import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > span {
    margin-top: 48px;
    display: flex;
  }

  .btn {
    
    text-align: center;

    .btn-problem {
      width: 14rem;

      margin-bottom: 20px;

      background: white;
      border: 1px solid var(--color-separator);
      cursor: pointer;

      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.84);

      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.05);
      }

      .write {
        display: flex;
        align-items: center;
        padding: 18px 24px;
        color: var(--color-gray);

        > span {
          margin-left: 8px;
          font-weight: 600;
        }
      }
    }
  }

  @media (min-width: 1180px) {
    > span {
      margin-top: 52px;
      padding: 8px 0;
    }
    > main {
      margin: 0 30px;
      display: flex;
      justify-content: center;
    }
  }

  .left-column,
  .right-column,
  .ad-banner {
    display: none;
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column,
    .ad-banner {
      display: unset;
    }

    .middle-column {
      margin: 0 25px 16px;
    }
  }
`;
