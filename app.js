const express = require('express')
const app = express()
//const PORT = 3000

app.get('/', (req, res) => {
    res.status(200).json({
        meta: {
            code: 200,
            message: "server OK",
        }
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("RestAPI is running at " + process.env.PORT || 3000);
});