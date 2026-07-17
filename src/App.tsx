import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout, ScrollAndTitle } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage, ProjectDetailPage } from './pages/ProjectsPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { AchievementsPage } from './pages/AchievementsPage'
import { ContactPage } from './pages/ContactPage'
import { ResumePage } from './pages/ResumePage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  const location = useLocation()
  return <>
    <ScrollAndTitle />
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
}
