import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase"
import PgPromisseConnection from "../../src/infra/database/PgPromisseConnection"
import BoardService from "../../src/service/BoardService"
import BoardRepositoryMemory from "../../src/infra/repository/BoardRepositorymemory"

test("Deve listar os quadros", async function() {
    const connection = new PgPromisseConnection()
    const boardRepository = new BoardRepositoryDatabase(connection)
    // const boardRepository = new BoardRepositoryMemory()
    const boardService = new BoardService(boardRepository)
    const boards = await boardService.getBoards()
    expect(boards).toHaveLength(1)
    const [board] = boards
    expect(board.name).toBe("Projeto 1")
    await connection.close()
})