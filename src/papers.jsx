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

const RelatedWorks = () => {
    const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
    const subheadingSize = useBreakpointValue({ base: "md", md: "lg" });
    const textSize = useBreakpointValue({ base: "sm", md: "md" });
    const containerPadding = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 5 });

    return (
        <Container maxW="1600px" minH="87vh" position="relative" overflow="hidden" p={containerPadding}>
            <VStack spacing={8} align="start" p={containerPadding}>
                <Box>
                    <Heading 
                        as="h1" 
                        size={headingSize} 
                        textTransform="uppercase" 
                        fontWeight="regular" 
                        mb={5}
                        color="var(--primary-color-2)"
                    >
                        Related Works
                    </Heading>
                    <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-2)">
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
                        color="var(--primary-color-2)"
                    >
                        Title
                    </Heading>
                    <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-2)">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. 
                    </Text>
                    <Heading 
                        as="h2" 
                        size={subheadingSize} 
                        textTransform="uppercase" 
                        fontWeight="regular" 
                        mb={5}
                        color="var(--primary-color-2)"
                    >
                        Title
                    </Heading>
                    <Text className="body-text" fontSize={textSize} mb={5} color="var(--primary-color-2)">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nibh. Phasellus faucibus convallis elit sed dictum. 
                    </Text>
                </Box>
            </VStack>
        </Container>
    );
};

export default RelatedWorks;