import * as React from 'react'
import styled from 'styled-components/native'

const Layout:React.FC = ({ children }) => {
    return (
        <SafeAreaView>
            { children }
        </SafeAreaView>
    )
}

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`

export default Layout