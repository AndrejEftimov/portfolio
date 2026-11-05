import { Route, Routes } from 'react-router'
import ContactPage from './contact/pages/ContactPage.jsx'
import HomePage from './home/pages/HomePage.jsx'
import AppShell from './layouts/AppShell.jsx'
import MorePage from './more/pages/MorePage.jsx'
import ProjectPage from './projects/pages/ProjectPage.jsx'
import ProjectsPage from './projects/pages/ProjectsPage.jsx'
import NotFoundPage from './shared/routing/NotFoundPage.jsx'
import { ROUTES } from './shared/routing/routes.js'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.projects} element={<ProjectsPage />} />
        <Route path={ROUTES.projectPattern} element={<ProjectPage />} />
        <Route path={ROUTES.more} element={<MorePage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
