__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'SKIMURA BOT',
            namaowner: 'AuliaChan',
            instagram: 'rahman_nayyers',
            youtube : 'bit.ly/AuliaRahmanOfficialYT'
        }
    }
    res.json(config)
})

module.exports = router
