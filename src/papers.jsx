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

const RelatedWorks = () => {
    const contentWidth = useBreakpointValue({ base: "90%", md: "80%", lg: "70%" });
    const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
    const subheadingSize = useBreakpointValue({ base: "md", md: "lg" });
    const textSize = useBreakpointValue({ base: "sm", md: "md" });

    return (
        <Box minHeight="100vh" bg="var(--green-gradient)">
            <Navigation isDarkBackground={true} />
            <Container maxW="container.xl" pt={{ base: "80px", md: "100px" }}>
                <VStack spacing={12} align="start" width={contentWidth} margin="0 auto">
                    <Box>
                        <Heading 
                            as="h1" 
                            size={headingSize} 
                            textTransform="uppercase" 
                            fontWeight="medium" 
                            mb={5}
                            color="var(--primary-color-1)"
                        >
                            Related Works
                        </Heading>
                        <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-1)">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. Sed porttitor erat sit amet nunc lobortis ultrices. 
                        </Text>
                    </Box>
                    <Box>
                        <Heading 
                            as="h2" 
                            size={subheadingSize} 
                            textTransform="uppercase" 
                            fontWeight="regular" 
                            mb={5}
                            color="var(--primary-color-1)"
                        >
                            Title
                        </Heading>
                        <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-1)">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. 
                        </Text>
                        <Heading 
                            as="h2" 
                            size={subheadingSize} 
                            textTransform="uppercase" 
                            fontWeight="regular" 
                            mb={5}
                            color="var(--primary-color-1)"
                        >
                            Title
                        </Heading>
                        <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-1)">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. 
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default RelatedWorks;