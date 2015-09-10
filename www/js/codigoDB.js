        <script type="text/javascript">
            app.initialize();
            document.addEventListener("deviceready", onDeviceReady, false);
            
            
            // Cordova is ready
            //
            function onDeviceReady() {
                
                //db.transaction(PopulateDB, successCB, errorCB);
                
            }
            function crearDb(){
                var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
                db.transaction(PopulateDB, errorCB);
            }

            // Populate the database 
            function PopulateDB(tx) {
                 
                 tx.executeSql("CREATE TABLE IF NOT EXISTS Materia(id PRIMARY KEY ASC,nombre TEXT);");
                 tx.executeSql("CREATE TABLE IF NOT EXISTS Horario(id PRIMARY KEY ASC,dia TEXT,modulo INTEGER,idMat INTEGER);");
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
            
            function formClick(){
                var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
                db.transaction(guardarTexto,errorCB);
                //document.getElementById('mostrado').value = 'resultado';
                //$('input[id=mostrado]').val(resultado);
            }
            function guardarTexto(tx,result){
                var resultado = document.getElementById('texto').value;
                tx.executeSql("Insert into Materia(nombre) values('"+resultado+"')");
                }
            
            function mostrarOnClick(){
                var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
                db.transaction(mostrarTexto,errorCB);
            }
            
            function mostrarTexto(tx){
                tx.executeSql("Select * from Materia",[],ejecutar,errorCB);  
            }
            
            function ejecutar(tx,results){
                //for(var i=0; i<result.rows.length; i++) {
                //    $('input[id=mostrado]').append("<li> <a id='"+results.rows.item(i).id + "'>" + results.rows.item(i).nombre + "</a></li>");
                //}
                var answer = "Rows: " + results.rows.length;
                $('input[id=mostrado]').val(answer);
            }
        </script>