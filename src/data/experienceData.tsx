import { ExperienceData } from './types'
import uoroverLogo from '../media/uoroverLogo.jpeg'

export const experienceData: ExperienceData[] = [
    {
        title: 'Robotic Arm Sub-Captain',
        company: 'University of Ottawa Mars Rover Team (uORover)',
        location: 'Ottawa, ON',
        dates: 'September 2023 - September 2024',
        description:
            'Led a 20-member subteam in research and development of a 6-DOF robotic arm, creating project plans with deliverables, milestones, and timelines.',
        logoSrc: uoroverLogo
    },
    {
        title: 'Software Developer',
        company: 'University of Ottawa Mars Rover Team (uORover)',
        location: 'Ottawa, ON',
        dates: 'September 2022 - September 2023',
        description:
            'Developed ROS & Arduino-based teleoperation system including inverse kinematics implementation, transforming the arm from static hardware to a closed-loop operable system. Operated the robotic arm at the Canadian International Rover Challenge (CIRC) 2023 & 2024,',
        logoSrc: uoroverLogo
    },
]
