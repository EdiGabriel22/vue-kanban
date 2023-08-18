import Board from "../entity/Board"
import pgp from "pg-promise"

export default class BoardService {
    
    constructor() {

    }

    async getBoards() {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app")
        const boardsData = await connection.query("SELECT id_board, name FROM edi.board", [])
        const boards: Board[] = []
        for (const boardData of boardsData) {
            const cardsData = await connection.query("SELECT * FROM edi.card join edi.column using (id_column) where id_board = $1", [boardData.id_board])
            let estimative = 0
            for (const cardData of cardsData) {
                estimative += cardData.estimative
            }
            const board = new Board(boardData.name)
            board.estimative = estimative
            boards.push(board)
        }
        await connection.$pool.end()
        return boards
    }
}