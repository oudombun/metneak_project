package com.example.demo.Service.ArticalService;

import com.example.demo.Repository.model.Article;

import java.util.List;

public interface ArticaleServiceIn {
    void add(Article article);
    List<Article> findall();
}
