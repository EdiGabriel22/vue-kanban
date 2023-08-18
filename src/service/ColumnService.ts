import ColumnRepository from "../domain/repository/ColumnRepository";

export default class ColumnService {
    constructor(readonly ColumnRepository: ColumnRepository) {

    }

    async getColumns(idBoard: number) {
        const columns = await this.ColumnRepository.findAllByIdBoard(idBoard)
        return columns
    }
}