if (process.argv.length < 4) {
    console.log('no parameters found, check filename and path');
    process.exit(1);
}
const join = require('path').join;
const file_system = require('fs');
const archiver = require('archiver');
const moment = require('moment');
const gestion = process.argv[2];
const source_dir = `${process.argv[3]}/${gestion}`
const careerGestion = `${process.argv[3]}/${gestion}.json`
const indexDataCareerGestion = `${process.argv[3]}/index.json`
const indexData = join(`${process.argv[3]}/../index.json`)

const dateFormat = moment().format('DD-MM-YYYY_HH-mm');

const fileOuput = `backup-old-parsed-${gestion}_${dateFormat}.zip`;
var output = file_system.createWriteStream(fileOuput);
var archive = archiver('zip');

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
    var rimraf = require("rimraf");
    rimraf(`${source_dir}`, function (error) {
        if (!error) console.log(`clean work for parse gestion ${gestion}`);
        else console.log(`Not clean work for parse gestion ${gestion}`);
        console.log('output :>> ', fileOuput);
    });
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

// append files from a sub-directory and naming it `new-subdir` within the archive (see docs for more options):
archive.directory(source_dir, source_dir);
archive.file(careerGestion, { name: careerGestion });
archive.file(indexDataCareerGestion, { name: indexDataCareerGestion });
archive.file(indexData, { name: indexData });
archive.finalize();