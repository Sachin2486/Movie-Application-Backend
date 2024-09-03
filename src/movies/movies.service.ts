import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async fetchMovies(): Promise<Movie[]> {
    const response = await axios.get(
      'https://imdb-api.com/en/API/Top250Movies/k_your_api_key'
    );
    return response.data.items.map(item => ({
      id: item.id,
      title: item.title,
      year: item.year,
      image: item.image,
    }));
  }

  async addFavoriteMovie(userId: string, movie: Movie): Promise<void> {
    const user = await this.userModel.findById(userId);
    user.favorites.push(movie);
    await user.save();
  }

  async getFavoriteMovies(userId: string): Promise<Movie[]> {
    const user = await this.userModel.findById(userId);
    return user.favorites;
  }
}
