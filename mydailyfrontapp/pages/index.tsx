import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SaveToLocal } from "./subPage";

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



export default function main() {


  return (

          <Button >myNewButton</Button>
  )
}
