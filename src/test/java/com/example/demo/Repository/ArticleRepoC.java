package com.example.demo.Repository;

import com.example.demo.Repository.ArticleRepo.ArticleReposit;
import com.example.demo.Repository.model.Article;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ArticleRepoC implements ArticleReposit {
    List<Article> articles=new ArrayList<>();
    @Override
    public void add(Article article) {
        this.add(article);
    }

    @Override
    public List<Article> findall() {
        return articles;
    }
}
