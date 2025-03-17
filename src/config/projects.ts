// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic achievements and contributions."

export const awards: Array<ActivityItemType> = [
  {
    name: 'CMC Provincial Competition',
    description: 'Second Prize',
    date: '2024',
    location: 'SYSU, Guangzhou',
  },
  {
    name: 'Sun Yat-sen University Outstanding Student  Scholarship',
    description: 'First Class',
    date: '2023-2024',
    location: 'SYSU, Guangzhou',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'remote-sensing-band-calculator',
    description: 'Actually it is just a homework for my remote sensing course.I place it here to test the function of the website.',
    link: { href: 'https://github.com/Skylarkkkk/remote-sensing-band-calculator_homework', label: 'GitHub Cards' },
    tags: ['C++', 'remote sensing', 'band calculator'],
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Music',
    description:
      'I love playing drums and guitar.You can find some videos in my wechat channel.I world share some videos irregularly.',
    date: '2025-03-18',
    location: 'Guangzhou',
  },
]
