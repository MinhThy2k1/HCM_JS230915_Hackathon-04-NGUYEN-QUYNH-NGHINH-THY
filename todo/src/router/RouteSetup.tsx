import { lazy } from "../util"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={lazy(() => import("../pages/layout/layout"))()}></Route>
      </Routes>

    </BrowserRouter>
  )

}