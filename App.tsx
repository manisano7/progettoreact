
import React, { useState } from 'react';

const ScusaApp = () => {
  const [mostraMessaggio, setMostraMessaggio] = useState(false);

  const mostraMessaggioDiScuse = () => {
    setMostraMessaggio(true);
  };

  const messaggioDiScuse = `

Cara Alessia, 

Spero che queste parole possano in qualche modo alleviare il dolore che ti ho causato. È con un cuore pesante e una profonda consapevolezza dei miei errori che ti rivolgo questa lettera. Non c'è scusa sufficiente per giustificare il mio comportamento, ma sento l'obbligo di dirti quanto mi dispiaccia sinceramente.

Ho tradito la tua fiducia, il tuo amore e la tua dedizione, e per questo mi vergogno profondamente. Non c'è alcuna giustificazione valida per le mie azioni, e capisco che il dolore che ho inflitto è immenso. Voglio che tu sappia quanto mi penta di aver ferito te, la persona straordinaria che sei.

Ho preso la decisione di unfolloware e bloccare Katy dai social, riconoscendo il danno che il nostro coinvolgimento ha causato alla nostra relazione. Questo passo è una piccola ma significativa dimostrazione del mio impegno per te e per la nostra storia. So che la strada della riconciliazione sarà difficile, ma sono disposto a fare tutto il possibile per guadagnare nuovamente la tua fiducia.

Alessia, sei la ragazza più intelligente e simpatica che mi potesse mai capitare dinanzi. La tua bellezza interiore supera di gran lunga qualsiasi errore che io possa aver commesso. Ammiro la tua forza e il tuo spirito, e mi rendo conto che ho rischiato di perdere la cosa più preziosa che abbia mai avuto.

Prometto eterna fedeltà e impegno a te. Sarò disposto a fare qualsiasi cosa sia necessaria per dimostrarti che posso cambiare, che posso imparare dalla mia sciagurata scelta e diventare una persona migliore per te e per noi.

So che le parole da sole non sono sufficienti per rimediare ai danni che ho causato, ma spero che tu possa trovare nel tuo cuore la forza di perdonarmi. La tua felicità è la mia priorità assoluta, e farò tutto il possibile per meritarla di nuovo.

Con umiltà e rimorso,
Andrea Skorchana
  `;

  return (
      <div style={{backgroundColor: "pink", padding: "2em"}}>
        <h1 style={{textAlign: "center"}}>Alessia Devi perdonarmi...</h1>
        <button style={{position: "relative", left: "40%", backgroundColor: "#3498db",borderRadius: "5px", cursor: "pointer", width: "10em", height: "6em" }} onClick={mostraMessaggioDiScuse}>Sorpresa per te :)</button>

        {mostraMessaggio && (
            <div>
                    <div style={{width: "auto", flexDirection: "row"}}>
                        <img style={{width: "30em", padding: "1em", position: "relative", left: "10%"}} src={"https://www.pelusciamo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/o/tovaglioli-carta-hello-kitty.jpg"}/>
                        <p style={{padding: "3em", }}>{messaggioDiScuse}</p>
                        <img style={{width: "30em", padding: "1em",position: "relative", left: "10%"}} src={"https://www.pelusciamo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/o/tovaglioli-carta-hello-kitty.jpg"}/>
                    </div>


                  <div style={{padding: "2em", display: "flex", flexDirection: "row"}}>
                      <img style={{width: "20em"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLw_ITwfc8jbRpRgUhJ0MimMy0zwIKr2gow&usqp=CAU"}/>
                      <img style={{width: "20em"}} src={"https://adesivistore.com/4523-large_default/dito-medio-vaffanculo-adesivo-prespaziato.jpg"}/>
                  </div>

                  <div style={{display: "flex", flexDirection: "column"}}>
                      <img style={{borderRadius: "500em", border: "1 1 solid black", width: "auto"}} src={"https://alessandronacinelli.it/wp-content/uploads/2020/02/Sorry.gif"}/>
                      <img src={"https://i.pinimg.com/originals/6f/03/fa/6f03fad18581098b16fd9e41f435bb16.gif"}/>

                  </div>
            </div>
          )}
      </div>
  );
};

export default ScusaApp;
