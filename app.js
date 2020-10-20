let express = require ('express')
let app =  express()

app.use(express.urlencoded({extended:false}))
app.get('/', (req,res) => {
    res.send(`
        <form action = "/answer" method = "POST">
            <p> What is the color of the sky when it is sunny</p>
            <input name = "color" autocomplete = "off">
            <button> submit </button>
        </form>
    `)

app.post('/answer', (req,res) => {
  if (req.body.color.toUpperCase() == 'BLUE'){
    res.send(`
        <p> correct </P>
        <a href = "/" >Back to home Page </a>
    `)
  } else {
      res.send(`
        <p> wrong </P>
        <a href = "/" >Back to home Page </a>
      `)

  }
})

app.get('/answer', (req,res) => {
    res.send(' answer')
})
})




app.listen(3000)