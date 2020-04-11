import * as React from 'react'
import styled from 'styled-components/native'
import Layout from '../../components/main/Layout'
import GoogleButton from '../../components/auth/GoogleButton'

const AuthScreen = () => {
    return (
        <Layout>
            <LoginButton>
                <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
            <Container>
                <GoogleButton />
            </Container>
        </Layout>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    position: relative;
`

const LoginButton = styled.TouchableOpacity`
    
`

const LoginButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #005BFE;
`

export default AuthScreen