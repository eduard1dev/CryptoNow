import styled from 'styled-components/native'

import colors from '../../constants/colors'

export const Label = styled.Text`
    color: ${({focused}) => focused ? colors.yellow : colors.gray2};
    padding-left: 10px;
    font-family: 'RobotoM';
`