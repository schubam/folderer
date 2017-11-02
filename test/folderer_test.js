const expect = require('expect.js');
const os = require('os');
const fs = require('fs');
const {join, sep} = require('path');

const writeTestFile = function (file) {
    fs.open(file, "w", function (error, fd) {
        fs.writeFile(fd, 'test', (err) => {
            if (!err) {
                fs.close(fd, (e) => {
                    if (error) {
                        console.error('error closing file', e);
                    }
                });
            }
        });
    });
};

const deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + sep + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

const withTestFile = function (name, func) {
    writeTestFile(name);
    func(name);
    fs.unlinkSync(name);
};

describe('Folderer', function () {
    const Folderer = require('../src/folderer');
    const folder = fs.mkdtempSync(os.tmpdir());

    before(function () {
        const extensions = ['epub', 'pdf', 'mobi'];
        for (let i = 0; i < 3; i++) {
            writeTestFile(`${folder}${sep}file${i + 1}.${extensions[0]}`);
            writeTestFile(`${folder}${sep}file${i + 1}.${extensions[1]}`);
            writeTestFile(`${folder}${sep}file${i + 1}.${extensions[2]}`);
        }
    });

    after(function () {
        deleteFolderRecursive(folder)
    });

    describe('constructor', function () {
        it('should be store path', function () {
            const folderer = new Folderer('/tmp');
            expect(folderer.path).to.be('/tmp');
        });
    });

    describe('#extensions', function () {
        it('finds unique file extensions', function () {
            const folderer = new Folderer(folder);
            expect(folderer.extensions()).to.eql(['mobi', 'pdf', 'epub'].sort());
            expect(folderer.extensions().length).to.be(3);
        });

        it('skips files without extension', function () {
            const folderer = new Folderer(folder);
            withTestFile(join(folder, 'file_with_no_extension'), () => {
                expect(folderer.extensions()).to.eql(['mobi', 'pdf', 'epub'].sort());
                expect(folderer.extensions().length).to.be(3);
            });
        });
    });


    describe('#createFolders', function () {
        it('creates folders for unique file extensions', function () {
            const folderer = new Folderer(folder);
            folderer.createFolders();
            expect(fs.existsSync(join(folder, 'mobi'))).to.be.ok();
            expect(fs.existsSync(join(folder, 'epub'))).to.be.ok();
            expect(fs.existsSync(join(folder, 'pdf'))).to.be.ok();
        });
    });

    describe('#moveFiles', function () {
        it('moves files into folders by file extension', function () {
            const folderer = new Folderer(folder);
            folderer.createFolders();
            folderer.moveFiles();
            expect(fs.readdirSync(join(folder, 'mobi')).length).to.be(3);
            expect(fs.readdirSync(join(folder, 'pdf')).length).to.be(3);
            expect(fs.readdirSync(join(folder, 'epub')).length).to.be(3);
        });

        it('skips files without extension', function () {
            const folderer = new Folderer(folder);
            withTestFile(join(folder, 'file_with_no_extension'), () => {
                folderer.createFolders();
                folderer.moveFiles();
                expect(fs.readdirSync(join(folder, 'mobi')).length).to.be(3);
                expect(fs.readdirSync(join(folder, 'pdf')).length).to.be(3);
                expect(fs.readdirSync(join(folder, 'epub')).length).to.be(3);
            });
        });
    });

    describe('#run', function () {
      it('runs all operations', function () {
          const folderer = new Folderer(folder);
          folderer.run();
          expect(fs.readdirSync(join(folder, 'mobi')).length).to.be(3);
          expect(fs.readdirSync(join(folder, 'pdf')).length).to.be(3);
          expect(fs.readdirSync(join(folder, 'epub')).length).to.be(3);
      });
    });
});