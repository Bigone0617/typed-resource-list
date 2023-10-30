import styled from "styled-components";
import useStore from "../../store/store";
import { TypedIcon } from "typed-design-system";

const ViewerHeader = () => {
  const store = useStore();
  return (
    <Header>
      <Url>{store.viewer.resource}</Url>
      <div onClick={() => store.setViewUrl("")}>
        <TypedIcon icon="close_19" style={{ padding: "15px" }} />
      </div>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  width: 919px;
  height: 50px;
  align-items: center;
  gap: 329px;
  flex-shrink: 0;
  background: var(--gray-gray-100, #fff);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Url = styled.div`
  width: 539px;
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

export default ViewerHeader;
