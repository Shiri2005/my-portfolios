function genQ(){

    fetch('https://dummyjson.com/quotes').then(response => response.json()).then(data => {

        let random = Math.floor(Math.random() * 30);
    
        let uniqueQ = data.quotes[ random ].quote;
    
        let para = document.getElementsByTagName('p');
    
        para[0].innerText = uniqueQ;
        
    })
}