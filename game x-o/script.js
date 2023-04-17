let x = 'X'
let o = 'O'
let count=0;
table();

function table() {
    let tbl = ''
    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < 3; j++) {
           tbl+='<td></td>'
        }
        tbl += `</tr>`;

    }
    document.querySelector('table').innerHTML=tbl;
}

function Click(){
    
}