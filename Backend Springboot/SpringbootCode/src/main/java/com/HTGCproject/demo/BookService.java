package com.HTGCproject.demo;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class BookService {
    private final Repository bookRepository;

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public void addBook(Book book){
        bookRepository.insert(book);
    }
}
