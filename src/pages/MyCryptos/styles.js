import styled from 'styled-components/native'

import colors from '../../constants/colors'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
`
export const TextEmpty = styled.Text`
    font-family: 'RobotoL';
    font-size: 30px;
    color: ${colors.gray2};
    align-self: center;
    padding-top: 50%;
    opacity: 0.4;
`