import CardRepository from '../domain/repository/CardRepository';

export default class CardService {
    constructor(readonly CardRepository: CardRepository) {

    }
    
    async getCards(idColumn: number) {
        const cards = await this.CardRepository.findAllByIdColumn(idColumn)
        return cards
    }
}