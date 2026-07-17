import type { Achievement, Language, Project, SkillGroup, TimelineItem } from '../types/content'

const shared = {
  email: 'Jamesonzzl@126.com',
  name: 'Jameson',
  fullName: 'Jameson Zhou Ze Lin',
}

export const content = {
  en: {
    ...shared,
    locale: 'en-US',
    languageName: 'English',
    nav: { home: 'Home', about: 'About', projects: 'Projects', experience: 'Experience', achievements: 'Achievements', contact: 'Contact', resume: 'Resume' },
    common: { viewProjects: 'View projects', aboutMe: 'About me', learnMore: 'Explore project', back: 'Back to projects', print: 'Print / Save as PDF', copy: 'Copy email', copied: 'Email copied', menu: 'Open menu', close: 'Close menu', all: 'All', search: 'Search projects', noResults: 'No projects match this search yet.', clear: 'Clear filters', skip: 'Skip to content', theme: 'Toggle color theme', language: 'Switch language' },
    home: {
      eyebrow: 'Hangzhou, China · Student portfolio',
      hero: 'Creative student. Thoughtful teammate. Detail-focused contributor.',
      intro: 'I’m a high-school student at BASIS Hangzhou who enjoys turning ideas and information into organized, carefully made project work.',
      scroll: 'Selected work & interests',
      selected: 'Selected project',
      projectLead: 'A hands-on exploration of face-responsive robotics, physical construction, wiring, calibration, and teamwork.',
      interestsTitle: 'What keeps me curious',
      interests: [
        ['Basketball', 'Discipline, communication, and trust in motion.'],
        ['Vinyl records', 'A love of physical music, album artwork, and design culture.'],
        ['Creative design', 'Making complex ideas clear, useful, and visually considered.'],
        ['Teamwork', 'Sharing responsibility and helping a group move forward.'],
      ],
      achievements: 'Selected achievements',
      closeTitle: 'See what I’m building toward.',
      closeText: 'Explore my project work and achievements, or get in touch about school projects, creative work, and academic opportunities.',
    },
    about: {
      eyebrow: 'About Jameson', title: 'Organized in approach. Curious by nature.',
      intro: 'Jameson Zhou Ze Lin is a high-school student at BASIS Hangzhou in Hangzhou, China. He is interested in basketball, vinyl-record collecting, creative design, science, teamwork, and future-focused ideas.',
      workTitle: 'How I work', work: 'I approach school and team projects with an organized, practical mindset. I enjoy turning scattered information into clear structures, helping plan presentations, supporting visual design, and completing details carefully.',
      leadTitle: 'Leadership & teamwork', lead: 'I’m willing to lead when a team needs direction, but I also value shared planning, clear communication, and giving everyone meaningful responsibility.',
      goalTitle: 'Looking ahead', goal: 'My long-term goal is to attend a strong university and keep developing academically, creatively, and personally.',
      beyond: 'Beyond projects', basketball: 'Basketball has strengthened my discipline, responsibility, communication, and trust in teammates.', vinyl: 'Collecting vinyl records connects music with physical design, album artwork, and culture—an interest that keeps me attentive to detail and presentation.',
      skills: 'Skills & working strengths',
    },
    skills: [
      { title: 'Collaboration', level: 'Strong', items: ['Teamwork', 'Leadership', 'Communication', 'Shared planning'] },
      { title: 'Project contribution', level: 'Comfortable', items: ['Information organization', 'Interview support', 'Data collection', 'Presentation outlining', 'Detail development', 'Visual-design support'] },
      { title: 'Technical familiarity', level: 'Developing', items: ['Visual Studio Code', 'Basic digital project workflows', 'Hardware assembly and wiring'] },
      { title: 'Personal discipline', level: 'Strong', items: ['Organization', 'Attention to detail', 'Reliability', 'Sports discipline'] },
    ] satisfies SkillGroup[],
    projectsPage: { eyebrow: 'Project index', title: 'Ideas made tangible.', intro: 'A growing collection of technical, design, research, and team projects. Search and filters are ready for future additions.', filters: { all: 'All', technology: 'Technology', design: 'Design', teamwork: 'Teamwork', research: 'Research' } },
    projects: [{ slug: 'robotic-head', title: 'Robotic Head', date: '2025-10-15', categories: ['technology', 'design', 'teamwork'], summary: 'A robotic head designed to detect a human face and respond with actions based on facial input.', role: 'Primary builder responsible for much of the physical assembly and for connecting the project’s wiring.', contribution: 'Completed a major portion of the construction and hardware-connection work while contributing within a team.', challenge: 'Calibrating the motor connections and controlling how far each motor rotated.', process: 'The work moved from physical assembly to wiring, connection checks, and repeated motor calibration. Each adjustment helped align the intended response with the physical movement.', lesson: 'The project taught me not to carry every responsibility alone and reinforced the value of sharing work within a team.', tools: ['iPad', 'Computer', 'Electronic wiring', 'Motors', 'Physical assembly'] }] satisfies Project[],
    projectDetail: { eyebrow: 'Featured project · Abstract illustration', overview: 'Overview', role: 'My role', contribution: 'Contribution', challenge: 'Main challenge', process: 'Process', lesson: 'Lesson learned', tools: 'Tools & materials' },
    experiencePage: { eyebrow: 'Experience & education', title: 'Learning through shared work.', intro: 'A timeline of education, academic collaboration, and practical project contribution.' },
    timeline: [
      { label: 'Education', date: 'Current high-school education', title: 'BASIS Hangzhou', text: 'High-school student in Hangzhou, China, developing across academic, creative, and collaborative work.' },
      { label: 'Academic experience', date: '2025', title: 'World Scholar’s Cup', text: 'Participated in a collaborative academic competition experience, preparing across varied topics with teammates and focusing especially on science and future-oriented design.' },
      { label: 'Project experience', date: 'Ongoing', title: 'Team-project contribution', text: 'Supports participant interviews, data collection, detailed information organization, presentation structure, and visual design across collaborative work.' },
    ] satisfies TimelineItem[],
    achievementsPage: { eyebrow: 'Recognition', title: 'Achievements built with teams.', intro: 'Sports recognition that reflects discipline, contribution, and shared effort.', certificates: 'Certifications', certificateText: 'Certificate details will be added as they become available.' },
    achievements: [
      { title: 'BASIS BISCAL 2025 Basketball — First-Place Team', date: '2025', category: 'basketball', detail: 'Part of the first-place basketball team at BASIS BISCAL.' },
      { title: 'BASIS BISCAL 2025 Volleyball — All-Star Player', date: '2025', category: 'volleyball', detail: 'Recognized as an All-Star Player at BASIS BISCAL.' },
      { title: 'HSSL Tournament — First-Place Team', date: '2026-05-27', category: 'team', detail: 'Part of the first-place team at the HSSL Tournament.' },
    ] satisfies Achievement[],
    contact: { eyebrow: 'Contact', title: 'Let’s start a thoughtful conversation.', intro: 'I welcome conversations about school projects, creative work, and academic opportunities.', location: 'Hangzhou, China', note: 'Email is the best way to reach me.' },
    resume: { eyebrow: 'Printable résumé', title: 'Jameson Zhou Ze Lin', summary: 'High-school student at BASIS Hangzhou with interests in creative design, science, basketball, vinyl-record culture, and collaborative project work.', education: 'Education', project: 'Selected project', experience: 'Academic experience', achievements: 'Achievements', skills: 'Skills', instruction: 'Use your browser’s print dialog and choose “Save as PDF.”' },
    notFound: { eyebrow: '404', title: 'This page is off the record.', text: 'The page you’re looking for may have moved. Let’s return to the portfolio.' },
    footer: { line: 'Creative thinking · Organized work · Shared momentum', rights: 'All rights reserved.' },
  },
  zh: {
    ...shared,
    locale: 'zh-CN', languageName: '简体中文',
    nav: { home: '首页', about: '关于我', projects: '项目', experience: '经历', achievements: '荣誉', contact: '联系', resume: '简历' },
    common: { viewProjects: '查看项目', aboutMe: '了解我', learnMore: '查看项目', back: '返回项目', print: '打印 / 保存为 PDF', copy: '复制邮箱', copied: '邮箱已复制', menu: '打开菜单', close: '关闭菜单', all: '全部', search: '搜索项目', noResults: '暂时没有符合条件的项目。', clear: '清除筛选', skip: '跳到主要内容', theme: '切换颜色主题', language: '切换语言' },
    home: { eyebrow: '中国杭州 · 学生作品集', hero: '富有创造力，重视团队合作，专注每一个细节。', intro: '我是 BASIS 杭州的一名高中生，喜欢把想法和信息整理成清晰、细致的项目成果。', scroll: '精选项目与兴趣', selected: '精选项目', projectLead: '一次关于人脸响应机器人、实体搭建、线路连接、电机校准与团队协作的动手实践。', interestsTitle: '让我保持好奇的事', interests: [['篮球', '在运动中学习纪律、沟通与信任。'], ['黑胶唱片', '欣赏实体音乐、唱片封面与设计文化。'], ['创意设计', '让复杂想法变得清晰、实用且有视觉条理。'], ['团队合作', '共同承担责任，帮助团队持续向前。']], achievements: '精选荣誉', closeTitle: '看看我正在努力的方向。', closeText: '欢迎浏览我的项目与荣誉，或就学校项目、创意合作和学术机会与我联系。' },
    about: { eyebrow: '关于 Jameson', title: '做事有条理，始终保持好奇。', intro: 'Jameson Zhou Ze Lin 是一名就读于 BASIS 杭州的高中生。他对篮球、黑胶唱片收藏、创意设计、科学、团队合作以及面向未来的想法感兴趣。', workTitle: '我的工作方式', work: '我以有条理、务实的方式参与学校和团队项目。我喜欢把零散信息整理成清晰结构，协助规划演示、支持视觉设计，并认真完成每一个细节。', leadTitle: '领导与协作', lead: '当团队需要方向时，我愿意承担领导责任；同时也重视共同规划、清晰沟通，并让每位成员都承担有意义的任务。', goalTitle: '未来方向', goal: '我的长期目标是进入一所优秀的大学，并在学术、创意与个人成长方面持续进步。', beyond: '项目之外', basketball: '篮球锻炼了我的纪律、责任感、沟通能力，以及对队友的信任。', vinyl: '收藏黑胶唱片让我把音乐与实体设计、唱片封面和文化联系起来，也让我更加关注细节与呈现方式。', skills: '能力与工作优势' },
    skills: [
      { title: '团队协作', level: '较强', items: ['团队合作', '领导力', '沟通', '共同规划'] },
      { title: '项目贡献', level: '熟悉', items: ['信息整理', '访谈支持', '数据收集', '演示提纲', '细节完善', '视觉设计支持'] },
      { title: '技术基础', level: '发展中', items: ['Visual Studio Code', '基础数字项目流程', '硬件组装与线路连接'] },
      { title: '个人素养', level: '较强', items: ['组织能力', '注重细节', '可靠负责', '运动纪律'] },
    ] satisfies SkillGroup[],
    projectsPage: { eyebrow: '项目索引', title: '把想法变成现实。', intro: '这里将持续收录技术、设计、研究与团队项目，并为未来新增项目准备了搜索与筛选功能。', filters: { all: '全部', technology: '技术', design: '设计', teamwork: '协作', research: '研究' } },
    projects: [{ slug: 'robotic-head', title: '机器人头部', date: '2025-10-15', categories: ['technology', 'design', 'teamwork'], summary: '一个能够检测人脸，并根据面部输入作出动作响应的机器人头部。', role: '主要搭建者，负责大部分实体组装与项目线路连接。', contribution: '完成了项目中相当一部分结构搭建和硬件连接工作，并与团队成员共同推进项目。', challenge: '校准电机连接，并控制电机旋转的角度。', process: '项目从实体组装开始，随后进行线路连接、连接检查和反复的电机校准。每一次调整都让预期响应与实际动作更加一致。', lesson: '这个项目让我认识到不应独自承担所有责任，也进一步理解了团队分工与共同完成任务的重要性。', tools: ['iPad', '电脑', '电子线路', '电机', '实体组装'] }] satisfies Project[],
    projectDetail: { eyebrow: '精选项目 · 抽象示意图', overview: '项目概述', role: '我的角色', contribution: '主要贡献', challenge: '核心挑战', process: '实施过程', lesson: '项目收获', tools: '工具与材料' },
    experiencePage: { eyebrow: '经历与教育', title: '在共同实践中学习。', intro: '记录我的教育经历、学术协作与实际项目贡献。' },
    timeline: [
      { label: '教育', date: '目前的高中教育', title: 'BASIS 杭州', text: '就读于中国杭州，在学术、创意与团队协作方面持续发展。' },
      { label: '学术经历', date: '2025', title: '世界学者杯', text: '参与这一协作型学术竞赛，与队友共同准备多个主题，并重点关注科学与未来导向设计。' },
      { label: '项目经历', date: '持续进行', title: '团队项目贡献', text: '在合作项目中支持参与者访谈、数据收集、详细信息整理、演示结构规划与视觉设计。' },
    ] satisfies TimelineItem[],
    achievementsPage: { eyebrow: '荣誉记录', title: '与团队共同取得的成果。', intro: '这些体育荣誉体现了纪律、投入与团队协作。', certificates: '证书', certificateText: '证书详情将在信息完善后补充。' },
    achievements: [
      { title: 'BASIS BISCAL 2025 篮球 — 团体第一名', date: '2025', category: 'basketball', detail: '作为球队成员获得 BASIS BISCAL 篮球团体第一名。' },
      { title: 'BASIS BISCAL 2025 排球 — 全明星球员', date: '2025', category: 'volleyball', detail: '在 BASIS BISCAL 排球比赛中获评全明星球员。' },
      { title: 'HSSL 锦标赛 — 团体第一名', date: '2026-05-27', category: 'team', detail: '作为团队成员在 HSSL 锦标赛中获得第一名。' },
    ] satisfies Achievement[],
    contact: { eyebrow: '联系我', title: '让我们开始一次有想法的交流。', intro: '欢迎就学校项目、创意工作或学术机会与我交流。', location: '中国杭州', note: '电子邮件是联系我的最佳方式。' },
    resume: { eyebrow: '打印版简历', title: 'Jameson Zhou Ze Lin', summary: 'BASIS 杭州高中生，关注创意设计、科学、篮球、黑胶唱片文化和协作型项目。', education: '教育', project: '精选项目', experience: '学术经历', achievements: '荣誉', skills: '能力', instruction: '打开浏览器打印窗口，并选择“保存为 PDF”。' },
    notFound: { eyebrow: '404', title: '这一页暂时不在唱片上。', text: '你寻找的页面可能已经移动。让我们回到作品集。' },
    footer: { line: '创意思考 · 有序行动 · 共同前进', rights: '保留所有权利。' },
  },
} as const

export type ContentPack = (typeof content)[Language]
