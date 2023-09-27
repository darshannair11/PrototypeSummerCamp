package com.HTGCproject.demo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prototype/books")
@CrossOrigin("http://localhost:3000")
@AllArgsConstructor
public class Controller {
    private final BookService bookService;

    @GetMapping
    public List<Book> returnBooks(){
        return bookService.getAllBooks();
    }

    @PostMapping
    public void insertBook(@RequestBody Book book){
        //System.out.println(book);
        bookService.addBook(book);
    }
}
