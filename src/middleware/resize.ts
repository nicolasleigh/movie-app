import sharp from 'sharp';
import fs from 'node:fs';

// sharp can't have same input and output filename, so load to buffer then
// write to disk after resize is complete
// @ts-ignore
export const resizePoster = async (req, res, next) => {
    // sharp.cache(false);
    const sizeX = [200];
    const sizeY = [300];
    let fileName = '';
    let resizedImg = [];
    for (let i in sizeX) {
        fileName = req.body.posterName;
        resizedImg.push(fileName);
        const buffer = await sharp(req.files.poster[0].path)
            .resize(sizeX[i], sizeY[i], {
                fit: 'fill',
                position: sharp.gravity.center,
            })
            .toBuffer();
        fs.writeFile(
            '/Code/01PersonalProject/MovieApp/Movie-App-Backend/uploads/poster/' +
                fileName,
            buffer,
            (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            }
        );
    }
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
