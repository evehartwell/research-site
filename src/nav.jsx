import React from 'react';
import {
    Box,
    Flex,
    Button,
    Link,
    IconButton,
    Stack,
    Collapse,
    useBreakpointValue,
    useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navigation = ({ isDarkBackground }) => {
    const { isOpen, onToggle } = useDisclosure();
    const isMobile = useBreakpointValue({ base: true, md: false });
    
    // Define text colors based on the background
    const textColor = isDarkBackground ? 'var(--primary-color-1)' : 'var(--primary-color-2)';
    const hoverBorderColor = isDarkBackground ? 'var(--primary-color-1)' : 'var(--primary-color-2)'; // Adjust the hover border color

    return (
        <Box className="nav" position="relative" top={0} left={0} right={0} zIndex={1000}>
            <Flex
                color={textColor}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}
            >
                <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav textColor={textColor} hoverBorderColor={hoverBorderColor} />
                    </Flex>
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav textColor={textColor} hoverBorderColor={hoverBorderColor} />
            </Collapse>
        </Box>
    );
};

const DesktopNav = ({ textColor, hoverBorderColor }) => {
    return (
        <Stack direction={'row'} spacing={20}>
            {NAV_ITEMS.map((navItem) => (
                <Link key={navItem.label} href={navItem.href} textDecoration="none">
                    <Button
                        variant="ghost"
                        color={textColor}
                        sx={{
                            borderRadius: '30px',
                            border: '1px solid transparent',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'border-color 0.25s',
                            textTransform: 'uppercase',
                            _hover: {
                                borderColor: hoverBorderColor, // Dynamic hover border color
                            },
                            _focus: {
                                outline: `2px solid ${textColor}`, // Dynamic focus outline color
                            },
                        }}
                    >
                        {navItem.label}
                    </Button>
                </Link>
            ))}
        </Stack>
    );
};

const MobileNav = ({ textColor, hoverBorderColor }) => {
    return (
        <Stack backdropFilter="blur(5px)" p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <Link key={navItem.label} href={navItem.href} textDecoration="none">
                    <Button
                        variant="ghost"
                        w="full"
                        color={textColor}
                        sx={{
                            borderRadius: '30px',
                            border: '1px solid transparent',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'border-color 0.25s',
                            textTransform: 'uppercase',
                            _hover: {
                                borderColor: hoverBorderColor, // Dynamic hover border color
                            },
                            _focus: {
                                outline: `2px solid ${textColor}`, // Dynamic focus outline color
                            },
                        }}
                    >
                        {navItem.label}
                    </Button>
                </Link>
            ))}
        </Stack>
    );
};

const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Related Works', href: '/papers' },
];

export default Navigation;
