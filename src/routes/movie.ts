import { createMovie, getLatestMovies } from '../controllers/movie.js';
import { isAuth } from '../middleware/auth.js';
import {
    fileSizeErrorHandler,
    movieUpload,
    multerErrorHandler,
    posterUpload,
} from '../middleware/multer.js';
import { resizePoster } from '../middleware/resize.js';
import { test } from '../middleware/test.js';
import { router } from '../utils/expressRouter.js';

router.get('/latest-movies', getLatestMovies);

router.post(
    '/upload-movie',
    movieUpload.single('video'),
    multerErrorHandler,
    (req: any, res: any) => {
        res.json({ movieName: req.body.movieName });
    },
    test
);
router.post(
    '/upload-poster',
    posterUpload.single('poster'),
    multerErrorHandler,
    resizePoster,
    // (req: any, res: any) => {
    //     res.json({ posterName: req.body.posterName });
    // },
    test
);

router.post('/create-movie', createMovie);
export default router;
