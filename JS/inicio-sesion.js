function ingresar(){
    const perfil=document.formulario.id.value;
    const contra=parseInt(document.formulario.contraseña.value);

    if(perfil=="medico" & contra==1234){
        window.location.href="bienvenido-medico.html"
    }
        else if(perfil=="paciente" & contra==1234){
            window.location.href="bienvenido-paciente.html"
        }
            else if(perfil=="familiar" & contra==1234){
                window.location.href="bienvenido-familiar.html"
            }
                else if(perfil=="admin" & contra==1234){
                    window.location.href="bienvenido-admin.html"
                }


}

function borrar(){

    document.formulario.id.value="";
    document.formulario.contraseña.value="";

}