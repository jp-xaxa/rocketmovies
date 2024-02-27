import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { NewMovie } from "../pages/NewMovie"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new-movie" element={<NewMovie />} />
    </Routes>
  )
}
