<script type="text/javascript">
    //app.initialize();
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() { 

    }
    function crearDb(){
        var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
        db.transaction(PopulateDB, errorCB);
        alert("asjkdnsmakjda");
    }

    // Populate the database 
    function PopulateDB(tx) {
         tx.executeSql("CREATE TABLE IF NOT EXISTS cursos(id PRIMARY KEY ASC,curso TEXT,cantAlu INTEGER)");
         //tx.executeSql("Select * from Materia",[],ejecutar,errorCB); 
        alert("hola");
    }

    // Transaction error callback
    //
    function errorCB(err) {
        alert("Error processing SQL: "+err.message);
    }

    // Transaction success callback
    //
    function successCB() {
        alert("success!");
    }

    function guardarNum(){
        var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
        db.transaction(guardarCurso,errorCB);
        //document.getElementById('mostrado').value = 'resultado';
        //$('input[id=mostrado]').val(resultado);
    }
    function guardarCurso(tx){
        var curso = document.getElementById('curso').value;
        tx.executeSql("Insert into cursos(curso) values('"+curso+"')");
        alert("se ha guardado el curso");      
    }

    function cargarCursoT(){
        var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
        db.transaction(cargarCursoC,errorCB);
    }
    function cargarCursoC(tx){
        tx.executeSql("SELECT * FROM cursos",[],function(tx,results){
                    var answer = result.rows.length;
                    $('input[id=mostrado]').val(answer);},errorCB);
        $('input[id=mostrado]').val(answer);
    }
    
    /*/function cargarCurso(tx,results){
        //for(var i=0; i<result.rows.length; i++) {
        //    $('input[id=mostrado]').append("<li> <a id='"+results.rows.item(i).id + "'>" + results.rows.item(i).nombre + "</a></li>");
        //}
        var answer = results.rows.item(0);
        $('input[id=mostrado]').val(answer.curso);
        alert("3");

    }/*/
</script>