import React from 'react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Image,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

const BioGrid = () => {
    const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 2 });
    const imageMaxWidth = useBreakpointValue({ base: "80px", sm: "80px", md: "100", lg: "150" });
    const headingSize = useBreakpointValue({ base: "md", sm: "lg", md: "lg", lg: "xl" });
    const bioHeadingSize = useBreakpointValue({ base: "sm", sm: "sm", md: "md", lg: "md" });
    const containerPadding = useBreakpointValue({ base: 4, sm: 6, md: 8, lg: 10 });

    return (
        <Container maxW="1600px" minH="90vh" position="relative" overflow="hidden" p={containerPadding}>
            <Heading 
                as="h2" 
                size={headingSize}
                mb={{ base: 3, sm: 4, md: 5, lg: 6 }}
                textAlign="left" 
                fontWeight="regular"
                textTransform="uppercase"
                color="var(--primary-color-2)"
            >
                Notable People
            </Heading>
            <SimpleGrid
                columns={columns}
                spacing={{ base: 4, sm: 6, md: 8, lg: 10 }}
                alignItems="start"
                justifyContent="center"
            >
                {BIO_DATA.map((bio) => (
                    <Box
                        key={bio.name}
                        position="relative"
                        borderRadius="lg"
                        overflow="hidden"
                        textColor='var(--primary-color-2)'
                        mt={{ base: 4, sm: 6, md: 8, lg: 10 }}
                        display="flex"
                        flexDirection={{ base: "column", sm: "row" }}
                        alignItems={{ base: "center", sm: "flex-start" }}
                    >
                        <Image 
                            src={bio.image} 
                            alt={bio.name} 
                            maxW={imageMaxWidth}
                            m={{ base: 2, sm: 3, md: 4 }}
                            objectFit="cover"
                            borderRadius="full"
                        />
                        <Box ml={{ base: 0, sm: 4 }} mt={{ base: 3, sm: 0 }}>
                            <Heading 
                                size={bioHeadingSize}
                                fontWeight="medium" 
                                textTransform="uppercase" 
                                color="var(--primary-color-2)" 
                            >
                                {bio.name}
                            </Heading>
                            <Text 
                                mt={2}
                                fontSize={{ base: "sm", md: "md" }}
                            >
                                {bio.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

const BIO_DATA = [
    {
        image: '/images/danielle.png',
        name: 'Bio 1',
        description: 'Description for Bio 1. This person is notable for their contributions to the field.',
    },
    {
        image: '/images/bliss.jpg',
        name: 'Bio 2',
        description: 'Description for Bio 2. Another notable individual with significant achievements.',
    },
    {
        image: '/images/rian.jpg',
        name: 'Bio 3',
        description: 'Description for Bio 3. This person has made remarkable strides in their area of expertise.',
    },
    {
        image: '/images/bliss.jpg',
        name: 'Bio 4',
        description: 'Description for Bio 4. An influential figure known for their innovative work.',
    },
];

export default BioGrid;