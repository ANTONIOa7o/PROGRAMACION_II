/**
 * 
 *  TRY CATCH
 * 
 * La Sentencia Try, consistirá en un bloque que contiene uno o mas sentecias, definidas y de ejeccion
 * Las llaves, que recoge tal sentencia, entendido como un  bloque., necesitaremos al menos una de estas
 * dos sentecias, tales como catch o finally.
 * Sintaxis posibles serán
 * try....catch
 * try....finally
 * try...catch...finally
 * 
 * =>El bloque catch, serán sentencias que especifican que hacer si una excepción es lanzada en el bloque
 * try; Cualquier sentencia dentro del bloque try, lanza una expcepcion,el control cambiaria inmediatamente
 * al bloque catch.
 * 
 * =>El bloque finally, se ejecuta despues del b olque try y catch, cuando ambos hayan finalizado. Este
 * siempre se va a ejecutar.
 * 
 */

/* try{

alert('Inicio de intentos de prueba');//(1)
alert('Fin de la ejecuciones try');//(2)

}catch{

alert("---------------------------------------");//(3)?

} */

try{
    alert('Inicios de ejecución try');
    todo_Perfecto();//ocurre el error , ya que no tenemos definido la funcion
    alert('Fin del try');

}catch(error){

    alert('Ha ocurrido un error')

}

try{

    algo();//Funcion que no existen, no esta definida por ningun lador, evidente referencia error

}catch (error){
    console.log(error);

}finally{
console.log('No importa, ejecuta de todos modos');

}