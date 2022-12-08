import styled from '@emotion/styled';
import {css} from '@emotion/react';
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

    let myInputs;

    const [myText, setMyText] = useState('');

    useEffect(() => {
        //과거 저장된 Myinput(myTypeText)를 삭제
        localStorage.removeItem('Myinput');
        //myTypeText를 JSON방식으로 Myinput(id)로 localStorage에 저장
        localStorage.setItem('Myinput', JSON.stringify({input: myText}));

        //로그에 함수가 작동 됨을 출력함. (편의성)
        console.log("Saved to localStorage");
    });


    return (
        <div>
            <InputBox type="text" onChange={setMyText} value={myText}/>
        </div>
    );

}


/*
const [myTexts] = useState();

const myInputText = () => {

//과거 저장된 Myinput(myTypeText)를 삭제
localStorage.removeItem('Myinput');

//myTypeText를 JSON방식으로 Myinput(id)로 localStorage에 저장
localStorage.setItem('Myinput', JSON.stringify({input: myTexts}));

//로그에 함수가 작동 됨을 출력함. (편의성)
console.log("Saved to localStorage");
}
return (
<div>
<InputBox type="text" onChange={myInputText} value={myTexts}/>
</div>
);
*/