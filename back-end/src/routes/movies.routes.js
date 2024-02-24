const { Router } = require("express")

const MoviesController = require("../controllers/MoviesController")

const moviesRoutes = Router()

const moviesController = new MoviesController()

moviesRoutes.post("/:user_id", moviesController.create)
moviesRoutes.get("/:id", moviesController.show)
moviesRoutes.delete("/:id", moviesController.delete)
moviesRoutes.get("/", moviesController.index)

module.exports = moviesRoutes
