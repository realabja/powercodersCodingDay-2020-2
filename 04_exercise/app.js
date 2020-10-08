const books = function(){
    this.list = [];
    this.add = (book)=>{
        this.list.push(book);
    }
    this.getAll = ()=>{
        return this.list.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    

}
const book = function(name, sold, price){
    this.name = name;
    this.sold = sold;
    this.price = price;
}
const booklist = new books()
const book1 = new book("my book", true, 123);
const book2 = new book("your book" , false, 3);
const book3 = new book("their book ", true, 13);

booklist.add(book1)
booklist.add(book2)
booklist.add(book3)
console.log(booklist.getAll())
const showresult = function (){
    let string = " ";
    for (let i = 0; i <booklist.list.length; i++){
    string += ` the book ${booklist.list[i].name} with price of ${booklist.list[i].price} ${booklist.list[i].sold?"has been sold ":"is available"}`;
    
    document.querySelector(".output").innerHTML = string;

} 
}
const addthething = function(){
    let name = document.querySelector("#name").value;
    let sold = document.querySelector("#sold").checked;
    let price = document.querySelector("#price").value; 
    x = new book(name, sold, price);
    booklist.add(x)
    showresult()   
};
