export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Haoling Huang'
export const headline = 'Sun Yat-sen University'
export const introduction = "Information Engineering"
export const introduction2 ="School of System Science and Engineering"
export const email = 'huanghling8@mail2.sysu.edu.cn'
export const githubUsername = 'Skylarkkkk'

// about page
export const aboutMeHeadline = 'Why I build up this web?'
export const aboutParagraphs = [
  "Hello! I'm an undergraduate student at Sun Yat-sen University in Guangzhou, China. Welcome to my personal homepage!",
  "Actually, it's purely out of personal interest that I want to build a personal homepage to better showcase myself. I'll be updating my latest works and news on my personal website, so stay tuned!",
]
// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about my life, my thoughts, and my work. I hope you can find something interesting here."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/skylarkk_03/',
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/Skylarkk03',
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/Skylarkkkk',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'nodedotjs',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'wechat',
  'python',
  'latex',
  'matlab',
  'tiktok',
  'bilibili',
]
