import React from 'react'
import { Container, Title } from './styles'

import { withExpoSnack } from 'nativewind'

const Home = () => {
    return (
        <Container
        className='flex-1 justify-center items-center background-black'
        >
            <Title className='text-slate-800'>
                aaaaaaaaaaa
            </Title>
        </Container>
    )
}

export default withExpoSnack(Home)