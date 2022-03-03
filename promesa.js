function recibirCredencial(nombre,correo,password,plan){

    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
            let usuario={
                nombre:nombre,
                correo:correo,
                password:password,
                plan:plan,
            }
            console.log("oe")
            reject("BIENVENIDO A HBO "+ usuario.nombre)
        },3000)
    })
    return promesa
}

recibirCredencial("Naime","naime123@gmail.com",123456,"Mensual")
.then(function(respuesta){
    console.log(respuesta)
})

