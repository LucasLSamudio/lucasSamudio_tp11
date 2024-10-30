let perfil = "ADMINISTRADOR";

if (perfil.toLowerCase() == "administrador"){
    console.log("Usted tiene todos los privilegios de uso del sistema.")
}
else{
    if(perfil.toLowerCase() == "asistente"){
        console.log("Usted sólo tiene permiso de registrar, modificar o consultar datos.")
    }
    else{
        if(perfil.toLowerCase() == "invitado"){
            console.log("Usted sólo tiene permiso de consultar datos.")
        }
        else{
            console.log("Debe especificar un perfil válido.")
        }
    }
}