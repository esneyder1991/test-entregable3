export const getRandomDimension = () => {
    //? Esta funcion debe retornar un numero del 1 al 126 que representa una dimesión.

    return Math.floor(Math.random() * 126) + 1
     //0 --- 0.999 * 126 ---> 0  -  125.999
    
}