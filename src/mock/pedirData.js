import productos from "./data"

export const pedirData = () => {
    return new Promise((res) => {
        setTimeout(() => {
                res(productos)
        }, 2000)
    })
}