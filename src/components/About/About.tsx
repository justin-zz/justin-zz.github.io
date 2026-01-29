import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import headshot from '../../media/headshot.jpg'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi, I'm Justin and I'm a master's
                                        student at the{' '}
                                        <b>University of Toronto</b> with a
                                        passion for <b>Robotics</b> and <b>Artificial Intelligence</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I'm pursuing a MEng with a
                                        {' '}
                                        <b>
                                            Master's of Engineering (MEng)
                                        </b>{' '}
                                        in
                                        {' '}
                                        <b>
                                            Electrical and Computer Engineering
                                        </b>{' '}
                                        ,
                                        graduating class of 2027. Graduated in 2025 with a 
                                        {' '}
                                        <b>
                                            HBASc. in Mathematics and Computer Science
                                        </b>{' '}
                                         at the
                                         {' '}
                                        <b>
                                            University of Ottawa
                                        </b>{' '}.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🦾</Center>
                                    <Text>
                                        I have experience with software development from <b>University of Ottawa</b>'s <b>Mars Rover Team (uORover)</b> where I was responsible for the robotic arm's competition-ready kinematics.
                                        On my free time I like to indulge in my projects spanning from robotics to machine learning (see below).
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🖥️</Center>
                                    <Text>
                                        I also have experience doing full-stack web and app
                                        development - particularly with{' '}
                                        <b>Typescript</b>, <b>Android Studio</b> and <b>Python</b>.{' '}
                                        <b>ReactJS/NextJS</b> is my frontend framework
                                        of choice and I've worked in backend
                                        with{' '}
                                        <b>NodeJS, Java,</b> and <b>Python</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🏞️</Center>
                                    <Text>
                                        In addition to robotics and academics, I
                                        am also an avid participant in the confluence of  
                                        <b> bodybuilding</b> and <b>bouldering</b>!
                                    </Text>
                                </Flex>
                            </Fade>
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default About
