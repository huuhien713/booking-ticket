import styled from 'styled-components';

const ButtonShow = ( {isShow, handleShow}) => {

    return (
        <Button onClick={() => {handleShow(isShow)}} >
            <div>{isShow ? 'Ẩn Bớt' : 'Xem Thêm'}</div>
        </Button>
    )
}

export default ButtonShow;

const Button = styled.div`
  width: 90%;
  margin: 16px auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  div {
    padding: 12px;
    text-align: center;    
    border-radius: 8px;
    transition: all 0.5s;
    color: var(--TextContent);
    background-color: var(--BgContent);
    &:hover {
      color: var(--HoverTextColor);
      font-weight: 500;
      background-color: #d0ddef;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`