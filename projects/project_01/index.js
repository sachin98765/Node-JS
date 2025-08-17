const express=require('express')
const fs=require('fs')
const users= require('./MOCK_DATA.json')
const app=express()
const PORT=3000;

//Middleware
app.use(express.urlencoded({extended:false}))

//GET /users- HTML Document Render
app.get('/users',(req,res)=>{
    res.send(`
        <h1>Users</h1>
        <ul>
            ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
        </ul>
    `)
})

//REST API
app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app
.route("/api/users/:id")
.get((req,res)=>{
    const id= Number(req.params.id)
    const user= users.find((user)=>user.id===id)
    return res.json(user)
})
.patch((req,res)=>{
    //Edit user with id
    res.json({status:"Pending"})
})
.delete((req,res)=>{
    //Delete user with id
    res.json({status:"Pending"})
})

app.post("/api/users",(req,res)=>{
    //Create new user
    const body= req.body
    users.push({...body, id:users.length+1})
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users),(err, data)=>{
        return res.json({status:"success", id: users.length+1})
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
