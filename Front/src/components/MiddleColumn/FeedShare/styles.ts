import styled, { css } from "styled-components";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineCamera, AiOutlineVideoCamera } from "react-icons/ai";

export const Container = styled.div`
  color: var(--color-gray);

  .attachment {
    display: none;

    @media (min-width: 1180px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 24px;
      border-top: 1px solid var(--color-separator);

      button {
        display: flex;
        padding: 16px;
        height: 100%;
        align-items: center;
        background: none;
        border: none;
        color: var(--color-gray);
        font-weight: 600;

        cursor: pointer;

        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;

export const WriteIcon = styled(BsPencilSquare)`
  width: 20px;
  height: 20px;
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const CameraIcon = styled(AiOutlineCamera)`
  ${iconCSS}
  color: #33aada;
`;

export const VideoCameraIcon = styled(AiOutlineVideoCamera)`
  ${iconCSS}
  color: #9896f2;
`;
