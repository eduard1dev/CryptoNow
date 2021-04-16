import styled from 'styled-components/native'
import colors from '../../constants/colors'

export const Container = styled.View`
    flex-direction: row;
`
export const ContainerRank = styled.Pressable`
    flex-direction: row;
    height: 25px;
    width: 90px;
    border-radius: 15px;
    background-color: ${colors.gray1};
    align-items: center;
    justify-content: center;
    margin-left: 5%;
`
export const Text1 = styled.Text`
    font-size: 14px;
    color: ${colors.gray2};
    font-family: 'RobotoM';
    margin-left: 5px;
`
export const Text2 = styled.Text`
    font-size: 14px;
    width: 30px;
    color: ${colors.white};
    font-family: 'RobotoM';
    text-align: center;
`
// not using ------------
export const OptionsRank = styled.View`
    flex-direction: row;
    width: 160px;
    height: 25px;
    background-color: ${colors.gray2};
    position: absolute;
    left: 5px;
    border-radius: 15px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: 70px;
    overflow: hidden;
    align-items: center;            
`