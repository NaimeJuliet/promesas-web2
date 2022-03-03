function recibirCredencial(nombre,correo,password,plan,callback){

    setTimeout(function(){
        let usuario={
            nombre:nombre,
            correo:correo,
            password:password,
            plan:plan,
        }

        callback(usuario)

    },10000)
}

recibirCredencial("Naime","naime123@gmail.com",123456,"Mensual",function(usuario){
    console.log(`Señor usuario ${usuario.nombre} bienvenido a HBO MAX. Y disfrutaras de tu plan ${usuario.plan}`)

})
