import styled from "styled-components";

export const Container = styled.div`
  &:nth-child(2) {
    position: sticky;
    top: 64px;
  }

  > div {
    padding: 12px;

    .title {
      font-size: 16px;
    }
    ul {
      list-style: none;
      margin-top: 8px;

      li {
        display: flex;
        align-items: center;

        .news {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          margin-top: 10px;
          z-index: 2;

          .head {
            font-size: 14px;
            font-weight: 600;
            color: var(--color-gray);

            > a {
              color: var(--color-link);
              text-decoration: none;
            }
          }
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }
`;
