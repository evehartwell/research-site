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
import CardGroup from './cards';
import BioGrid from './bios';

const Resources = () => {
    return (
        <Container maxW="1600px" minH="90vh" position="relative" overflow="hidden">
            <CardGroup />
            <BioGrid />
        </Container>
    );
};

export default Resources;