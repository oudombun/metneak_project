package com.example.demo.Service;

import com.example.demo.Repository.ArticleRepo.ArticleReposit;
import com.example.demo.Repository.model.Article;
import com.example.demo.Service.ArticalService.ArticaleServiceIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticalServiceImp implements ArticaleServiceIn {
    @Autowired
    ArticleReposit articleReposit;
    @Override
    public void add(Article article) {
        articleReposit.add(article);
    }

    @Override
    public List<Article> findall() {
        return articleReposit.findall();
    }
}
