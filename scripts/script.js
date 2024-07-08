function mycity(){
    let shahr = document.getElementById('city').value

let height =[1200, 1065, 1570, 1519, 1345, 12, 1760, 58, 1363, 0, 1538, 1230  ]
let temerature =[17, 14, 16, 18, 12, 25, 18,17, 12,14, 14, 18]
let precipitation =[231, 250, 130, 334, 283, 209, 142,790, 338,1337, 449, 59]
let population =[8693000, 3001000, 1961000, 1565000, 1558000, 1205000, 537000, 347000, 736000, 679000, 412000, 529000]

let ertefa = height[parseInt(shahr)]
let dama = temerature[parseInt(shahr)]
let baresh = precipitation[parseInt(shahr)]
let jameiat = population[parseInt(shahr)]
       
    document.getElementById('p1').innerHTML = `${ertefa}`
    document.getElementById('p2').innerHTML = `${dama}`
    document.getElementById('p3').innerHTML = `${baresh}`
    document.getElementById('p4').innerHTML = `${jameiat}`
}

function comment(){
    let v1 = document.getElementById('t1').value
    let v2 = document.createElement('p')
    let v3 = document.getElementById('d1').appendChild(v2)
    v3.innerHTML = `${v1}`
}

document.getElementById('i2').addEventListener('click', comment)
