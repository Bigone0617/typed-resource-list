import styled from "styled-components";
import useStore from "../../store/store";
import { TypedIcon } from "typed-design-system";

const ViewerHeader = () => {
  const store = useStore();
  return (
    <Header>
      <Url>{store.viewer?.resource}</Url>
      <IconWrapper>
        <div onClick={() => store.removeView()}>
          <TypedIcon icon="close_19" style={{ padding: "15px" }} />
        </div>
      </IconWrapper>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  align-items: center;
  background: var(--gray-gray-100, #fff);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid gray;
`;

const Url = styled.div`
  width: 50%;
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 10px;
`;

export default ViewerHeader;
