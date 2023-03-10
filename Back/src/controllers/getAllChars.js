const {Character} = require('../Models/Character')

const getAllChars = async () => {
    try {
        const allCharacters = await Character.findAll();
        //todo: problema aca
        return allCharacters;
    } catch (error) {
        return ({error: 'mal aca'})
    }
}


module.exports = getAllChars