import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import { Layout } from './components/layout';

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
     <Suspense fallback={t('loading')}>
      <Layout />
     </Suspense>
    </BrowserRouter>
  )
}

export default App
