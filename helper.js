const PATH_TOP250 = "./top250.json"

function readTop250(cb) {
    fs.readFile(PATH_TOP250, (err, data) => {
        if (err) {
            return cb(err);
        }

        try {
            cb(null, JSON.parse(data));
        } catch (err) {
            return cb(err);
        }
    });
}