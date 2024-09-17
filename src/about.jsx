import React from 'react';
import {
    Box,
    Text,
    Flex,
    VStack,
    Heading,
    Button,
    Link,
    useBreakpointValue,
    Container,
} from '@chakra-ui/react';

const AboutPage = () => {
    const padding = useBreakpointValue({ base: 4, md: 8, lg: 8 });
    const contentMaxWidth = useBreakpointValue({ base: "100%", md: "70%", lg: "60%" });
    const headingSize = useBreakpointValue({ base: "4xl", md: "5xl", lg: "4xl" });
    const textSize = useBreakpointValue({ base: "sm", md: "md" });

    return (
        <Container maxW="1600px" minH="100vh" position="relative" overflow="hidden">
            <Flex
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                p={padding}
            >
                <VStack align="flex-start" spacing={8} maxW={contentMaxWidth}>
                    <Box>
                        <Heading fontSize={headingSize} textTransform="uppercase" fontWeight="regular" color="var(--primary-color-2)" mb={4}>
                            About The Author
                        </Heading>
                        <Text className="body-text" fontSize={textSize} color="var(--primary-color-2)" mb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. Sed porttitor erat sit amet nunc lobortis ultrices. 
                            Quisque porta nunc quis urna elementum, quis consequat lacus sodales. Integer iaculis mauris ac massa iaculis placerat. Suspendisse efficitur consequat erat vestibulum finibus.
                        </Text>
                    </Box>
                    
                    <Box>
                        <Heading fontSize={headingSize} textTransform="uppercase" fontWeight="regular" color="var(--primary-color-2)" mb={4}>
                            About The Paper
                        </Heading>
                        <Text className="body-text" fontSize={textSize} color="var(--primary-color-2)" mb={4}>
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
                                textColor: 'var(--primary-color-2)',
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
            </Flex>
        </Container>
    );
};

export default AboutPage;