import { Column } from "../entity/Column"
import pgp from "pg-promise"

export default class ColumnService {
    constructor() {

    }

    async getColumns(idBoard: number) {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app")
        const columnsData = await connection.query("SELECT name,has_estimative FROM edi.column where id_board = $1", [idBoard])
        const columns: Column[] = []
        for (const columnData of columnsData) {
            columns.push(new Column(columnData.name, columnData.has_estimative))
        }
        await connection.$pool.end()
        return columns
    }
}