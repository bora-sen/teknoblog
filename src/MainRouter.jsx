import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,Blog,Policies,PostPage} from "./pages";

function MainRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  )
}

export default MainRouter