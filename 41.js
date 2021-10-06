let v1 = 50
let v2 = 500
let v3 = 5

if (v1 <= v2 && v1 <= v3){
    console.log(v1)
    if (v2 <= v3){
        console.log(v2)
        console.log(v3)
    } else {
        console.log(v3)
        console.log(v2)
    }
} else if (v2 <= v1 && v2 <= v3){
    console.log(v2)
    if (v1 <= v3){
        console.log(v1)
        console.log(v3)
    }else {
        console.log(v3)
        console.log(v1)
    }
} 
else if (v3 <= v1 && v3 <= v2){
    console.log(v3)
    if (v1 <= v2){
        console.log(v1)
        console.log(v2)
    } else {
        console.log(v2)
        console.log(v1)
    }

}