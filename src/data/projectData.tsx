import {
    PythonBadge,
    SolidworksBadge,
    KiCadBadge,
    ROSBadge,
    EmbeddedBadge,
    GazeboBadge,
    MLBadge,
    FFmpegBadge,
    MiditonesBadge,
    
} from '../components/Projects/TechBadges'
import { FiFileText, FiGithub, FiGitlab, FiLink, FiYoutube } from 'react-icons/fi'
import { ProjectT } from './types'

export const projectData: ProjectT[] = [
    {
        name: 'TG-001 (WIP)',
        id: 'tg001',
        type: 'Robot',
        tagline: 'Tiniest budget-friendly fighter robot',
        tags: [
            <SolidworksBadge />,
            <KiCadBadge />,
            <ROSBadge />,
            <EmbeddedBadge />,
        ],
        imageSrc: '/tg001.png',
        description:
            'The soon-to-be tiniest budget-friendly and open-source robot. Intended to be a learning resource where anyone can get into robotics by building this robot! Read the devlog by clicking on the icon!',
        links: [
            {
                link: 'https://www.notion.so/justin-portfolio/Robot-Development-Document-RDD-TG-001-Tiny-Gladiator-001-237687afd29480408cbad320aca8db6c?source=copy_link',
                icon: <FiFileText />,
            },
        ],
        headerLink: 'https://www.notion.so/justin-portfolio/Robot-Development-Document-RDD-TG-001-Tiny-Gladiator-001-237687afd29480408cbad320aca8db6c?source=copy_link',
    },
    {
        name: 'Robotic Arm Kinematics',
        id: 'kinematics',
        type: 'Robot',
        tagline: 'Software responsible for the robotic arm on the uOttawa Mars Rover',
        tags: [
            <ROSBadge />,
            <EmbeddedBadge />,
            <GazeboBadge />,
        ],
        imageSrc: '/kinematics.png',
        description:
            'The code that moves the uOttawa robotic arm to this day! Including open and close-loop (IK) control. Click the image to watch our System Acceptance Review (SAR) 2024 video!. See the "arm" and "robotic_arm_controls" folders in the repo for more information.',
        links: [
             {
                 link: 'https://gitlab.com/uorover/rover_workspace/-/tree/ros2-testing/src?ref_type=heads',
                 icon: <FiGitlab />,
             },
             {
                 link: 'https://youtu.be/ddIS6PEXwSM?si=HLwoBB2i7nSUoOEm&t=200',
                 icon: <FiYoutube />,
            },
         ],
        headerLink: 'https://youtu.be/ddIS6PEXwSM?si=HLwoBB2i7nSUoOEm&t=200',
    },
    {
        name: 'Robotic Arm Player (RAP)',
        id: 'rap',
        type: 'Robot',
        tagline: 'Play your favorite music on a robotic arm',
        tags: [
            <ROSBadge />, 
            <EmbeddedBadge />, 
            <MLBadge />, 
            <FFmpegBadge />, 
            <MiditonesBadge />,
        ],
        imageSrc: '/rap.png',
        description:
            'Downloads audio from YouTube/Twitch and plays it on a robotic arm. Watch the cool video in the repo below!',
        links: [
            {
                link: 'https://github.com/justin-zz/robotic-arm-player',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/justin-zz/robotic-arm-player',
    },
    {
        name: 'ESP32 Vision',
        id: 'espvision',
        type: 'Machine Learning',
        tagline: 'Cutting-edge research allowing real-time depth perception on teeny tiny edge devices',
        tags: [
            <PythonBadge />,
            <EmbeddedBadge />,
            <MLBadge />,
        ],
        imageSrc: '/espvision.jpg',
        description:
            'A framework for deploying real-time depth perception on resource-constrained microcontrollers, specifically the ESP32-CAM with only 512KB RAM.',
        links: [
            {
                link: 'https://github.com/justin-zz/AER1515-Project',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/justin-zz/AER1515-Project',
    },
    {
        name: 'Histopathology Image Classification with ABMIL',
        id: 'histo',
        type: 'Image Classification',
        tagline: 'Classifies slide images by weighing patch importance',
        tags: [
            <PythonBadge />,
            <MLBadge />,
        ],
        imageSrc: '/histo.jpg',
        description:
            'This repository implements an Attention-Based Multiple Instance Learning (ABMIL) model for histopathology whole slide image (WSI) classification. The model processes image patches and aggregates them with attention mechanisms for slide-level predictions.',
        links: [
            {
                link: 'https://github.com/justin-zz/ECE1512-Project-B',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/justin-zz/ECE1512-Project-B',
    },
    {
        name: 'Long-Sequence Model Optimization',
        id: 'vlm',
        type: 'Machine Learning',
        tagline:
            'Optimizing SSMs and VLMs via token pruning and architectural modifications',
        tags: [
            <PythonBadge />,
            <MLBadge />,
        ],
        imageSrc: '/vlm.png',
        description:
            'A comprehensive implementation for evaluating State Space Models (SSMs) and Vision-Language Models (VLMs) with token pruning and lossy-ness measurement. The project compares different architectures and analyzes the trade-offs between efficiency and information preservation.',
        links: [
            {
                link: 'https://github.com/justin-zz/ECE1512-Project-A',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/justin-zz/ECE1512-Project-A',
    },
]
