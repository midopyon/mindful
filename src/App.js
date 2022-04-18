import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import SurveyPage from './pages/Survey'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="quizz" element={<SurveyPage />} />
                    <Route path="recursos" element={<Blank />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
