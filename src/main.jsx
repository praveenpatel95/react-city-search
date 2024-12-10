import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SearchPlaces from "./Component/SearchPlaces/Index.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchPlaces />
  </StrictMode>,
)
