module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(especialidade => especialidade.trim());
}