function newTime() { return { date: JSON.stringify(new Date()) } }
var Config = new (function () {
    this.data = 'data/index.json'
    this.carreras = []
})()

var Templates = new (function () {
    this.tablero = '<table><tbody><tr><th class="period">'
        + '</th><th class="day LU">Lunes</th><th class="day MA">Martes</th>'
        + '<th class="day MI">Miércoles</th><th class="day JU">Jueves</th>'
        + '<th class="day VI">Viernes</th><th class="day SA">Sábado</th></tr>'

        + '<tr class="645"><th class="hour">06:45</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="730"><th class="hour">07:30</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="815"><th class="hour">08:15</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="900"><th class="hour">09:00</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="945"><th class="hour">09:45</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1030"><th class="hour">10:30</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1115"><th class="hour">11:15</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1200"><th class="hour">12:00</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1245"><th class="hour">12:45</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1330"><th class="hour">13:30</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1415"><th class="hour">14:15</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1500"><th class="hour">15:00</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr  class="1545"><th class="hour">15:45</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1630"><th class="hour">16:30</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1715"><th class="hour">17:15</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1800"><th class="hour">18:00</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1845"><th class="hour">18:45</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="1930"><th class="hour">19:30</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="2015"><th class="hour">20:15</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr>'
        + '<tr class="2100"><th class="hour">21:00</th><td class="LU"></td><td class="MA"></td>'
        + '<td class="MI"></td><td class="JU"></td><td class="VI"></td><td class="SA"></td></tr></tbody></table>';
    this.carrera = '<li class="added" name="carrera-{0}"><a class="carrera">{2}</a></li>'
    this.nivel = '<li name="nivel-{0}-{1}"><a class="nivel">Nivel {2}</a></li>'
    this.materia = '<li name="materia-{0}-{1}-{2}">'
        + '<a class="materia">{3}</a></li>'
    this.grupo = '<li name="grupo-{0}-{1}-{2}-{3}"><input type="checkbox" />'
        + '<a class="grupo">G: {4} {5}</a></li>'
    this.menu = '<div class="container change">\
                <div class="bar1"></div>\
                <div class="bar2"></div>\
                <div class="bar3"></div>\
                </div>';
})()

var Events = new (function () {
    this.position = 'fixed'
    this.fontSize = '12px'
    this.maxWith = '70%'

    this.clickCarreraNueva = function () {
        $('li.added').show()
        $('li.add').hide()
        $('li.opt').find('ul').hide()
    }
    this.clickCarrera = function () {
        var ul = $(this).parent().has('ul')
        if (ul.length === 0) {
            var i = $(this).parent().attr('name').substring(8)
            var element = $(this);

            var carrera = Config.carreras[i];
            var currentCarrera = carrera.path === Config.gestion ? carrera.name : carrera.name + ' (' + carrera.semester + ')';
            carrera.name = currentCarrera;
            element.text(carrera.name + ' ⏳...')
            var baseGestion = Config.path + '/' + carrera.path
            $.getJSON(baseGestion + '/' + carrera.code + '.json', /* newTime(), */
                function (json) {
                    if (typeof carrera.levels === 'undefined') {
                        Config.carreras[i] = json
                        Render.renderNiveles(i)
                        window.scrollTo(0, 0);
                        $('li.added').find('a:contains("'.concat(carrera.name, '")')).parent().removeClass().addClass('opt')
                        element.text(carrera.name + ' ☕')
                        $('li.added').hide()
                        $('li.add').show()

                    }
                })
                .error(function () {
                    element.text(carrera.name + ' 😥')

                })
        } else {
            window.scrollTo(0, 0);
            ul.children('ul').fadeToggle()
            $('li.added').hide()
            $('li.add').show()
        }
        return false
    }
    this.clickNivel = function () {
        var ul = $(this).parent().has('ul')
        if (ul.length === 0) {
            var i = $(this).parent().attr('name').substring(6).split('-')
            Render.renderMaterias(i)
        } else {
            ul.children('ul').fadeToggle()
        }
        return false
    }
    this.clickMateria = function () {
        var ul = $(this).parent().has('ul')
        if (ul.length === 0) {
            var i = $(this).parent().attr('name').substring(8).split('-')
            Render.renderGrupos(i)
        } else {
            ul.children('ul').fadeToggle()
        }
        return false
    }
    this.clickGrupo = function () {
        $(this).parent().children('input[type="checkbox"]').trigger('click')
    }
    this.checkGrupo = function () {
        var i = $(this).parent().attr('name').substring(6).split('-')
        if ($(this).is(':checked')) {
            Horario.addGrupo(i)
            Tablero.repaint()
            $(this).next('a.grupo').addClass('selected')
        } else {
            Horario.removeGrupo(i)
            Tablero.repaint()
            $(this).next('a.grupo').removeClass('selected')
        }
    }
    this.preview = function () {
        if ($('#schedule').hasClass('preview')) {
            $('#options').show('slow')
            $('.tools').removeClass('preview')
            $('footer').show('slow')
            $('#schedule').removeClass('preview')
            window.scrollTo(0, 0);
        }
        else {
            $('#options').hide('slow')
            $('.tools').addClass('preview')
            $('footer').hide('slow')
            $('#schedule').addClass('preview')
        }
    }
    this.print = function () {
        if (!$('#schedule').hasClass('preview')) {
            $('#options').hide('slow')
            $('.tools').addClass('preview')
            $('footer').hide('slow')
            $('#schedule').addClass('preview')
        }
        Tablero.minifyShedule()

        window.print()
    }

    this.sidebar = function () {
        if ($('#schedule').hasClass('preview')) {
            $('#options').show('slow')
            $('#schedule').removeClass('preview')
            // $('div.tools').css('display', '')
            window.scrollTo(0, 0);
        }
        else {
            $('nav').css('position', 'fixed')
            $('#options').hide('slow')
            $('#schedule').addClass('preview')
            // $('div.tools').css('display', 'none')
            if (Mobile.current) {
                $('table tr td').css('font-size', '10px')
                $("#viewport").attr(
                    "content",
                    "width=".concat(
                        $("table").width() + parseInt($("table").css("margin-right")),
                        ", initial-scale=1, user-scalable=yes"
                    )
                );
            }
        }

        if (Mobile.current)
            if ($('div.container').hasClass("change"))
                $('div.container').removeClass("change");
            else $('div.container').addClass("change")
    }

    // this.handleMousePos = function (event) {

    //     var mouseClickWidth = event.clientX;
    //     var mouseClickHeigth = event.clientY;
    //     var windowX = $(window).width() - 12

    //     if (Mobile.current)
    //         if (mouseClickWidth >= 250) {
    //             if (
    //                 mouseClickWidth < windowX ||
    //                 mouseClickHeigth > 198 ||
    //                 mouseClickHeigth < 50 ||
    //                 $('div.tools').css('display') == "none"
    //             )
    //                 Events.sidebar()
    //         }
    //         else if ($('nav').css('display') == "none")
    //             Events.sidebar()
    // }

    this.saveCache = function () {
        localStorage.setItem('options', JSON.stringify($('#options')[0].innerHTML, null))
        localStorage.setItem('schedule', JSON.stringify(Horario.schedule, null))
        localStorage.setItem('careers', JSON.stringify(Config.carreras, null))
    }
    this.restoreCache = function () {
        $('#options').html(JSON.parse(localStorage.getItem('options')))
        Horario.schedule.push.apply(Horario.schedule, JSON.parse(localStorage.getItem('schedule')))
        Config.carreras = JSON.parse(localStorage.getItem('careers'))
        $('a.grupo.selected').parent().children('input[type="checkbox"]').trigger('click')
        $('a.carrera').click(Events.clickCarrera)
        $('a.nivel').click(Events.clickNivel)
        $('a.materia').click(Events.clickMateria)
        $('a.grupo').click(Events.clickGrupo)
        $('a.grupo').parent().children('input[type="checkbox"]').change(Events.checkGrupo)
        $('li.add').click(Events.clickCarreraNueva)
        Tablero.repaint()
    }
    this.compareCache = function () {
        console.log(undefined)
    }
    this.deleteCache = function () {
        localStorage.removeItem('options')
        localStorage.removeItem('schedule')
        localStorage.removeItem('careers')
    }

})()

var Mobile = new (function () {

    this.current = false
    this.screen = window.screen

    this.isMobile = function () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
})()

var Horario = new (function () {
    this.schedule = new Array();

    this.addGrupo = function (index) {
        var li = $('li[name="grupo-' + index[0] + '-' + index[1] + '-' + index[2] + '-' + index[3] + '"]')
        materia = Config.carreras[index[0]].levels[index[1]].subjects[index[2]]
        grupo = materia.groups[index[3]]
        this.schedule.push([materia, grupo])
    }
    this.removeGrupo = function (index) {
        var li = $('li[name="grupo-' + index[0] + '-' + index[1] + '-' + index[2] + '-' + index[3] + '"]')
        materia = Config.carreras[index[0]].levels[index[1]].subjects[index[2]]
        grupo = materia.groups[index[3]]
        for (i = 0; i < this.schedule.length; i++) {
            var element = this.schedule[i]
            if (element[0].code === materia.code && element[1].code === grupo.code) {
                this.schedule.splice(i, 1)
            }
        }
    }
    this.restoreGroup = function (values) {
        this.schedule.push.apply(this.schedule, values);
    }
})()

var Tablero = new (function () {
    this.dias = { 'LU': 2, 'MA': 3, 'MI': 4, 'JU': 5, 'VI': 6, 'SA': 7 }
    this.periodos = { '645': 2, '730': 3, '815': 4, '900': 5, '945': 6, '1030': 7, '1115': 8, '1200': 9, '1245': 10, '1330': 11, '1415': 12, '1500': 13, '1545': 14, '1630': 15, '1715': 16, '1800': 17, '1845': 18, '1930': 19, '2015': 20, '2100': 21 }
    this.repaint = function () {

        $('#schedule').html(Templates.tablero)
        // if (Mobile.current)
        //     $("#viewport").attr("content", `width=device-width, initial-scale=1, user-scalable=yes`);

        for (var i in Horario.schedule) {
            materia = Horario.schedule[i][0]
            grupo = Horario.schedule[i][1]
            color = 'color' + ((i + 1) % 9)
            this.renderHorarios(materia, grupo, color)
        }

        if (Horario.schedule.length)
            this.joinCeldas()

        this.minifyShedule()

    }
    this.renderHorarios = function (materia, grupo, color) {
        for (var i in grupo.schedule) {
            this.renderHorario(
                grupo.schedule[i].day,
                grupo.schedule[i].start,
                grupo.schedule[i].duration,
                "".concat(grupo.schedule[i].isClass ? "" : "✳") +
                "".concat(materia.name) + '\n' + grupo.schedule[i].room + ' G:' +
                grupo.code + '',
                color
            )
        }
    }
    this.renderHorario = function (dia, hora, duracion, texto, color) {
        var dias = this.dias
        var periodos = this.periodos

        for (var i = 0; i < duracion; i++) {
            var celda = $('tr:nth-child(' + (periodos[hora] + i) + ') :nth-child(' + dias[dia] + ')')
            if (celda.text() !== '') {
                celda.removeClass().addClass('collision');
            } else {
                celda.addClass(color)
            }
            celda.append(texto + '<br />')

        }
    }

    this.minifyShedule = function () {

        var dias = this.dias
        var periodos = this.periodos
        var invertPeriodos = Object.keys(periodos).reverse()
        var i = 0, j = invertPeriodos.length

        if (Horario.schedule.length) {

            for (var dia in dias) {
                if ($("th.".concat(dia, ",td.").concat(dia, ":empty")).length === 21) {
                    $("th.".concat(dia, ",td.").concat(dia)).remove();
                    $("th.".concat(dia, ",td.").concat(dia)).remove();
                }
            }

            for (var hora1 in periodos) {
                if (
                    $("tr.".concat(hora1)).find("td:empty").length === // 6
                    $("tr.".concat(hora1)).find("td").length
                ) {
                    i++;
                    $("tr.".concat(hora1)).remove();
                }
                else
                    break
            }


            for (var i in invertPeriodos) {
                const hora = invertPeriodos[i];
                if (
                    $("tr.".concat(hora)).find("td:empty").length === // 6
                    $("tr.".concat(hora)).find("td").length
                ) {
                    j--;
                    $("tr.".concat(hora)).remove();
                }
                else
                    break
            }

            var middle = Object.keys(periodos).slice(i, j)

            for (var i in middle) {
                const key = middle[i];
                const keyNext = middle[parseInt(i) + 1];
                // console.log('key :', key, i, $(`tr.${key}`).find("td:hidden").length);
                // console.log('keyNext :', keyNext, i + 1);
                if (!(
                        $("tr.".concat(key)).find("td:empty").length === // 6
                        $("tr.".concat(key)).find("td").length
                    ) &&
                    !$("tr.".concat(key))
                        .find("td")
                        .is("[rowspan]")
                ) {
                    $("tr.".concat(key, " th"))
                        .text(" ")
                        .css("border-top", "none");
                    $("tr.".concat(key, " th")).css("border-bottom", "none");
                    $("tr.".concat(key, " th")).addClass("borderTop");
                }

            }
        }
    }

    this.joinCeldas = function () {
        for (var i = 2; i < 9; i++) {
            var texto_anterior = ''
            for (var j = 2; j < 22; j++) {
                var celda = $('tr:nth-child(' + j + ') :nth-child(' + i + ')')
                var texto_actual = celda.text()
                if (texto_actual !== '') {
                    if (texto_actual === texto_anterior) {
                        celda.hide()
                        celda.set
                        pivote.attr('rowspan', (parseInt(pivote.attr('rowspan')) + 1))
                    } else {
                        pivote = celda.attr('rowspan', 1)
                    }
                }
                texto_anterior = texto_actual
            }
        }
    }
})

var Render = new (function () {
    this.renderCarreras = function () {
        $('#options').append('<ul></ul>')
        for (var i in Config.carreras) {
            var _carrera = Config.carreras[i]
            var currentCarrera = _carrera.path === Config.gestion ? _carrera.name : _carrera.name + ' (' + _carrera.semester + ')'
            $('#options>ul').append(Templates.carrera.format(
                i,
                Config.carreras[i].code,
                currentCarrera))
        }
        $('a.carrera').click(Events.clickCarrera)
        $('#options>ul').append(
            '<li class="add" name="carrera-nueva" style="display: none;"><a class="carrera">AGREGA UNA CARRERA </a></li>')
        $('li.add').click(Events.clickCarreraNueva)
    }
    this.renderNiveles = function (index) {
        var li = $('li[name="carrera-' + index + '"]')
        carrera = Config.carreras[index]
        li.append('<ul></ul>')
        for (var i in carrera.levels) {
            li.children('ul').append(
                Templates.nivel.format(index, i, carrera.levels[i].code))
        }
        li.find('a.nivel').click(Events.clickNivel)
    }
    this.renderMaterias = function (index) {
        var li = $('li[name="nivel-' + index[0] + '-' + index[1] + '"]')
        nivel = Config.carreras[index[0]].levels[index[1]]
        li.append('<ul></ul>')
        for (var i in nivel.subjects) {
            li.children('ul').append(
                Templates.materia.format(index[0], index[1], i, nivel.subjects[i].name))
        }
        li.find('a.materia').click(Events.clickMateria)
    }
    this.renderGrupos = function (index) {
        var li = $('li[name="materia-' + index[0] + '-' + index[1] + '-' + index[2] + '"]')
        materia = Config.carreras[index[0]].levels[index[1]].subjects[index[2]]
        li.append('<ul></ul>')
        for (var i in materia.groups) {
            li.children('ul').append(
                Templates.grupo.format(index[0], index[1], index[2], i, materia.groups[i].code, materia.groups[i].teacher))
        }
        li.find('a.grupo').click(Events.clickGrupo)
        li.find('input[type="checkbox"]').change(Events.checkGrupo)
    }
    this.news = function (news) {
        $('#news').append('<ul </ul>')
        $('#news>ul').append(
            '<li>' +
            '<span class="news" > ' + news.date + ' </span>' +
            '</li>'
        )
        for (var i = 0; i< news.files.length; i++) {
            const element = news.files[i]
            $('#news>ul').append(
                '<li>' +
                '<span class="news carrera"> - ' + element + ' </span>' +
                '</li>'
            )
        }
    }
})()


$(document).ready(function () {
    Mobile.current = Mobile.isMobile()
    if (Mobile.current) {
        $('footer').css('position', 'relative')
        // $('table tr td').css('font-size', '10px')
        $('div.tools').css('display', 'none')
        $('#options').css('position', 'fixed')
        $('#options').css('width', '215px')
        $('#schedule').mousedown(Events.sidebar)

        $.mobile.ajaxEnabled = false;
        $.mobile.loading().hide();

        $('#options').on("swipeleft", Events.sidebar);
        $('#menu').append(Templates.menu).on('click', Events.sidebar)
        $('#news').on("click", Events.sidebar);

        $(window).on("orientationchange", function (event) {
            
            if (event.orientation === 'landscape'){
                console.log(event.orientation)    
                $('table tr td').css('font-size', '10px')
                $("#viewport").attr(
                    "content",
                    "width=".concat(
                        Math.round($("table").height() * 1.6),
                        ", initial-scale=1, user-scalable=yes"
                    )
                );

            } else {
                $('table tr td').css('font-size', '10px')
                $("#viewport").attr(
                    "content",
                    "width=".concat(
                        $("table").height() + parseInt($("table").css("margin-right")),
                        ", initial-scale=1, user-scalable=yes"
                    )
                );
            }


            // $("#orientation").text("This device is in " + event.orientation + " mode!");
        });

    } else {
        $('#options').css('position', 'inherit')
        $('#options').css('width', '290px')
    }
    jQuery.fn.exists = function () { return this.length > 0; }
    $.getJSON(Config.data, function (data) {
        var defaultFaculty = data[data.default];
        var config = defaultFaculty.config
        Config.tittleGestion = config.tittleGestion
        Config.news = config.news
        Config.load = config.load
        Config.path = config.path
        Config.gestion = config.gestion
        Config.news = config.news
        $.getJSON(config.load, function (sumary) {
            Config.carreras = sumary
            Render.renderCarreras()
            $('header h1').append(' :: gestión :: ' + Config.tittleGestion)
            Tablero.repaint()
        })
        $.getJSON(Config.news, /* newTime(), */ function (json) {
            Render.news(json)
        })
    })
    $('a.preview').click(Events.preview)
    $('a.print').click(Events.print)
})
