import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl'
}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading 
                textTransform={'uppercase'} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={'2px solid'} 
                m={'auto'}
            >Services</Heading>
            <Stack 
                h={'full'}
                p={'4'}
                alignItems={'center'}
                direction={['column', 'row']}
            >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}></Image>
                <Text 
                    letterSpacing={'widest'}
                    lineHeight={'190%'}
                    p={['4', '16']}
                    textAlign={'center'}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam culpa iste voluptatem voluptas numquam illum minima eius fugit, perferendis, asperiores tempore nihil, suscipit velit sequi possimus natus a similique porro voluptatibus voluptates deleniti molestias. Necessitatibus iure atque dignissimos molestiae saepe velit, sunt dolor adipisci perspiciatis, quam sequi rerum magni?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto rerum quam repudiandae laboriosam aut fugit nulla nihil. Voluptatem consequatur, id numquam excepturi laudantium dolores eveniet, amet veniam ab dicta animi explicabo harum illo nulla totam perspiciatis, corporis autem tempore et itaque recusandae obcaecati? Omnis voluptate repudiandae possimus consectetur molestias impedit.</Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'60vh'}>
            <Image src={img1}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w={'full'} h={'60vh'}>
            <Image src={img2}/>
            <Heading bgColor={'whiteAlpha.900'} color={'balck'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'60vh'}>
            <Image src={img3}/>
            <Heading bgColor={'whiteAlpha.600'} color={'balck'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={'full'} h={'60vh'}>
            <Image src={img4}/>
            <Heading bgColor={'whiteAlpha.600'} color={'balck'} {...headingOptions}>
                Night Life is Cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home