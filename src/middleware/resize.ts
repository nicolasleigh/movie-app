import sharp from 'sharp';
import fs from 'node:fs';

// @ts-ignore
export const resizePoster = async (req, res, next) => {
    const sizeX = [1080, 720, 480];
    const sizeY = [720, 480, 360];
    let fileName = '';
    let resizedImg = [];
    for (let i in sizeX) {
        fileName = sizeX[i] + 'w' + '-' + req.body.posterName;
        resizedImg.push(fileName);
        await sharp(req.file.path)
            .resize(sizeX[i], sizeY[i], {
                fit: 'fill',
                position: sharp.gravity.center,
            })
            .toFile(
                '/Code/01PersonalProject/MovieApp/Movie-App-Backend/uploads/poster/' +
                    fileName
            );
    }
    fs.unlinkSync(req.file.path);
    return res.json({ posterName: resizedImg });
};

// @ts-ignore
export const resizeAvatar = async (req, res, next) => {
    let fileName = 128 + 'w' + '-' + req.body.avatarName;
    await sharp(req.file.path)
        .resize(128, 128, {
            fit: 'fill',
            position: sharp.gravity.center,
        })
        .toFile(
            '/Code/01PersonalProject/MovieApp/Movie-App-Backend/uploads/avatar/' +
                fileName
        );

    fs.unlinkSync(req.file.path);
    req.body.avatarName = fileName;
    next();
};
