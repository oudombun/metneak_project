package com.example.demo.Repository.ArticleRepo;

import com.example.demo.Repository.model.Article;

import java.util.List;

public interface ArticleReposit {
    void add(Article article);
    List<Article> findall();

}
