import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
} from '@chakra-ui/react';
import './index.css';

const Homepage = () => {
    return (
        <Container maxW='container.xl'>
            <Box className='landing-text'>
                <Heading className='heading'>Reshaping Fashion Discourse</Heading>
                <Text className='subheading'>
                    In today's digital age, fashion has evolved from runways and storefronts to social media feeds and online communities.
                </Text>
                <Text className='body-text'>
                    With platforms like TikTok, Pinterest, and Discord, the fashion world has never been more interconnected. However, sustainability and authenticity remain elusive goals for many consumers. 
                    As the industry grapples with the consequences of fast fashion's environmental impact and human exploitation, it's clear that the industry needs change.
                    So what if we could harness the power of online communities to drive meaningful change? What if we could create spaces where fashion lovers could not only discover new trends and brands, but also share knowledge, resources, and values? 
                </Text>
            </Box>
            
        </Container>
    );
};

export default Homepage;