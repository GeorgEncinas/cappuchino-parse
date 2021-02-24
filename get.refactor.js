if (process.argv.length < 3) {
    console.log('no parameters found');
    process.exit(1);
}

const request=require('request');
const { promises: fs, createWriteStream } = require("fs");
const join = require('path').join;

const url = 'http://www.fcyt.umss.edu.bo/horarios/';
const gestion = process.argv[2];
const path = join(__dirname, 'data', 'FCyT', gestion)
    , path_body = join(__dirname, 'body');

const today = new Date().toLocaleString();

const regexp = />(\d* .*)<\/f.*\r*\n*.*href="(.*)">(.*.pdf).*\r*\n*.*>(\d+:\d+) ((\d+)-(\d+)-(\d+))</gu

const get = () => {
    console.log('request fcyt index ...');
    request(url, (error, response, body) => {
        if (error) {
            throw error;
        }

        console.log('parsing fcyt index ...');
        if (response.statusCode == 200) {
            console.log(body.length)
            var buffer = new Array()
                , result
            // console.log(buffer);
            while ((result = regexp.exec(body)) !== null) {
                // if (parseInt(result[7])>=8)  ** revisar que paso aqui!!
                buffer.push({
                    curriculum: result[1]
                    , url: result[2]
                    , name: result[3]
                    , time: result[4]
                    , date: {
                        day: result[6],
                        month: result[7],
                        year: result[8]
                    },
                });
            }
            console.log(buffer, !buffer.length ? 'no found pdf' : '');
            console.log("downloading fcyt index");
            if (buffer.length > 0) {
                res = {
                    madeIn: "SCESI UMSS",
                    semester: gestion,
                    date: today,
                    support: "@georg",
                    index: buffer
                }
                fs.appendFile(join(path_body, 'index.json'), JSON.stringify(res, null, 4));
            }

            buffer.forEach((element) => {
                console.log('saved: ' + element.name);
                request(element.url).pipe(
                    createWriteStream(join(path, element.name)));
            });
        }
    });
}

const initDir = (path) => fs.mkdir(path, { recursive: true });

Promise.all([
    initDir(path),
    initDir(path_body)
])
    .then(() => get());
