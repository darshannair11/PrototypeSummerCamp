package com.HTGCproject.demo;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Book {
    @Id
    private String id;
    private String name;
    private String author;
    private String date;
    private String src;
    private String desc;

    public Book(String name, String author, String date, String src, String desc) {
        this.name = name;
        this.author = author;
        this.date = date;
        this.src = src;
        this.desc = desc;
    }
}







