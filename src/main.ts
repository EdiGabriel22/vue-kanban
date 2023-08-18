import express from "express"
import ColumnService from "./service/ColumnService"
import BoardService from "./service/BoardService"
import CardService from "./service/CardService"

const app = express()

app.get("/boards", async (req, res) => {
    const boardService = new BoardService()
    const boards = await boardService.getBoards()
    res.json(boards)
})

app.get("/boards/:idBoard/columns", async (req, res) => {
    const columnService = new ColumnService()
    const columns = await columnService.getColumns(parseInt(req.params.idBoard))
    res.json(columns)
})

app.get("/boards/:idBoard/columns/:idColumn/cards", async (req, res) => {
    const cardService = new CardService()
    const cards = await cardService.getCards(parseInt(req.params.idColumn))
    res.json(cards)
})

app.listen(3000, () => console.log("Server is running on port 3000"))