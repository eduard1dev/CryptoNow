import styled from 'styled-components/native'
import colors from '../../constants/colors'

export const Container = styled.View`
    height: 90px;
    background-color: ${colors.gray1};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Input = styled.TextInput`
    height: 46px;
    width: 78%;
    background-color: #fff;
    align-items: flex-end;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 15px;
    font-size: 16px;
`
export const IconContainer = styled.View`
    background-color: #fff;
    height: 46px;
    width: 37px;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`