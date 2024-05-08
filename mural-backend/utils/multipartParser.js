const Busboy = require('busboy');
const getRawBody = require('raw-body');
const contentType = require('content-type');

const allowedMethods = ['POST', 'PUT', 'PATCH'];
const fileParser = ({ rawBodyOptions, BusboyOptions } = {}) => [
    /* A middleware that parses the request body and populates req.body and req.files. */
    (req, res, next) => {
        const type = req.headers['content-type'];
        if (
            req.rawBody === undefined &&
            allowedMethods.includes(req.method) &&
            type &&
            type.startsWith('multipart/form-data')
        ) {
            getRawBody(
                req,
                Object.assign(
                    {
                        length: req.headers['content-length'],
                        limit: '10mb',
                        encoding: contentType.parse(req).parameters.charset,
                    },
                    rawBodyOptions
                ),
                (err, rawBody) => {
                    if (err) next(err);
                    else {
                        req.rawBody = rawBody;
                        next();
                    }
                }
            );
            console.log('FILE PARSER');
        } else {
            next();
        }
    },
    (req, res, next) => {
        const type = req.headers['content-type'];
        if (
            allowedMethods.includes(req.method) &&
            type &&
            type.startsWith('multipart/form-data')
        ) {
            let busboy = null;
            try {
                busboy = new Busboy(
                    Object.assign({ headers: req.headers }, BusboyOptions)
                );
            } catch (err) {
                next();
                return;
            }
            req.files = [];

            busboy.on('field', (fieldname, value) => {
                if (!req.body) req.body = {};
                if (fieldname.includes('[')) {
                    const field = fieldname.split('[')[0];

                    if (req.body[field]) {
                        req.body[field].push(value);
                    } else {
                        req.body[field] = [value];
                    }
                } else req.body[fieldname] = value;
            });

            busboy.on(
                'file',
                (fieldname, file, filename, encodign, mimetype) => {
                    let fileBuffer = Buffer.from('');
                    file.on('data', (data) => {
                        fileBuffer = Buffer.concat([fileBuffer, data]);
                    });
                    file.on('end', () =>
                        req.files.push({
                            fieldname,
                            originalname: filename,
                            encodign,
                            mimetype,
                            buffer: fileBuffer,
                        })
                    );
                }
            );

            busboy.on('finish', () => {
                if (req.files.length > 0) {
                    req.file = req.files[0];
                }
                const body = {};
                Object.keys(req.body).map((key) => {
                    if (!/^\d+$/.test(key)) {
                        body[key] = req.body[key];
                    }
                });
                Object.keys(body).map((key) => {
                    console.log(`${key}: ${body[key]}`);
                });

                req.body = body;
                next();
            });

            busboy.end(req.rawBody);
        } else {
            next();
        }
    },
];

module.exports = fileParser();
module.exports.fileParser = fileParser;
