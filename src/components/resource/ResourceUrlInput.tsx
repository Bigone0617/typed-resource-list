import styled from "styled-components";
import useStore from "../../store/store";
import { checkUrlData } from "../../util/checkUrlData";

interface UrlInputProps {
    onClose: () => void;
  }
  
  const ResourceUrlInput:React.FC<UrlInputProps> = ({onClose}) => {
    const store = useStore();
    const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      try{
        const checkedUrl = await checkUrlData(store.newResource);
        store.setNewResource(checkedUrl);
      }catch(err){
        alert(err);
        
        store.setNewResource('');
        onClose();
        return ;
      }

      store.addResource()
      onClose();
    }

    return (
      <FormWrapper>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <input 
              type="text" 
              placeholder="https://..."
              value={store.newResource}
              onChange={(e) => store.setNewResource(e.target.value)}
              onBlur={onClose}
              style={{
                display: 'flex',
                width: '250px',
                height: '30px',
                alignItems: 'center',
                flexShrink: 0,
                borderRadius: '3px',
                border: '1px solid var(--system-blue-50, #38A5E1)',
                background: 'var(--gray-gray-97, #F7F7F7)',
                }}
              >
            </input>
          </form>
      </FormWrapper>
    )
  }

const FormWrapper = styled.div`
  position: absolute;
  bottom: 920px;
  left: 5px;
  display: flex;
  width: 260px;
  height: 40px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--gray-gray-90, #E5E5E5);
  background: var(--gray-gray-100, #FFF);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10);
`

  export default ResourceUrlInput;
