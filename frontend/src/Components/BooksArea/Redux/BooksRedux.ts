import BooksModel from "../../../models/books";

// bookId, bookName ,summary, genreId ,price, stock ,genreName

//step I - which data we need (data structure)
/*export class BookData{
    bookId:string;
    bookName:string;
    summary:string
    genreId:number;
    price:number;
    stock: number;
    genreName: string;
};*/

export class BookState{
    public books:BooksModel[] = [];
};

//actions : update, add, delete, download???
//Step II - what is the methods that we should implement
export enum BookActionType{
    BookUpdate = "BookUpdate",
    BookAdd = "BookAdd",
    BookDelete = "BookDelete",
    BookDownload = "BookDownload",
    BookClear = "BookClear",
    BookOverrideAll = "BookOverrideAll",
};

//Step III - data structure of our redux state
export interface BookAction{
    type:BookActionType;
    payload?:any;
};

//Step IV - our functions
export function BookAddAction(newBook:String):BookAction{
    return {type: BookActionType.BookAdd, payload:newBook}
};

export function BookUpdateAction(newBook:BooksModel):BookAction{
    return {type: BookActionType.BookUpdate, payload:newBook}
};

export function BookClearAction():BookAction{
    return {type:BookActionType.BookClear}
};

export function BookDeleteAction(bookId:string){
    return {type:BookActionType.BookDelete, payload:bookId}
};
export function BookOverrideAllBooks(books: BooksModel[]) {
    return {type:BookActionType.BookOverrideAll, payload:books}
}
//Step V - our reducer function
//reducer (redux hook, will be called by redux only, not us)
export function BookReducer(currentState:BookState = new BookState,action:BookAction):BookState{
    const newState = {...currentState};
    //for fix the redux bug...
    let books = newState.books.map(value => Object.assign({}, value));
    switch(action.type){
        case BookActionType.BookAdd:
            books.push(JSON.parse(action.payload));
            newState.books=books;
            break;

        case BookActionType.BookDelete:
            const indexDelete = books.findIndex(book=> {return book.bookId === action.payload})
            books.splice(indexDelete, 1);
            newState.books=books;
            break;

        case BookActionType.BookUpdate:
            const indexUpdate = books.findIndex(book=> {return book.bookId === action.payload.id})
            books[indexUpdate] = action.payload;
            newState.books=books;
            break;

        case BookActionType.BookDownload:
                
            break;

        case BookActionType.BookClear:
            newState.books = [];
        break;

        case BookActionType.BookOverrideAll:
            newState.books= action.payload;
        break;

    }
    
    return newState;
}
