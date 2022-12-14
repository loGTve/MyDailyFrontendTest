import styled from '@emotion/styled';
import {useEffect, useState, useRef, useReducer} from 'react';
import {Route} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import reducer from './reducer'


//Recoil {prefatching}

const Button = styled.button`
    width: 150px;
    height: 40px;
    margin: 10px;
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


    const [myText, setMyText] = useState('Type any Word.');
    const [myTitle, setMyTitle] = useState('Type any Title.');
//    const [myDiaryId, setMyDiaryId] = useState(1);

    const [data, dispatch] = useReducer(reducer, []);


    const diaryId = useRef(0);

    const increaseDiaryId = () => {
        diaryId.current += 1;
    }


    const changeMyText = (e: any) => {
        setMyText(e.target.value);
    };

    const changeMyTitle = (e) => {
        setMyTitle(e.target.value);
    };

    useEffect(() => {

        localStorage.setItem('Myinput', JSON.stringify({id: diaryId.current,Title: myTitle, Text: myText}));

        console.log("Saved to localStorage");
    });

    return (
        <div>
            <div>
                <div>
                    <InputBox type="text" onChange={changeMyTitle} value={myTitle}/></div>
                <InputBox type="text" onChange={changeMyText} value={myText}/></div>
            <Button onClick={increaseDiaryId}/>
        </div>
    );
}

