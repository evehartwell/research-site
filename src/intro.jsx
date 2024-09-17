import React from 'react';
import {
    Box,
    Container,
    Text,
    Flex,
    VStack,
    Heading,
    Button,
    Link,
    useBreakpointValue,
} from '@chakra-ui/react';

const Intro = () => {
    const padding = useBreakpointValue({ base: 4, md: 8, lg: 8 });
    const heroMaxWidth = useBreakpointValue({ base: "100%", md: "70%", lg: "60%" });
    const headingSize = useBreakpointValue({ base: "4xl", md: "5xl", lg: "6xl" });

    return (
        <Box
            minH="90vh"
            position="relative"
            overflow="hidden"
            backgroundImage="url('/svg/infinity_color.svg')"
            backgroundSize={{ base: "cover", md: "contain" }}
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            width="100%" 
        >
            <Container maxW="1600px" height="100%">
                <Flex
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={padding}
                >
                    <VStack align="flex-start" spacing={4} maxW={heroMaxWidth}>
                        <Heading fontSize={headingSize} textTransform="uppercase" fontWeight="regular">
                            Reshaping Fashion Discourse
                        </Heading>
                        <Text textTransform="uppercase">
                            In today's digital age, fashion has evolved from runways and storefronts to social media feeds and online communities.
                        </Text>
                        <Text className="body-text" fontSize={{ base: "sm", md: "md" }}>
                            With platforms like TikTok, Pinterest, and Discord, the fashion world has never been more interconnected. However, sustainability and authenticity remain elusive goals for many consumers. 
                            As the industry grapples with the consequences of fast fashion's environmental impact and human exploitation, it's clear that the industry needs change.
                            So what if we could harness the power of online communities to drive meaningful change? What if we could create spaces where fashion lovers could not only discover new trends and brands, but also share knowledge, resources, and values? 
                        </Text>
                        <Link href="/">
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
                                Learn More 
                            </Button>
                        </Link>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
}

export default Intro;