import React from 'react';
import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    Button,
    Link,
    useBreakpointValue
} from '@chakra-ui/react';
import Navigation from './nav';

const AboutPage = () => {
    const contentWidth = useBreakpointValue({ base: "90%", md: "80%", lg: "70%" });
    const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
    const textSize = useBreakpointValue({ base: "sm", md: "md" });

    return (
        <Box minHeight="100vh">
            <Navigation isDarkBackground={false} />
            <Container maxW="container.xl" pt={{ base: "80px", md: "100px" }}>
                <VStack spacing={12} align="start" width={contentWidth} margin="0 auto">
                    <Box>
                        <Heading 
                            as="h1" 
                            size={headingSize} 
                            textTransform="uppercase" 
                            fontWeight="medium" 
                            mb={5}
                            color="var(--primary-color-2)"
                        >
                            About The Author
                        </Heading>
                        <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-2)">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. Sed porttitor erat sit amet nunc lobortis ultrices. 
                            Quisque porta nunc quis urna elementum, quis consequat lacus sodales. Integer iaculis mauris ac massa iaculis placerat. Suspendisse efficitur consequat erat vestibulum finibus.
                        </Text>
                    </Box>
                    
                    <Box>
                        <Heading 
                            as="h2" 
                            size={headingSize} 
                            textTransform="uppercase" 
                            fontWeight="medium" 
                            mb={5}
                            color="var(--primary-color-2)"
                        >
                            About The Paper
                        </Heading>
                        <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-2)">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. Sed porttitor erat sit amet nunc lobortis ultrices. 
                            Quisque porta nunc quis urna elementum, quis consequat lacus sodales. Integer iaculis mauris ac massa iaculis placerat. Suspendisse efficitur consequat erat vestibulum finibus.
                        </Text>
                    </Box>

                    <Link href="/" _hover={{ textDecoration: 'none' }}>
                        <Button
                            variant="ghost"
                            sx={{
                                borderRadius: '30px',
                                border: '1px solid transparent',
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'border-color 0.25s',
                                textTransform: 'uppercase',
                                borderColor: 'var(--primary-color-2)',
                                _hover: {
                                    bgColor: 'none', 
                                },
                            }}
                            >
                                Read the Paper
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Box>
    );
};

export default AboutPage;