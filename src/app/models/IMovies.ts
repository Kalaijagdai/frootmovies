export interface IMovie {
    id: number,
    key: string,
    name: string,
    description: string,
    genres: string[],
    rate: string,
    length: string,
    img: string,
    hidden: boolean
}
export interface IGenre {
    action: string,
	adventure: string,
	biography: string,
	comedy: string,
	crime: string,
	drama: string,
	history: string,
	mystery: string,
	scifi: string,
	sport: string,
	thriller: string
}