import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
    Button,
    Link,
    SimpleGrid,
    Image,
} from '@chakra-ui/react';
import './index.css';
import Navigation from './nav';
import CardGroup from './cards';
import BioGrid from './bios';

const Resources = () => {
    return (
        <Container maxW="100vw" p={0} pt={10} bg="var(--green-gradient)">
            <Navigation isDarkBackground={true} />
            <CardGroup />
            <BioGrid />
        </Container>
    );
};

export default Resources;