/**
 * Estos datos en las propiedades 
 * NO tienen que ser iguales a book.class.ts.
 * Hablamos de los datos que van en la petición y no tienen 
 * por que tener una correspondencia directa con un objeto completo del dominio
 */
export class BookDto {
    readonly title: string;
    readonly genre: string;
    readonly description: string;
    readonly author: string;
    readonly publisher: string;
    readonly pages: string;
    readonly image_url: string;
}