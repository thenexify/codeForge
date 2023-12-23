const express = require('express')
const router = express.Router()
const { popularShortcuts, allShortcuts } = require('../data/code')

router.get('/', (req, res)=>{
    res.render('home', {
        shortcut: popularShortcuts
    });
});

router.get('/s/:language', (req, res)=>{
    const selectedLanguage = allShortcuts.filter(scut=>{
        if(req.params.language == scut.language){
            return scut
        }
    })
    res.render('shortcut', {
        shortcut: selectedLanguage,
        language: req.params.language
    })
})

module.exports = router