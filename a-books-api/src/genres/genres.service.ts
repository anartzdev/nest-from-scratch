import { Injectable } from '@nestjs/common';
import { slugify } from 'src/helpers/slugify';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './genre.entity';
import { genres } from './genres.mock';

@Injectable()
export class GenresService {
  findAll() {
    return genres;
  }

  findOne(id: number) {
    const findIndex = this.getSelectIndexGenre(id);
    if (findIndex === -1) {
      console.warn('Not exist select genre');
      return {};
    }
    return genres[findIndex];
  }
  create(newGenre: CreateGenreDto) {
    let genre = new Genre();

    genre.id = genres.length + 1;
    genre.name = newGenre.name;
    genre.slug = slugify(newGenre.name);

    genres.push(genre);

    return genre;
  }

  remove(id: number) {
    // check if exist genre in array
    const findIndex = this.getSelectIndexGenre(id);
    if (findIndex > -1) genres.splice(findIndex, 1);
    // show all genres (with remove genre if exist)
    return genres;
  }

  update(id: number, updateGenre: UpdateGenreDto) {
    // check if exist genre in array
    const findIndex = this.getSelectIndexGenre(id);
    if (findIndex > -1) {
      genres[findIndex] = {
        id,
        ...updateGenre,
      };
    } else {
      console.warn('No exist select genre and NOT update nothing');
    }
    return genres;
  }

  private getSelectIndexGenre(genreId: number) {
    return genres.findIndex((item) => item.id === genreId);
  }
}
