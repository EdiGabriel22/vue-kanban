import BoardController from "./infra/controller/BoardController"
import PgPromiseConnection from "./infra/database/PgPromisseConnection"
import ExpressAdapter from "./infra/http/ExpressAdapter"

const connection = new PgPromiseConnection()
const http = new ExpressAdapter()
new BoardController(http, connection)
http.listen(3000)
process.on("exit", async function() {
    await connection.close()
})