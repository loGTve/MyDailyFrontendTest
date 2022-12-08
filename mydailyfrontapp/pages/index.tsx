import styled from '@emotion/styled';
import {useEffect, useState} from "react";

const InputBox = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`


export default function Main() {

    //myText = 변수. setMyText = myText를 갱신해주는 함수.
    //useState는 위의 두 가지 값을 반환해줌.
    const [myText, setMyText] = useState('Type any Word.');

    const changeValue = (e: any) => {
        setMyText(e.target.value);
    }

    //setMyText의 변경이 있을 때 마다 실행시킴. ->  https://ko.reactjs.org/docs/hooks-effect.html
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
            <InputBox type="text" onChange={changeValue} value={myText}/>
        </div>
    );

}