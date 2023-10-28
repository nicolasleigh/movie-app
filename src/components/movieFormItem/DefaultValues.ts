import dayjs from 'dayjs';

export const defaultValues = {
    title: '',
    description: '',
    language: 'english',
    public: true,
    director: '',
    actors: [],
    releaseYear: dayjs(),
    genres: [],
    type: 'tv',
    poster: '',
    video: '',
    tags: [],
};
