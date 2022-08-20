const url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () => {
    try {
        let respuesta = await fetch(url)
        let posts = await respuesta.json()
        let datos = ``
        posts.forEach(traer=>{
            datos+=`
            <li>
            <p>
            <strong>${traer.title}</strong>
            <br>
            ${traer.body}</p>
            </li>`
        })
        let info=
        `<ul>
            ${datos}
            </ul>`
        document.getElementById('post').innerHTML=info
    }
    
    catch (e) {
        alert('No estan disponibles los post!!')
    }
}

