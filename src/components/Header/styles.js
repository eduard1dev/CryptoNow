import styled from 'styled-components/native'
import colors from '../../constants/colors'




export const Container = styled.View`
    flex-direction: row;
    height: 60px;
    background-color: ${colors.gray1};
    padding-left: 5%;
    padding-bottom: 10px;
    align-items: flex-end;
`
export const Title = styled.Text`
    font-size: 36px;
    color: ${colors.gray2};
    font-family: 'Righteous';
`
export const TitleYellow = styled(Title)`
    color: ${colors.yellow};
`
    