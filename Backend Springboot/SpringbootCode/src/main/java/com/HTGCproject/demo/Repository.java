package com.HTGCproject.demo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Repository extends MongoRepository<Book,String> {

}
