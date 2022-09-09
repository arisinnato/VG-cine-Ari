const init = async () =>{
    const peliInformation = document.getElementById("pwliInformation")

    const token = localStorage.getItem("token")
    const response = await fetch("https://vg-cine-server.herokuapp.com/ticket", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    console.log(data)

    for (let index = 0; index < array.length; index++) {
      peliInformation.innerHTML += `

                <div class="media" id="viewProfile">
                    <label>Cantidad de entradas:</label>
                        <p>${data.data[index].ticketCount}</p>
                </div>
                <div class="media" id="viewProfile">
                    <label>Metodo de pago:</label>
                        <p>${data.data[index].paymentMethod}</p>
                </div>
                <div class="media" id="viewProfile">
                    <label>Cédula</label>
                        <p>${data.data[index].id}</p>
                </div>
                <div class="media" id="viewProfile">
                    <label>Numero de referencia:</label>
                        <p>${data.data[index].referenceNumber}</p>
                </div> 
                <div class="col-md-6">
                    <div class="media" id="viewProfile">
                        <label>Titulo</label>
                        <p>${data.data[index].movieTitle}</p>
                    </div>
                </div>
      
      `
        
    }
}