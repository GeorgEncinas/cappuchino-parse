if (process.argv.length < 4) {
    console.log('no parameters found');
    if (!process.argv[3]) {
        console.log('no previous gestion found');
    }
    process.exit(1);
}

const join = require('path').join
    , moment = require('moment')
    , gestion = process.argv[2]
    , previous_gestion = process.argv[3]
    , path = join(__dirname, 'data', 'FCyT', gestion)
    , fs = require('fs')
    , urlFCyT = '/data/FCyT'
    , styleCaseGestion = (string) => {
        const regexp_gest = /(\d+)-(\d+)/g
            , gest = regexp_gest.exec(gestion)
        return `${parseInt(gest[2])}/${gest[1]}`
    }

moment


let current = JSON.parse(fs.readFileSync(join(path, '..', gestion + '.json')));
let previous = JSON.parse(fs.readFileSync(join(path, '..', previous_gestion + '.json')));

function createIndexCareer(career, defautlGestion) {
    const indexOfCareer = {}
    career.forEach((singleCareer, index) => {
        if (defautlGestion)
            singleCareer.path = defautlGestion;
        const ref = {
            career: singleCareer,
            index
        };
        indexOfCareer[singleCareer.code] = ref;
    });
    return indexOfCareer;
}

function mergeGestion(current, previous) {
    const indexOfprevious = createIndexCareer(previous, previous_gestion);
    current.forEach(currentCareer => {
        const code = currentCareer.code;
        if (!indexOfprevious[code]) {
            currentCareer.path = gestion;
            currentCareer.semester = styleCaseGestion(gestion)
            previous.push(currentCareer);
        } else {
            const previousCareer = indexOfprevious[code].career;
            if (currentCareer.code === previousCareer.code){
                previousCareer.path = gestion;
                previousCareer.semester = styleCaseGestion(gestion)
                if (previousCareer.name != currentCareer.name) {
                    console.log(`  > Career (${code}): ${previousCareer.name} renamed to ${currentCareer.name}`)
                    previousCareer.name = currentCareer.name
                }
            }
        }
    });
    return previous
}

const sumaryMergeGestion = mergeGestion(current, previous);

const index = {
    default: 'FCyT',
    'FCyT': {
        config: {
            // url: urlFCyT,
            tittleGestion: styleCaseGestion(gestion),
            // url_gestion: `${urlFCyT}${gestion}`,
            news: `${urlFCyT}/news.json`,
            load: `${urlFCyT}/index.json`,
            path: `${urlFCyT}`,
            gestion
        },
    }
}

moment.locale('es')

const currentTime = moment().format('LLL');
const news = {
    date: `Actualizado el ${currentTime}`,
    files: [
        ""
    ]
}
var msgCareers = '';
if (current.length) {
    news.files = []
    current.forEach(element => {
        const msg = ` - ${element.name}`;
        news.files.push(element.name)
    });
    msgCareers = news.files.join('\n')
}

const message = `☕️ Carreras nuevamente actualizado el ${currentTime}
${msgCareers}

Actualicen la página y denle una revisada

Paginas oficiales:
✔️ http://scesi.org/capuchino (Principal)
✔️ https://capuchino-scesi.web.app (Respaldo)

Además, puedes unirte a nuestros canales para enterarte de actualizaciones de *cappuchino*, actividades de nuestra sociedad como también de nuestra carrera y universidad.
http://scesi.org/canal-whatsapp
http://scesi.org/canal-telegram

`;

console.log('------ message ------')
console.log(message)
console.log('------ message ------')

fs.writeFile(join(path, '../../', 'index.json'), JSON.stringify(index, null, 4),
    (error) => {
        if (error) { throw error }
        console.log('  > index summary saved');
    });

fs.writeFile(join(path, '../', 'index.json'), JSON.stringify(sumaryMergeGestion, null, 4),
    (error) => {
        if (error) { throw error }
        console.log('  > index fcyt summary saved');
    });

fs.writeFile(join(path, '../', 'news.json'), JSON.stringify(news, null, 4),
    (error) => {
        if (error) { throw error }
        console.log('  > news fcyt summary saved');
    });