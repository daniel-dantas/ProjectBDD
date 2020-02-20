import app from './app'

const PORT: number = 8000

app.listen(PORT, () => {
    console.log(`Server is open in port ${PORT}`)
})