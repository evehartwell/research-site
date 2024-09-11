import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
    SimpleGrid,
    Image,
    Button,
    Stack,
    useBreakpointValue,
} from '@chakra-ui/react';

const CardGroup = () => {
    return (
        <Container maxW="container.xl" p={4} mt={10}>
            <Heading 
                as="h2" 
                size="lg" 
                mb={8} 
                textAlign="left" 
                fontWeight="medium"
                textTransform="uppercase"
                color="var(--primary-color-1)"
            >
                Sites I Love
            </Heading>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3 }}  // Responsive columns
                spacing={8}
                alignItems="center"
                justifyContent="center"
            >
                {CARD_DATA.map((card) => (
                    <Box
                        key={card.title}
                        position="relative"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Image src={card.image} alt={card.title} />
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

const CARD_DATA = [
    {
        image: '/images/GOY.png', // Replace with your image paths
        description: 'Good For You',
    },
    {
        image: '/images/ssense.png',
        description: 'SSENSE Tech Blog',
    },
    {
        image: '/images/TRR.png',
        description: 'TheRealReal',
    },
];

export default CardGroup;
