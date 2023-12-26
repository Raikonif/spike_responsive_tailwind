const BASE_URL = "http://localhost:3000/"


export interface article {
    id: number
    title: string
    author: string
    date: string
    content: string
    images: images[]
}
export interface images {
    id: number
    url: string
}
const getArticles = async (): Promise<article[]> => {
    const response = await fetch(BASE_URL + "articles")
    return response.json() || []
}

export {
    getArticles
}