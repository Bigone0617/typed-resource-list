import React, { useState } from "react";
import styled from "styled-components";
import { TypedIcon } from "typed-design-system";
import useStore, { Resource } from "../../store/store";

const ResourceDetail: React.FC<Resource> = ({ ...props }) => {
  const store = useStore();
  const [title, setTitle] = useState<string>(props.title);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.update(props.id, title);
    store.toggle(props.id);
  };

  const onClickResource = () => {
    store.setView(props.id);
  };
  
  const onClickRemove = () => {
    if(store.viewer?.id === props.id) store.removeView();
    store.remove(props.id);
  }

  return (
    <ResourceItem>
      <TextArea onClick={onClickResource}>
        {props.edit ? (
          <>
            <FormWrapper>
              <Form onSubmit={(e) => onSubmitHandler(e)}>
                <TitleInput
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></TitleInput>
              </Form>
            </FormWrapper>
          </>
        ) : (
          <TextRead>{props.title}</TextRead>
        )}
      </TextArea>
      <ButtonArea>
        <div onClick={() => store.toggle(props.id)}>
          <TypedIcon icon="edit_19" style={{ fontSize: "19px" }} />
        </div>
        <div onClick={onClickRemove}>
          <TypedIcon icon="trash_19" style={{ fontSize: "19px" }} />
        </div>
      </ButtonArea>
    </ResourceItem>
  );
};

const ResourceItem = styled.div`
  width: 95%;
  height: 90px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
`;

const TextArea = styled.div`
  width: 100%;
  height: 60px;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid var(--system-blue-50, #38a5e1);
  background: var(--gray-gray-97, #f7f7f7);
`;

const Form = styled.form`
  width: 95%;
`

const TitleInput = styled.input`
  display: flex;
  width: 100%;
  height: 16px;
  align-items: center;
  border: 1px solid var(--system-blue-50, #38A5E1);
  background: var(--gray-gray-97, #F7F7F7);
`

const TextRead = styled.div`
  width: 90%;
  height: 35px;
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ButtonArea = styled.div`
  width: 95%;
  height: 30px;
  color: #000;
  display: flex;
  justify-content: end;
  gap: 8px;
`;

export default ResourceDetail;
