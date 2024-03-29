if (process.argv.length < 3) {
    console.log('no parameters found');
    process.exit(1);
}

const pdftext = require('pdf-text')
    , join = require('path').join
    , gestion = process.argv[2]
    // , path = join(__dirname, '..', 'data', 'FCyT', gestion)
    , path = join(__dirname, 'data', 'FCyT', gestion)
    , file = require('file')
    , fs = require('fs')
    , async = require('async')
    , pdf2json = (path, done) => {
        pdftext(path, (error, chunks) => {
            console.log("  >",path)
            console.log("  > reading")
            let result = parseTXT(error, chunks);
            // console.log(result)
            done(result);
        });
    }
    , regexp_gest = /(\d+)-(\d+)/g
    , gest = regexp_gest.exec(gestion)
    , parseTXT = (error, chunks) => {
        console.log("  > parsing")
        if (error) {
            console.log('error:' + error);
            return;
        }
        debugger;

        var regex1 = /^([A-Z \(\)]+)\(([0-9]+)\)$/
            , regex2 = /^ ?([ABCDEFGHIJ]) ?$/
        //     , regex3 = /^([0-9]{7}) ?([A-Z¥\. ]+)/
        //     , regex31 = /^(\d{7})/
        //     , regex32 = /^([A-Z¥\. ]+)/
        //     , regex4 = /^(\d{1,2}[A-Z]?)$/
            , regex5 = /^(LU|MA|MI|JU|VI|SA) ([0-9]{3,4})-([0-9]{3,4})\((.*)\)$/
        //     , regex6 = /^([A-Z¥ \.]{4,})$/
            , regex7 = /^\(\*\)$/
            , regexMayusName = /^[A-Z ]+$/

            , regexp_fix = /(\d{7})([\w ]*)/gu
            

        // var flag1 = false
        //     , flag2 = false
        //     , flag3 = false
        //     , flag31 = false
        //     , flag6 = false

        // var level = undefined
        //     , subject = undefined
        //     , group = undefined

        // var i1 = -1
        //     , i2 = -1
        //     , i3 = -1
        //     , i4 = -1

        var result = undefined
            , parseDuration = (s, f) => {
                var _s = (parseInt(parseInt(s) / 100) * 60) + (parseInt(s) % 100)
                    , _f = (parseInt(parseInt(f) / 100) * 60) + (parseInt(f) % 100)

                return parseInt((_f - _s) / 45)
            }
        
        ///////////////////////
        //  prepare multi-index array
        ///////////////////////
        // i = 0 // 0-1477   1478 items
        var pageInfo = [];
        var search = chunks[0];

        for (var i = 0; i < chunks.length; i++) {
            if (chunks[i]==search )
                pageInfo.push({
                    headerPage : i,
                    raceName : undefined,
                    level : undefined,
                    dataStart: undefined,
                    dataEnd: undefined,
                    footerPage: undefined
                });
        }

        // [for 2018-01]
        for (var i = 0; i < pageInfo.length-1; i++) {
            var element = pageInfo[i];
            var nextElement = pageInfo[i+1];
            element.raceName = element.headerPage + 5;
            element.level = element.raceName + 1;
            element.dataStart = element.level + 6;
            element.footerPage = nextElement.headerPage - 1;
            element.dataEnd = element.footerPage - 4;
        }
        element = pageInfo[pageInfo.length-1];
        element.raceName = element.headerPage + 5;
        element.level = element.raceName + 1;
        element.dataStart = element.level + 6;
        element.footerPage = chunks.length - 1;
        element.dataEnd = element.footerPage - 4;

        ////////////////////////
        // log pageInfo, indexes
        ////////////////////////
        // console.log("----------------info1-----------------")
        // pageInfo.forEach( (element) =>{
        //     console.log(element.dataStart,element.dataEnd)
        //     for (var i = element.dataStart; i <= element.dataEnd; i++)
        //         console.log("index=",i,chunks[i])
        // })
        // console.log("--------------------------------------")


        // scrap data pdf in chunks to json
        var materias = []

        pageInfo.forEach( (element) =>{
            try {
                localLevel = regex2.exec(chunks[element.level])[1]
            } catch (error) {
                console.error("    > error:","regexp2.exec( chunks[element.level]=\""+chunks[element.level]+"\" )")
                console.error("    > error:","no as array, to extract level letter")
                // case: 2013-02
            }
            localMats = [];
            if(materias.length>0){
                lastMateria = materias[materias.length-1]
// *******************************************                console.log("lastMateria:",JSON.stringify(lastMateria,null,4))
                if(lastMateria.level == localLevel){
                    console.log("  > page: level, repeat detect it doesn't have any effect")
                    for (var i = element.dataStart; i <= element.dataEnd; i++) {
                        //start fix code
                        twoData = regexp_fix.exec(chunks[i])
                        if (twoData){
                                lastMateria.mats.push(twoData[1])
                                if (twoData[2].length>0)
                                lastMateria.mats.push(twoData[2])
                            // console.log("twoData:",JSON.stringify(twoData,null,4))
                        }
                        else
                        //end fix code
                        lastMateria.mats.push(chunks[i]);
                    }
                }else{
                    for (var i = element.dataStart; i <= element.dataEnd; i++) {
                        //start fix code
                        twoData = regexp_fix.exec(chunks[i])
                        if (twoData){
                                localMats.push(twoData[1])
                                if (twoData[2].length>0)
                                    localMats.push(twoData[2])
                            // console.log("twoData:",JSON.stringify(twoData,null,4))
                        }
                        else
                        //end fix code
                        localMats.push(chunks[i]);
                    }
                        materias.push({
                        level : localLevel,
                        mats : localMats
                    }) 
                }
            }else{
                for (var i = element.dataStart; i <= element.dataEnd; i=i+1) {
                    // console.log(JSON.stringify(chunks[i],null,4))
                    //start fix code
                    twoData = regexp_fix.exec(chunks[i])
                    if (twoData){
                            localMats.push(twoData[1])
                            if (twoData[2].length>0)
                                localMats.push(twoData[2])
// **********************                        console.log("twoData:",JSON.stringify(twoData,null,4))
                    }
                    else
                    //end fix code
                        localMats.push(chunks[i]);
                    // FIX: for element serie completer (name of doc not push),
                    // case: CIVIL (NUEVO)
                    if(i == element.dataEnd && regexMayusName.exec(chunks[i+1]))
                            localMats.push(chunks[i+1]);
                }
                    materias.push({
                        level : localLevel,
                        mats : localMats
                        }
                    )
                console.log(JSON.stringify(materias,null,4))
            }
        });
        // console.log(JSON.stringify(materias,null,4))
        // formating json of materias in levels
        materias.forEach( (element) =>{
            mats = element.mats
            matsJson = []
            i = 0;
            while (i < mats.length) {
                var materia = {
                    codeSubject : mats[i],
                    nameSubject : mats[i+1],
                    group : mats[i+2],
                    schedule : mats[i+3],
                    teacher : mats[i+4],
                    isAuxOrLab: false
                };

// *******************                console.log(materia)
                var resSchedule = regex5.exec(materia.schedule)
                try {
                    localDuration = parseDuration(
                     resSchedule[2],
                     resSchedule[3])
                } catch (error) {
                    console.error("    > error:","regexp5.exec( materia.schedule=\""+materia.schedule+"\" )")
                    console.error("    > error:","regexp as",resSchedule)
                    console.error("    > error:","materia as")
                    console.log(JSON.stringify(materia,null,4))
                    // case: 2013-01
                }
                materia.schedule = { 
                    day : resSchedule[1],
                    start : resSchedule[2],
                    end : resSchedule[3],
                    duration: localDuration,
                    room : resSchedule[4],
                    teacher : materia.teacher
                };
                var aux = regex7.exec(mats[i+5]);
                if (aux){
                    materia.isAuxOrLab = true
                    i++
                }
                i=i+5;
                matsJson.push(materia)
            }
            element.mats = matsJson
        });
        // console.log(JSON.stringify(materias,null,3))
        
        
        ////////////////////////
        // prepare result pdf 2 JSON
        ////////////////////////
        carrera = regex1.exec(chunks[5])
        var result2 = {
            madeIn: "SCESI UMSS",
            // semester: "1/2018",
            semester: `${parseInt(gest[2])}/${gest[1]}`,
            support: "@georg",
            code: carrera[2],
            name: carrera[1],
            levels: []
        };
        
        materias.forEach( (element) =>{
            var localSubjects = [];
            lasNameOfTeacher = undefined
            mats = element.mats
            mats.forEach( (element) =>{
                // console.log(element)
                if (localSubjects.length > 0){
                    lastSubject = localSubjects[localSubjects.length-1]
                    lastGroup = lastSubject.groups[lastSubject.groups.length-1]

                    if ( lastSubject.code == element.codeSubject){
                        // FIX: set corret name of teacher
                        // case: first shedule is aux, display name teacher as aux
                        if(!element.isAuxOrLab)
                            lasNameOfTeacher = element.teacher
                        
                        if ( lastGroup.code == element.group){
                            lastGroup.schedule.push(element.schedule)
                            // FIX: set corret name of teacher
                            // case: first shedule is aux, display name teacher as aux
                            lastGroup.teacher = lasNameOfTeacher
                        }else{
                            group ={
                                code : element.group, 
                                schedule : [element.schedule] ,
                                teacher : element.teacher //  ** 
                            }
                            lastSubject.groups.push(group)
                        }
                    }else{
                        localSubjects.push({
                            code : element.codeSubject, // codsis mat
                            name : element.nameSubject, // nombre mat
                            groups: [{                  // grupos de la mat
                                code : element.group,
                                schedule : [element.schedule],
                                teacher : element.teacher //  **
                            }],
                        });
                    }
                }else{
                    localSubjects.push({
                        code : element.codeSubject, // codsis mat
                        name : element.nameSubject, // nombre mat
                        groups: [{                  // grupos de la mat
                            code : element.group,
                            schedule : [element.schedule],
                            teacher : element.teacher,  //  **
                        }],
                        // teacher : element.teacher, // teacher
                    });
                    
                }
            });
            result2.levels.push({
                code: element.level, // level {ABCDEF....}
                subjects: localSubjects
            });
        });
        // console.log(".>JSON")
        // console.log(JSON.stringify(result2,null,4))
        // console.log(".<JSON")

        return result2;
    }
    , q = async.queue((data, callback) => {
        // console.log(data)
        // console.log("data",data)   **********************
        pdf2json(data.item, (json) => {
            if (json) {
                fs.writeFile(join(data.path, json.code + '.json'), JSON.stringify(json,null,4),
                // fs.writeFile(join(data.path, json.code + '.json'), JSON.stringify(json),
                    (error) => {
                        if (error) { throw error }
                        console.log("  >",json.name,'saved');
                        // regexp_gest = /(\d+)-(\d+)/g
                        // gest = regexp_gest.exec(gestion)
                        summary.push({
                            code: json.code ,
                            name: json.name,
                            madeIn: "SCESI UMSS",
                            semester: `${parseInt(gest[2])}/${gest[1]}`,
                            support: "@georg"
                        });
                        // console.log("-------")
                        // console.log(json.code)
                        // console.log(json.name)
                        callback();
                    });
            } else {
                console.log(data.item + ' was ignored');
                callback();
            }
        });
    }, 100)

q.drain = () => {
    summary = summary.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1
        }
        return 0;
    });
    fs.writeFile(join(path, '..', gestion + '.json'), JSON.stringify(summary,null,4),
    // fs.writeFile(join(path, '..', gestion + '.json'), JSON.stringify(summary),
        (error) => {
            if (error) { throw error }

            console.log('  > summary saved');
        });
}

var summary = []

file.walk(path, (error, base, dirs, files) => {
    if (error) { throw error }
    files.forEach((element) => {
        var suffix = '.pdf';
        // var suffix = '.old';
        if (element.indexOf(suffix, element.length - suffix.length) !== -1) {
            q.push({ path: base, item: element });
        }
    });
});
