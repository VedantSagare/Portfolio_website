package com.vedant.portfolio.controller;

import com.vedant.portfolio.model.PortfolioData;
import com.vedant.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/portfolio")
    public ResponseEntity<PortfolioData> getPortfolio() {
        return ResponseEntity.ok(portfolioService.getPortfolioData());
    }
}
