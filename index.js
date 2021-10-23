const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// const handler = (req, res) =>{
//     res.send('hello from node');
// }
// app.get('/', handler);

app.get('/',(req, res) =>{
    res.send('WOW. hellow from my first ever node express')
})

const users =[
    { id: 0, name: 'Shabanah', email: 'shananah@gmail.com', phone: '01788888888'},
    { id: 1, name: 'Sakib Khan', email: 'sakibkhan@gmail.com', phone: '01732888888' },
    { id: 2, name: 'Titu Khan', email: 'titu@gmail.com', phone: '01788787688' },
    { id: 3, name: 'Totol Khan', email: 'totolkhan@gmail.com', phone: '01732354888' },
    { id: 4, name: 'MD Farhan', email: 'farhan@gmail.com', phone: '017893888888' },
    { id: 5, name: 'Hannan Sorkar', email: 'hannansorkar23@gmail.com', phone: '017883435388' },
    { id: 6, name: 'Simla Mara', email: 'simlamarakhaise@gmail.com', phone: '01734235888' }
]

app.get('/users', (req, res) =>{
    //user query parameter
    // const search = req.query.search;
    const result = req.query.result;
    // if(search){
    //     const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    //     res.send(searchResult);
    // }
    if(result){
        const resultSearch = users.filter(user => user.name.toLocaleLowerCase().includes(result));
        res.send(resultSearch);
    }
    else{
    res.send(users);
    }
})

// app.mathod
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//dynamic api
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'oranges', 'bannana', 'apple  '])
})

app.get('/fruits/mango/fazli', (req, res)=>{
    res.send('Yumy Yummy fazli tok........!');
})

app.listen(port, ()=>{
    console.log('listening to port', port);
});