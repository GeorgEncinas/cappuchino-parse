if (process.argv.length < 3) {
    console.log('no parameters found');
    process.exit(1);
}

const file=process.argv[2],
    pathPDF='data/FCyT/2024-01/'+file+'.pdf';
    pathJSON='data/FCyT/2024-01/'+file+'.json';

const fs=require('fs'),
    moment=require('moment'),
    pdfText=require('pdf-text'),
    cases=[{
        regex:/Facultad de Ciencias y Tecnolog(.{1})a-UMSS/
    },{
        /* semester */
        regex:/(\d{1}) del (20\d{2})/,
        parse:(result)=>{
            json.semester=result[1]+'/'+result[2];
        }
    },{
        regex:/GESTION (\d{1})\/(20\d{2})/,
        parse:(result)=>{
            json.semester=result[1]+'/'+result[2];
        }
    },{
        regex:/Horario de Clases por Plan de estudios/
    },{
        regex:/\d{1} de \d{1}/
    },{
        regex:/\d{1,2}\/\d{1,2}\/\d{4} \d{2}:\d{2}/
    },{
        regex:/Nivel/,
        parse:(result)=>{
            headers.push('level');
        }
    },{
        regex:/Materia/,
        parse:(result)=>{
            headers.push('subject');
        }
    },{
        regex:/Grupo/,
        parse:(result)=>{
            headers.push('group');
        }
    },{
        regex:/^DIA$/,
        parse:(result)=>{
            headers.push('day');
        }
    },{
        regex:/Hora Ambiente/,
        parse:(result)=>{
            headers.push('time');
        }
    },{
        regex:/Tipo/,
        parse:(result)=>{
            headers.push('type');
        }
    },{
        regex:/Docente/,
        parse:(result)=>{
            headers.push('teacher');
        }
    },{
        regex:/^Carrera: *$/,
        parse:(result)=>{
            nextCareer=true;
        }
    },{
        /* career */
        regex:/^Carrera: *([A-Z .\(\)]+)$/,
        parse:(result)=>{
            json.name=result[1]
            .replace(/\s+/g, ' ')
            .trim();
        }
    },{
        regex:/(LICENCIATURA .*)/,
        parse:(result)=>{
            if(nextCareer){
                nextCarrer=false;

                json.name=result[0]
                .replace(/\s+/g, ' ')
                .trim();
            }
        }
    },{
        /* day */
        regex:/^(LU|MA|MI|JU|VI|SA)$/,
        parse:(result)=>{
            indexSchedule=json
            .levels[indexLevel]
            .subjects[indexSubject]
            .groups[indexGroup]
            .schedule
            .push({
                day:result[1]
            })-1;

            /*console.log(
                '84\t->\t[col:%s]\t[row:%s]\t[level:%s]\t[code:%s]\t[group:%s]\t[%s]\t\t[%s]',
                column,row,indexLevel,indexSubject,indexGroup,
                headers[column],result[1]
            );*/
            row=(headers.length===column+1)?row++:row;
            column=(column+1)%headers.length;
        }
    },{
        /* level; type; group */
        regex:/^ *(\d{1,2}|[A-Z]{1}|[A-Z]{1}\d{1}|\d{1}[A-Z]{1}) *$/,
        parse:(result)=>{
            let index;

            switch(headers[column]){
                case 'level':
                    index=json
                    .levels
                    .findIndex((item)=>{
                        return item.code===result[1];
                    });

                    if(index<0){
                        indexLevel=json
                        .levels
                        .push({
                            code:result[1],
                            subjects:[]
                        })-1;
                    }else{
                        indexLevel=index;
                    }

                    break;
                case 'group':
                    index=json
                    .levels[indexLevel]
                    .subjects[indexSubject]
                    .groups
                    .findIndex((item)=>{
                        return item.code===result[1];
                    });

                    if(index<0){
                        indexGroup=json
                        .levels[indexLevel]
                        .subjects[indexSubject]
                        .groups
                        .push({
                            code:result[1],
                            schedule:[]
                        })-1;
                    }else{
                        indexGroup=index;
                    }

                    break;
                case 'type':
                    json
                    .levels[indexLevel]
                    .subjects[indexSubject]
                    .groups[indexGroup]
                    .schedule[indexSchedule]
                    .isClass=(result[1]==='C');

                    break;
            }

            /*console.log(
                '136\t->\t[col:%s]\t[row:%s]\t[level:%s]\t[code:%s]\t[group:%s]\t[%s]\t\t[%s]',
                column,row,indexLevel,indexSubject,indexGroup,
                headers[column],result[1]
            );*/
            row=(headers.length===column+1)?row++:row;
            column=(column+1)%headers.length;
        }
    },{
        /* code */
        regex:/(\d{7})/,
        parse:(result)=>{
            const index=json
            .levels[indexLevel]
            .subjects
            .findIndex((item)=>{
                return item.code===result[1];
            });

            if(index<0){
                indexSubject=json
                .levels[indexLevel]
                .subjects
                .push({
                    code:result[1],
                    name:'',
                    groups:[]
                })-1;
            }else{
                indexSubject=index;
            }

            hasCodeSubject=true;

            /*console.log(
                '168\t->\t[col:%s]\t[row:%s]\t[level:%s]\t[code:%s]\t[group:%s]\t[%s]\t\t[%s]',
                column,row,indexLevel,indexSubject,indexGroup,
                headers[column],result[1]
            );*/
            row=(headers.length===column+1)?row++:row;
            column=(column+1)%headers.length;
        }
    },{
        /* schedule */
        regex:/(\d{3,4})\ *-(\d{3,4})\ *\((.*)\)/,
        parse:(result)=>{
            json
            .levels[indexLevel]
            .subjects[indexSubject]
            .groups[indexGroup]
            .schedule[indexSchedule]
            .start=result[1];

            json
            .levels[indexLevel]
            .subjects[indexSubject]
            .groups[indexGroup]
            .schedule[indexSchedule]
            .end=result[2];

            const start=moment(result[1],'hmm'),
                end=moment(result[2],'hmm'),
                diff=end.diff(start,'minutes');

            json
            .levels[indexLevel]
            .subjects[indexSubject]
            .groups[indexGroup]
            .schedule[indexSchedule]
            .duration=diff/45;

            json
            .levels[indexLevel]
            .subjects[indexSubject]
            .groups[indexGroup]
            .schedule[indexSchedule]
            .room=result[3];

            /*console.log(
                '212\t->\t[col:%s]\t[row:%s]\t[level:%s]\t[code:%s]\t[group:%s]\t[%s]\t\t[%s]\t[%s]\t[%s]',
                column,row,indexLevel,indexSubject,indexGroup,
                headers[column],result[1],result[2],result[3]//,diff
            );*/
            row=(headers.length===column+1)?row++:row;
            column=(column+1)%headers.length;
        }
    },{
        /* subject;teacher */
        regex:/([A-ZÑ \.]*)/,
        parse:(result)=>{
            switch(headers[column]){
                case 'subject':
                    const index=json
                    .levels[indexLevel]
                    .subjects
                    .findIndex((item)=>{
                        return item.name===result[1];
                    });

                    if(index<0){
                        if(!hasCodeSubject){
                            indexSubject=json
                            .levels[indexLevel]
                            .subjects
                            .push({
                                code:'',
                                name:result[1],
                                groups:[]
                            })-1;
                        }else{
                            json
                            .levels[indexLevel]
                            .subjects[indexSubject]
                            .name=result[1];
                        }
                    }

                    break;
                case 'teacher':
                    json
                    .levels[indexLevel]
                    .subjects[indexSubject]
                    .groups[indexGroup]
                    .schedule[indexSchedule]
                    .teacher=result[1];

                    break;
            }

            /*console.log(
                '296\t->\t[col:%s]\t[row:%s]\t[level:%s]\t[code:%s]\t[group:%s]\t[%s]\t\t[%s]',
                column,row,indexLevel,indexSubject,indexGroup,
                headers[column],result[0]
            );*/
            row=(headers.length===column+1)?row++:row;
            column=(column+1)%headers.length;
        }
    }];

let headers=[],
    column=0,
    row=0,
    nextCareer=false,
    indexLevel=-1,
    hasCodeSubject=false,
    indexSubject=-1,
    indexGroup=-1,
    indexSchedule=-1,
    json={
        madeIn:'SCESI UMSS',
        support:'@georg',
        code:process.argv[2],
        levels:[]
    };

pdfText(pathPDF,(error,chunks)=>{
    chunks
    .forEach((line)=>{
        const result=cases
        .some((item)=>{
            if(item.regex.test(line)){
                /*console.log(
                    '----> [%s] [%s]',
                    item.regex,
                    line
                );*/
                if(item.parse){
                    item.parse(item.regex.exec(line));
                }

                return true;
            }else{
                return false;
            }
        });

        if(!result){
            console.log('NO MATCH',line);
        }

        /* groups.teacher fill */
        json
        .levels
        .forEach((level)=>{
            level
            .subjects
            .forEach((subject)=>{
                subject
                .groups
                .forEach((group)=>{
                    group.teacher=group
                    .schedule
                    .filter((item)=>{
                        return item.isClass;
                    })
                    .reduce((sum,item)=>{
                        if(!sum.includes(item.teacher)){
                            sum.push(item.teacher);
                        }

                        return sum;
                    },[])
                    .join(' - ');

                    if(!group.teacher){
                        /* if all types are P */
                        group.teacher=group
                        .schedule
                        .reduce((sum,item)=>{
                            if(!sum.includes(item.teacher)){
                                sum.push(item.teacher);
                            }

                            return sum;
                        },[])
                        .join(' - ');
                    }
                });
            });
        });
    });

    fs.writeFile(
        pathJSON,
        JSON.stringify(json,null,4),
        (error)=>{
            if(error){
                throw error;
            }

            console.log('  > file %s.pdf saved',file);
        }
    );
});

