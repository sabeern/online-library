const express = require('express');
const router = express.Router();
router.get('/',(req,res)=> {
    const bookList = [{bookName:'Adventures of Tom Sawyer',Author:'Mark Twain',book_name:'book1.jpg',refNo:1,newArrival:'true',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'The Moon and Sixpence',Author:'Somerset Maughan',book_name:'book2.jpg',refNo:2,newArrival:'true',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Far from the Madding',Author:'Thomas Hardy',book_name:'book3.jpg',refNo:3,newArrival:'false',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Around the World in days',Author:'Jules Verne',book_name:'book4.jpg',refNo:4,newArrival:'true',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Adventures of Tom Sawyer',Author:'George Orwell',book_name:'book3.jpg',refNo:5,newArrival:'true',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Adventures of Sherlock',Author:'Arthur Conan Doyle',book_name:'book1.jpg',refNo:6,newArrival:'false',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'The Merchant of Venice',Author:'Shakespeare',book_name:'book2.jpg',refNo:7,newArrival:'true',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Adventures of Tom Sawyer',Author:'George Orwell',book_name:'book4.jpg',refNo:8,newArrival:'false',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Antony and Cleopatra',Author:'Shakespeare',book_name:'book2.jpg',refNo:9,newArrival:'true',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Count of Monte Cristo',Author:' Alexander Dumas',book_name:'book3.jpg',refNo:10,newArrival:'false',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Canterbury Tales',Author:'Chaucer',book_name:'book2.jpg',refNo:11,newArrival:'true',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'},
                    {bookName:'Crime and Punishment',Author:'Dostoevsky',book_name:'book1.jpg',refNo:12,newArrival:'false',content:'A book review is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. A book review may be a primary source, opinion piece, summary review or scholarly review.'}];
        const menuValue=[{menu:'Home',link:'/'},
                        {menu:'New Arrivals',link:'newArrivals'},
                        {menu:'Book Details',link:'bookDetails'}];
        const title='Home';
        
    /*res.render('home',{bookList,menuValue,title});*/
    res.render('home',{bookList,menuValue,title});
});
module.exports=router;



