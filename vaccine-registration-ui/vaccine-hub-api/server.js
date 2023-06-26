const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
 
const {BadRequestError} = require(".utils/errors")
const { NotFoundError } = require("./utils/errors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.use((req, res, next) => {
    return next(new NotFoundError)
})

app.use[(err, req, res, next) => {
    const status = errerr.status || 500 
    const message = err.message

    return res.status(status).json({
    errors: {message, status},
    })
}]

const PORT = process.env.port || 3001

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})