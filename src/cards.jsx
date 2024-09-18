import React from 'react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';

const CardGroup = () => {
    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
    const imageMaxWidth = useBreakpointValue({ base: "auto", sm: "auto", md: "300px", lg: "400px" });
    const headingSize = useBreakpointValue({ base: "xl", sm: "lg", md: "lg", lg: "xl" });
    const subheadingSize = useBreakpointValue({ base: "sm", sm: "md", md: "md", lg: "md" });
    const containerPadding = useBreakpointValue({ base: 4, sm: 6, md: 8, lg: 10 });

    return (
        <Container maxW="1600px" minH="100vh" position="relative" overflow="hidden" p={containerPadding} top={10}>
            <Heading 
                as="h2" 
                size={headingSize}
                mb={{ base: 3, sm: 4, md: 5 }}
                textAlign="left" 
                fontWeight="regular"
                textTransform="uppercase"
                color="var(--primary-color-2)"
            >
                Sites I Love
            </Heading>
            <SimpleGrid
                columns={columns}
                spacing={{ base: 4, sm: 6, md: 8, lg: 10 }}
                alignItems="center"
                justifyContent="center"
            >
                {CARD_DATA.map((card) => (
                    <Box
                        key={card.title}
                        position="relative"
                        borderRadius="md"
                        overflow="hidden"
                    >
                        <Image 
                            maxW={imageMaxWidth} 
                            w="100%" 
                            src={card.image} 
                            alt={card.title} 
                            objectFit="cover"
                        />
                        <Heading 
                            size={subheadingSize}
                            fontWeight="medium" 
                            textTransform="uppercase" 
                            color="var(--primary-color-2)" 
                            mt={{ base: 2, sm: 3, md: 4 }}
                        >
                            {card.description}
                        </Heading>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

const CARD_DATA = [
    {
        image: '/images/GOY.png',
        description: 'Good On You',
    },
    {
        image: '/images/ssense.png',
        description: 'SSENSE Tech Blog',
    },
    {
        image: '/images/TRR.png',
        description: 'The RealReal',
    },
    {
        image: '/images/TRR.png',
        description: 'placeholder',
    },
    {
        image: '/images/TRR.png',
        description: 'placeholder',
    },
];

export default CardGroup;