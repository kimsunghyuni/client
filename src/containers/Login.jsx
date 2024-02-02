import styled from "@emotion/styled";
import { Button, Input } from "../components/Elements";
import { useState } from "react";



export default function Login() {

  const { value, setValue } = useState();

  const CheckLogin = (e) => {
    
  }


  return (
    <LayoutLogin>
      <LayoutForm>
        <Input
          name="ID"
          value={value}
        />
      </LayoutForm>
      <Button
        onClick={CheckLogin}>
        로그인
      </Button>
    </LayoutLogin>
  )
}

const LayoutLogin = styled.div`
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 50px; 
  display: flex;
  flex-direction: column;
  gap: 24px;

`



const LayoutForm = styled.div`

  display: flex;
  flex-direction: column

`