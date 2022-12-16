import styled from '@emotion/styled';
import {useEffect, useState, useRef, useReducer} from 'react';
import {Route} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {Icon} from '@fluentui/react/lib/Icon';



//Recoil {prefatching}

const ChatIcon = () => <Icon iconName="CommentSolid" />;

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




    const diaryId = useRef(0);

    const increaseDiaryId = () => {
        diaryId.current += 1;
    }


    const changeMyText = (e: any) => {
        setMyText(e.target.value);
    };

    const changeMyTitle = (e: any) => {
        setMyTitle(e.target.value);
    };

    const diaryList = [
        {
            id: 1,
            Title: "TestTitle1",
            Text: "TextTest1"
        },
        {
            id: 2,
            Title: "TestTitle2",
            Text: "TextTest2"
        },
        {
            id: 3,
            Title: "TestTitle3",
            Text: "TextTest3"
        },
    ]



    const list = ({diaryList}) => {
        return (
                <div>
                    {list.map((it:any) => (
                            <div key={it.id}>
                                <div>Title : {it.Title}</div>
                                <div>Text : {it.Text}</div>
                            </div>
                            ))}
                    </div>
        )
    }


    let getMyText: any;

    useEffect(() => {

        localStorage.setItem('MyInput', JSON.stringify({id: diaryId.current,Title: myTitle, Text: myText}));


    });

    if(typeof localStorage !== 'undefined'){
        getMyText = JSON.parse(localStorage.getItem('MyInput') as string);
    }

    return (
        <div>
            
        </div>
    );
}

