import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineSend, AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input 
                        placeholder='Enter Email Here...' 
                        border={'none'} 
                        borderRadius={'none'} 
                        outline={'none'} 
                        focusBorderColor='none'
                    />
                    <Button
                        p={'0'}
                        colorScheme='purple'
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack 
                w={'full'} 
                borderLeft={['none', '2px solid white']}
                borderRight={['none', '2px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>NEST VIDEOS</Heading>
                <Text>All rights reserved</Text>
                <Text>{'</>'} with ❤ by Muhammad Taha</Text>
            </VStack>
            <VStack
                w={'full'} 
            >
                <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <HStack width={'full'} justifyContent={'space-evenly'}>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href='https://www.linkedin.com/in/muhammad-taha-b80a56243/' target='blank'><AiFillLinkedin  size={'40'}/></a>
                    </Button>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href='https://github.com/MrRajaG' target='blank'><AiFillGithub size={'40'}/></a>
                    </Button>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href='https://www.instagram.com/rajataha062/' target='blank'><AiFillInstagram size={'40'}/></a>
                    </Button>
                </HStack>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer