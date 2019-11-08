
    let motAtrouvrer = "bonjour"
    motAtrouvrer = motAtrouvrer.toUpperCase()
    let tab1 = motAtrouvrer.split('');
    
    

    let tab2 = ['','','','','','',''];
    let i = 0;
    
    
    
    
  
    
    
    let guessLetter = () => {
        let lettre = prompt("esseyez une lettre");
        let ind=tab1.indexOf(lettre);
        
        console.log(ind);
        if (tab2.includes(lettre)){
            alert ("vous avez déjà entré cette lettre");
            i=i+1


        }
        else  if (tab1.includes(lettre)){
       
        
             tab2.push(lettre,(4));
             console.log(tab2)
             
             
             i=i+1
        }
        else {
            i=i+1;
            alert =("mauvaise lettre");
            
        }
        
    }
    guessLetter();
   
  



    


        
