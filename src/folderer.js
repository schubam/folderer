const fs = require('fs');
const {join,extname} = require('path');

class Folderer {
    constructor(path) {
        this.path = path;
    }

    run() {
        this.createFolders();
        this.moveFiles();
    }

    extensions() {
        return fs.readdirSync(this.path)
            .map(file => extname(file).split('.')[1])
            .reduce((memo, extension) => {
                if (extension && memo.indexOf(extension) === -1) {
                    memo.push(extension);
                }
                return memo;
            }, [])
            .sort();
    }

    createFolders() {
        this.extensions().forEach(extension => {
            const folder = join(this.path, extension);
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder)
            }
        });
    }

    moveFiles() {
        const files = fs.readdirSync(this.path);
        files
            .filter(file => !fs.lstatSync(join(this.path, file)).isDirectory())
            .forEach(file => {
                const extension = extname(file).split('.')[1];
                if (extension) {
                    const destination = join(this.path, extension, file);
                    fs.renameSync(join(this.path, file), destination);
                }
            });
    }
}

module.exports = Folderer;
