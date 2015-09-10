function calcula(){
                var alumnos = document.calc.alumnos.value
                var dhabiles = document.calc.dhabiles.value 
                var inasis = document.calc.inasis.value


                var tasis = eval((alumnos*dhabiles)-inasis)
                document.calc.resultado1.value = tasis

                var tinasis = inasis
                document.calc.resultado2.value = inasis

                var asism = eval(tasis/dhabiles)
                document.calc.resultado3.value = asism.toFixed(2)

                var pasis = eval((tasis*100)/(alumnos*dhabiles))
                document.calc.resultado4.value = pasis.toFixed(2)
                 
            }
