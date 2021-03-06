import styled from 'styled-components/native'
import colors from '../../constants/colors'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`
export const CryptoList = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    background-color: ${colors.primary};
`