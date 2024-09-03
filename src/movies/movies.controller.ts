import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getMovies() {
    return this.moviesService.fetchMovies();
  }

  @Post('favorites')
  async addFavorite(@Body() movie, @Req() req) {
    return this.moviesService.addFavoriteMovie(req.body.userId, movie);
  }

  @Get('favorites')
  async getFavorites(@Req() req) {
    return this.moviesService.getFavoriteMovies(req.body.userId);
  }
}
