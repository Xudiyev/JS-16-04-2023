function Posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` <tr>
                    <th scope="col">#</th>
                    <th scope="col">userId</th>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                  </tr>`
                    result.forEach((element, index) => {
                        tbl += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element.userId}</td>
                        <td>${element.id}</td>
                        <td>${element.title}</td>
                        <td>${element.body}</td>
                      </tr>`
                    });
                    document.querySelector('table').innerHTML = tbl
                })
        })
}

function Comments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` <tr>
            <th scope="col">#</th>
            <th scope="col">postId</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">body</th>
          </tr>`
                    result.forEach((element, index) => {
                        tbl += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.postId}</td>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.body}</td>
          </tr>`
                    });
                    document.querySelector('table').innerHTML = tbl
                })
        })
}

function Albums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` <tr>
            <th scope="col">#</th>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
          </tr>`
                    result.forEach((element, index) => {
                        tbl += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.userId}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
          </tr>`
                    });
                    document.querySelector('table').innerHTML = tbl
                })
        })
}

function Photos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` <tr>
            <th scope="col">#</th>
            <th scope="col">albumId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">url</th>
            <th scope="col">thumbnailUrl</th>
          </tr>`
                    result.forEach((element, index) => {
                        tbl += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.albumId}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.url}</td>
            <td>${element.thumbnailUrl}</td>
          </tr>`
                    })
                    document.querySelector('table').innerHTML = tbl


                })
        })
}
function Todos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` <tr>
            <th scope="col">#</th>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
          </tr>`
                    result.forEach((element, index) => {
                        tbl += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.userId}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.completed}</td>
          </tr>`
                    })
                    document.querySelector('table').innerHTML = tbl


                })
        })
}

function Users() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">address</th>

          </tr>`
                    result.forEach((element, index) => {
                        tbl += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.address}}</td>

          </tr>`
          
                    })
                    document.querySelector('table').innerHTML = tbl


                })
        })
}



function getSelectValue() {
    let select = document.querySelector('#select').value

    if (select == 1) {
        Posts();
    }
    if (select == 2) {
        Comments();
    }
    if (select == 3) {
        Albums();
    }
    if (select == 4) {
        Photos()
    }
    if (select == 5) {
        Todos()
    }
    if (select == 6) {
        Users()
    }
   


}

