import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {useEffect, useState} from "react";

const hoverColor = css({
    color: "red"
})

const hoverButton = css({
    '&hover, &focus': hoverColor
})

const Button = styled.button`
    width: 300px;
    height: 150px;
`

const InputBox = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`



export default function Main() {

        const [ myTexts, setmyTexts ] = useState();
        useEffect(() => {
            const myTexts = JSON.stringify(setmyTexts)
            console.log(myTexts);
        })
  return(
    <div>
        <InputBox type="text" value={myTexts}/>
              <Button onClick={myTexts}>누르면 로그나옴</Button>

          </div>
  );
}