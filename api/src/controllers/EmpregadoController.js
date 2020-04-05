const Empregado = require('./../models/Empregado');
const parseStringAsArray = require('./../utils/parseStringAsArray');

module.exports = {

    async index(request, response){
        const empregados = await Empregado.find();

        return response.json(empregados);
    },
    async store(request, response){
        const { name, whatsapp, email, description, avatar_url, especialidades, latitude, longitude } = request.body;

        let empregado = await Empregado.findOne({ email });
        
        if (!empregado){
            const arrayEspecialidades = parseStringAsArray(especialidades);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            const empregado = await Empregado.create({
                name,
                whatsapp,
                email,
                description,
                avatar_url,
                especialidades: arrayEspecialidades,
                location
            });

        }
    
        response.json(empregado);
    }
}