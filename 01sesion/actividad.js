




function orderInspector(spectedorders, actualorders) {

    if (actualorders > spectedorders) {
        console.log("Las ordenes han superado la expectativa")
        
    } else {
        console.log("Las ordenes no superaron las expectativas")
    }
}
orderInspector(50, 45)



function demandInspector (day, spectedDemand, actualDemand) {
    
    if( day % 2 == 0 && actualDemand > spectedDemand ) {
        console.log("Hoy es un dia par y la demanda de ordenes fue mayor a la esperada")
    } 
    
    if( day % 2 == 0 && actualDemand < spectedDemand ) {
        console.log("Hoy es un dia par y la demanda de ordenes fue menor a la esperada")
    } 
    if( day % 2 != 0 && actualDemand > spectedDemand ) {
        console.log("Hoy es un dia impar y la demanda de ordenes fue mayor a la esperada")
    } 
    

    if( day % 2 != 0 && actualDemand < spectedDemand ) {
        console.log("Hoy es un dia impar y la demanda de ordenes fue menor a la esperada")
    } 

}
demandInspector(13, 50, 45)