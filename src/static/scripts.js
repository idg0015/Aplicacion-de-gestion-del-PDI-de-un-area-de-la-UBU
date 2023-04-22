$(document).ready(function () {
    if (document.getElementById('tablaCentros') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "Abreviatura",
                {
                    id: 'email',
                    name: 'Email administrativo'
                },
                {
                    name: 'Acciones',
                    //width: '8%',
                    sort:false,///update/${row.cells[0].data}
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            className: {
                td: "text-center",
                th: "text-center"
            },
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            data:centros
        }).render(document.getElementById("tablaCentros"));
    }

    if (document.getElementById('tablaTitulaciones') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "Abreviatura",
                {
                    name: 'URL',
                    formatter: (_, row) => gridjs.html(`<a href='${row.cells[3].data}' class="enlace">Web</a>`)
                },
                "Centro",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            className: {
                td: "text-center",
                th: "text-center"
            },
            width: "95%",
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            resizable: true,
            pagination: {
                limit: 7
            },
            data: titulaciones
        }).render(document.getElementById("tablaTitulaciones"));
    }

    if (document.getElementById('tablaAsignaturas') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "Tipo",
                {
                    id: 'titulacion',
                    name: 'Titulación'
                },
                {
                    id: 'creditos_teoria',
                    name: 'Créditos teoría'
                },
                {
                    id: 'creditos_practica',
                    name: 'Créditos práctica'
                },"Curso", "Semestre", "Abreviaturas",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            className: {
                td: "text-center",
                th: "text-center"
            },
            width: "95%",
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            resizable: true,
            pagination: {
                limit: 7
            },
            data: asignaturas
        }).render(document.getElementById("tablaAsignaturas"));
    }

    if (document.getElementById('tablaDocentes') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "Apellidos", "Email", "Reducciones",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            className: {
                td: "text-center",
                th: "text-center"
            },
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            data: docentes
            // data: [
            //     ["1", "Nombre 1", "Apellido", "ubu@ubu.es", 3, null],
            //     ["2", "Nombre 2", "Apellido", "ubu@ubu.es", 3, null],
            //     ["3", "Nombre 3", "Apellido", "ubu@ubu.es", 3, null],
            //     ["4", "Nombre 4", "Apellido", "ubu@ubu.es", 3, null],
            //     ["5", "Nombre 5", "Apellido", "ubu@ubu.es", 3, null]
            // ]
        }).render(document.getElementById("tablaDocentes"));
    }

    if (document.getElementById('tablaPlazas') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "RPT",
                {
                    id: 'fecha_incorporacion',
                    name: 'Fecha incorporación'
                },
                {
                    id: 'fecha_cese',
                    name: 'Fecha cese'
                },
                {
                    id: 'num_concursos_contratacion',
                    name: 'Nº concursos contratación'
                },
                "Docente",
                {
                    id: 'tipo_contrato',
                    name: 'Tipo Contrato'
                },
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            className: {
                td: "text-center",
                th: "text-center"
            },
            // data: [
            //     ["1", "Nombre 1", "RPT", "01/01/2023", "01/01/2024", "Docente 1", "Tipo 1", 1, null],
            //     ["2", "Nombre 2", "RPT", "01/01/2023", "01/01/2024", "Docente 2", "Tipo 2", 1, null],
            //     ["3", "Nombre 3", "RPT", "01/01/2023", "01/01/2024", "Docente 3", "Tipo 1", 1, null],
            //     ["4", "Nombre 4", "RPT", "01/01/2023", "01/01/2024", "Ninguno", "Tipo 7", 1, null],
            //     ["5", "Nombre 5", "RPT", "01/01/2023", "01/01/2024", "Docente 4", "Tipo 5", 1, null]
            // ]
            data:plazas
        }).render(document.getElementById("tablaPlazas"));
    }

    if (document.getElementById('tablaContratos') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "Abreviatura", "Capacidad anual",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            className: {
                td: "text-center",
                th: "text-center"
            },
            data: contratos
        }).render(document.getElementById("tablaContratos"));
    }

    if (document.getElementById('tablaAreas') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "Abreviatura", "Departamento",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            className: {
                td: "text-center",
                th: "text-center"
            },
            data: areas
            // data: [
            //     ["1", "Nombre 1", "AA", "Departamento 1", null],
            //     ["2", "Nombre 2", "BB", "Departamento 1", null],
            //     ["3", "Nombre 3", "CC", "Departamento 1", null],
            //     ["4", "Nombre 4", "DD", "Departamento 1", null],
            //     ["5", "Nombre 5", "EE", "Departamento 1", null]
            // ]
        }).render(document.getElementById("tablaAreas"));
    }

    if (document.getElementById('tablaDepartamentos') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Nombre", "Abreviatura",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<a class="icono" href="#" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-pencil-square"></i></a> <a href="#" class="icono" onclick="alert( '${row.cells[0].data}');"><i class="bi bi-trash3-fill"></i></a>`)
                },
            ],
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            className: {
                td: "text-center",
                th: "text-center"
            },
            data: departamentos
            // data: [
            //     ["1", "Nombre 1", "AA", null],
            //     ["2", "Nombre 2", "BB", null],
            //     ["3", "Nombre 3", "CC", null],
            //     ["4", "Nombre 4", "DD", null],
            //     ["5", "Nombre 5", "EE", null]
            // ]
        }).render(document.getElementById("tablaDepartamentos"));
    }

    if (document.getElementById('tablaCursos') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Año inicio", "Año fin",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<button type="button" class="btn btn-primary">Modificar Año</button> <button type="button" class="btn btn-primary" onclick="alert( '${row.cells[0].data}');">Modificar</button> <button type="button" class="btn btn-primary">Duplicar</button> <button type="button" class="btn btn-primary" onclick="alert( '${row.cells[0].data}');">Eliminar</button>`)
                },
            ],
            className: {
                td: "text-center",
                th: "text-center"
            },
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            data: cursos
            // data: [
            //     ["1", "2020", "2021", null],
            //     ["2", "2021", "2022", null],
            //     ["3", "2022", "2023", null],
            //     ["4", "2023", "2024", null]
            // ]
        }).render(document.getElementById("tablaCursos"));
    }

    if (document.getElementById('tablaGrupos') != null) {
        new gridjs.Grid({
            columns: [
                "Centro", "Titulación", "Asignatura", "Semestre", "Nº grupos teoría", "Nº grupos práctica", "Nº grupos online teoría", "Nº grupos online práctica", "Nº grupos inglés teoría", "Nº grupos inglés práctica",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<button type="button" class="btn btn-primary" onclick="alert( '${row.cells[0].data}');">Gestionar grupos</button>`)
                },
            ],
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            data: [
                ["Centro 1", "Grado 1", "Asignatura 1", 1, 1, 1, 1, 1, 1, 1, null],
                ["Centro 2", "Grado 2", "Asignatura 1", 1, 1, 1, 1, 1, 1, 1, null],
                ["Centro 3", "Grado 3", "Asignatura 1", 2, 1, 1, 1, 1, 1, 1, null],
                ["Centro 4", "Grado 4", "Asignatura 1", 1, 1, 1, 1, 1, 1, 1, null]
            ]
        }).render(document.getElementById("tablaGrupos"));
    }

    if (document.getElementById('tablaCursos') != null) {
        new gridjs.Grid({
            columns: [
                "Id", "Año inicio", "Año fin",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<button type="button" class="btn btn-primary">Modificar Año</button> <button type="button" class="btn btn-primary" onclick="alert( '${row.cells[0].data}');">Modificar</button> <button type="button" class="btn btn-primary">Duplicar</button> <button type="button" class="btn btn-primary" onclick="alert( '${row.cells[0].data}');">Eliminar</button>`)
                },
            ],
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            width: "70%",
            data: [
                ["1", "2020", "2021", null],
                ["2", "2021", "2022", null],
                ["3", "2022", "2023", null],
                ["4", "2023", "2024", null]
            ]
        }).render(document.getElementById("tablaCursos"));
    }

    if (document.getElementById('tablaHoras') != null) {
        new gridjs.Grid({
            columns: [
                "Centro", "Titulación", "Asignatura", "Semestre", "Id Grupo", "Plaza/Docente", "Horas", "Horas totales docente", "Plaza/Docente","Horas", "Horas totales docente", "Plaza/Docente","Horas", "Horas totales docente",
                {
                    name: 'Acciones',
                    formatter: (_, row) => gridjs.html(`<button type="button" class="btn btn-primary" onclick="alert( '${row.cells[0].data}');">Editar</button>`)
                },
            ],
            language: gridjs.l10n.esES,
            sort: true,
            search: true,
            data: [
                ["Centro 1", "Grado 1", "Asignatura 1", 1, 1, "Plaza 1", 1, 1, "Plaza 2", 1, 1, "Plaza 3", 1, 1, null],
                ["Centro 2", "Grado 2", "Asignatura 1", 1, 1, "Docente 1", 1, 1, "Plaza 2", 1, 1, "Plaza 3", 1, 1, null],
                ["Centro 3", "Grado 3", "Asignatura 1", 2, 1, "Plaza 5", 1, 1, "Plaza 3", 1, 1, "Plaza 4", 1, 1, null],
                ["Centro 4", "Grado 4", "Asignatura 1", 1, 1, "Plaza 3", 1, 1, "Plaza 2", 1, 1, "Plaza 3", 1, 1, null]
            ]
        }).render(document.getElementById("tablaHoras"));
    }


});