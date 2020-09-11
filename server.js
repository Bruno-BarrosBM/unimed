const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json({ extended: false }))
app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('unimed/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'unimed', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))