import styled from "styled-components";
import useStore from "../../store/store";
import { checkUrlData } from "../../util/checkUrlData";
import randomSuccess from "../../util/randomSuccess";
import toast from "react-hot-toast";

interface UrlInputProps {
  onClose: () => void;
}

const ResourceUrlInput: React.FC<UrlInputProps> = ({ onClose }) => {
  const store = useStore();
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const checkedUrl = await checkUrlData(store.newResource);

      if (randomSuccess()) {
        toast.success("리소스 등록 성공!");
        store.setNewResource(checkedUrl);
      } else {
        throw new Error("리소스 등록 실패!");
      }
    } catch (error: any) {
      toast.error(error?.message);

      store.setNewResource("");
      onClose();
      return;
    }

    store.addResource();
    onClose();
  };

  return (
    <FormWrapper>
      <Form onSubmit={(e) => onSubmitHandler(e)}>
        <UrlInput
          type="text"
          placeholder="https://..."
          value={store.newResource}
          onChange={(e) => store.setNewResource(e.target.value)}
          onBlur={onClose}
        ></UrlInput>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  display: flex;
  width: 90%;
  height: 40px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--gray-gray-90, #e5e5e5);
  background: var(--gray-gray-100, #fff);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  width: 95%;
`

const UrlInput = styled.input`
  display: flex;
  width: 100%;
  height: 30px;
  alignItems: center;
  flexShrink: 0;
  borderRadius: 3px;
  border: 1px solid var(--system-blue-50, #38A5E1);
  background: var(--gray-gray-97, #F7F7F7);
`
export default ResourceUrlInput;
