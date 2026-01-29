import { FC } from 'react'
import {
    Container,
    VStack,
    Stack,
    Heading,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    SiFlask,
    SiHtml5,
    SiJava,
    SiPhp,
    SiPython,
    SiReact,
    SiTypescript,
    SiBootstrap,
    SiMysql,
    SiMongodb,
    SiVisualstudiocode,
    SiGit,
    SiLatex,
    SiDocker,
    SiGo,
    SiNodedotjs,
    SiPostgresql,
    SiC,
    SiFirebase,
    SiCsharp,
    SiDotnet,
    SiAmazonaws,
    SiTailwindcss,
    SiChakraui,
    SiDjango,
    SiPostman,
    SiDatadog,
    SiStorybook,
    SiGraphql,
    SiNextdotjs,
    SiRos,
    SiAndroidstudio,
    SiR,
    SiCloudsmith,
    SiArduino,
    SiOpencv,
    SiPytorch,
    SiTensorflow,
} from 'react-icons/si'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import SkillSection from './SkillSection'
import SkillItem from './SkillItem'
import Card from '../generics/Card'

const Skills: FC = () => {
    return (
        <Element name='skills'>
            <Container maxW={'5xl'} p={6.5} mt={20}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Skills</Heading>
                    </Fade>
                    <Stack direction={'row'}>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Languages'}>
                                    <SkillItem icon={SiPython} name='Python' />
                                    <SkillItem icon={SiJava} name='Java' />
                                    <SkillItem icon={SiC} name='C/C++' />
                                    <SkillItem
                                        icon={SiTypescript}
                                        name='Typescript'
                                    />
                                    <SkillItem icon={SiPhp} name='PHP' />
                                    <SkillItem icon={SiHtml5} name='HTML/CSS' />
                                    <SkillItem icon={SiGo} name='Golang' />
                                </SkillSection>
                                <SkillSection title={'Frameworks'}>
                                    <SkillItem icon={SiRos} name='ROS' />
                                    <SkillItem icon={SiOpencv} name='OpenCV' />
                                    <SkillItem icon={SiPytorch} name='Pytorch' />
                                    <SkillItem icon={SiTensorflow} name='TensorFlow' />
                                    <SkillItem icon={SiReact} name='ReactJS' />
                                    <SkillItem
                                        icon={SiNodedotjs}
                                        name='NodeJS'
                                    />
                                    <SkillItem
                                        icon={SiBootstrap}
                                        name='Bootstrap'
                                    />
                                </SkillSection>
                            </Stack>
                        </Card>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Databases'}>
                                    <SkillItem
                                        icon={SiPostgresql}
                                        name='PostgreSQL'
                                    />
                                    <SkillItem
                                        icon={SiFirebase}
                                        name='Firestore'
                                    />
                                </SkillSection>
                                <SkillSection title={'Other tools'}>
                                    <SkillItem
                                        icon={SiVisualstudiocode}
                                        name='VS Code'
                                    />
                                    <SkillItem icon={SiFirebase} name='Solidworks' />
                                    <SkillItem icon={SiFirebase} name='KiCad' />
                                    <SkillItem icon={SiArduino} name='Arduino' />
                                    <SkillItem icon={SiAndroidstudio} name='Android Studio' />
                                    <SkillItem icon={SiGit} name='Git' />
                                    <SkillItem icon={SiLatex} name='LaTeX' />
                                    <SkillItem icon={SiR} name='R' />
                                </SkillSection>
                            </Stack>
                        </Card>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default Skills
