const { Router } = require('express');
const {getCharById} = require('../controllers/getCharById');
const {getCharDetail} = require('../controllers/getCharDetail');
const getAllChars = require('../controllers/getAllChars')

const router = Router();

// ya tienen "/rickandmorty/" antes
router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.get("/allCharacters", async (req, res) => {
    try {
        const allCharacters = await getAllChars();
        return res.status(200).json(allCharacters)
    } catch (error) {
        return res.status(400).send('Problema con el AllCharacters')
    }
})



module.exports = router