const Empregado = require('./../models/Empregado');
const parseStrigAsArray = require('./../utils/parseStringAsArray');
module.exports = {
    async index(request, response){
        const { latitude, longitude, especialidades } = request.query;

        const arrayEspecialidades = parseStrigAsArray(especialidades);

        const empregados = await Empregado.find({
            especialidades: {
                $in: arrayEspecialidades,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinate: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        })

        return response.json(empregados);
    },
}