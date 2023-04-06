export class PortfolioDto{
    constructor(
        public id: string,
        public imageUrl: string,
        public projectUrl: string,
        public title: string,
        public desc: string
    ){}
}