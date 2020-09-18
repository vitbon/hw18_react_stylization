import styled, { keyframes } from "styled-components";
import { bounce, bounceInLeft } from 'react-animations';

const Container = styled.div`
  width: 400px;
  padding: 0 15px;
  margin: auto auto;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;    
`

const Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;    
`

const Logo = styled.div`
  margin: 50px auto 10px auto;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #F48FB2;
`

const Title = styled.div`
  color: white;
  font-size: 22px;
  margin-bottom: 30px;
`

const CardImg = styled.img`
  width: 50%;
  height: 50%;
  transform: translate(50%, 50%);
  z-index: 1;
`

const InputBox = styled.input`
  padding: 10px 8px;
  font-size: 13px;
  color: #bbb;
  width: 300px;
  background-color: #111;   
  border: 1px solid ${(props) =>
    (props.data==="green" ? "green" : (props.data==="red") ? "red" : "#444")};  
  border-radius: 3px;
  margin-bottom: 20px;
  
    &:focus, &:active, &:hover,  
     {
       border: 1px solid ${(props) =>
  (props.data==="green" ? "green" : (props.data==="red") ? "red" : "#444")};  
  }
`

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  height: 12px;
  width: 12px;
  margin: -10px 5px 0 7px;
  background-color: #111;
  color: #800031;
  border: 2px solid #888;
`

const Label = styled.label`
  width: 320px;
  color: #bbb;
  font-size: 13px;
  user-select: none;
`

const ButtonStyle = styled.button`
  width: 320px;
  padding: 8px; auto;
  margin: 5px 0 15px 0;
  color: black;
  background-color: #90caf9;
  font-size: 12px;
  font-weight: bold;
  border-radius: 3px;
  border: 0px;
  
  &:hover {
    cursor:pointer;
  }
`

const AStyle = styled.a`
  color: #90caf9;
  font-size: 12px;
  
  &:hover {
    cursor: pointer;
  }
`

const PStyle = styled.p`
  color: #aaa;
  font-size: 12px;  
`

const InputNameBox = styled.input.attrs({ type: 'text' })`
  padding: 10px 8px;
  font-size: 13px;
  color: #bbb;
  width: 133px;
  background-color: #111;
  border: 1px solid ${(props) =>
    (props.data==="green" ? "green" : (props.data==="red") ? "red" : "#444")}; 
  border-radius: 3px;
  margin-bottom: 20px;
`

const DivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

const DivRightStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%
`

export { Container, Wrapper, Logo, Title, InputBox, CardImg, CheckBox, Label,
  ButtonStyle, AStyle, PStyle, InputNameBox, DivStyle, DivRightStyle };

