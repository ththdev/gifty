import * as React from 'react'
import styled from 'styled-components/native'
import Layout from '../../components/main/Layout'
import GoogleButton from '../../components/auth/GoogleButton'

const LoginScreen = () => {
    return (
        <Layout>
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
`

export default LoginScreen