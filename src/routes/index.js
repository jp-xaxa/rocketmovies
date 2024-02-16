const { Router } = require("express")

const usersRoutes = require("./users.routes")
const moviesRoutes = require("./movies.routes")

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/moves", moviesRoutes)

module.exports = routes
