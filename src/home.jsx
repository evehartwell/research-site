import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
} from '@chakra-ui/react';
import './index.css';
import Navigation from './nav';

const Homepage = () => {
    return (
        <Container maxW="container.xl" className="landing-content">
            <Navigation />
            <Flex
                direction="column"
                justify="flex-end"
                minH="100vh"
                mx="auto"
            >
                <Box className="hero">
                    <Heading fontSize="6xl" textTransform="uppercase" fontWeight="medium" mb={5}>Reshaping Fashion Discourse</Heading>
                    <Text textTransform="uppercase">
                        In today's digital age, fashion has evolved from runways and storefronts to social media feeds and online communities.
                    </Text>
                    <Text className="body-text">
                        With platforms like TikTok, Pinterest, and Discord, the fashion world has never been more interconnected. However, sustainability and authenticity remain elusive goals for many consumers. 
                        As the industry grapples with the consequences of fast fashion's environmental impact and human exploitation, it's clear that the industry needs change.
                        So what if we could harness the power of online communities to drive meaningful change? What if we could create spaces where fashion lovers could not only discover new trends and brands, but also share knowledge, resources, and values? 
                    </Text>
                </Box>
            </Flex>
            
            
        </Container>
    );
};

export default Homepage;