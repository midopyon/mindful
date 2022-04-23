import images from "./images"

const data = {
    user: {
        name: 'Perla',
        img: images.avt
    },
    summary: [
        {
            title: '3 dimensiones',
            percent: 33,
            dim1: 25,
            dim2: 66,
            dim3: 80,
        }
    ],
    resources: [
        {
            title: 'Estrategias para afrontar el Síndrome de Burnout',
            content: 'Toma las medidas cuando comiences a sentir los primeros síntomas y signos de estrés laboral.',
            url: 'https://www.udd.cl/noticias/2016/06/28/consejo-experto-estrategias-afrontar-sindrome-burnout/',
            img: 66,
        },
        {
            title: 'Tips para aplicar Mindfulness en la oficina',
            content: 'Se trata de hacer una parada en “el aquí y ahora” y observar a nosotros mismo y a lo que nos rodea.',
            url: 'https://blog.cador.es/mindfulness-oficina#:~:text=Esta%20t%C3%A9cnica%20es%20el%20arte,que%20hay%20en%20nuestro%20cuerpo.',
            img: 66,
        },
        {
            title: '5 consejos para lograr el balance entre vida y trabajo',
            content: 'Aprende como darle prioridad a tu bienestar y mejorar el equilibrio entre responsabilidad y paz.',
            url: 'https://www.michaelpage.pe/advice/desarrollo-profesional/5-consejos-para-lograr-el-balance-entre-vida-y-trabajo',
            img: 66,
        },
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['01/01', '08/01', '15/01', '22/01', '29/01', '05/02', '12/02', 'Hoy'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['01/01', '08/01', '15/01', '22/01', '29/01', '05/02', '12/02', 'Hoy'],
        data: [150, 130, 120, 100, 80, 100, 110, 140]
    }
}

export default data