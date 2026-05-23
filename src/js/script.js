document.addEventListener("DOMContentLoaded", function() {
    

    const motosDestaque = [
        { 
            nome: "Volt Cyber Beast", 
            preco: 14900, 
            desc: "Presença imponente com visual All Black fosco e motor de alta potência.", 
            img: "./src/assests/img/modelo1.jpg"
        },
        { 
            nome: "Volt Red Pro", 
            preco: 22500, 
            desc: "Design aerodinâmico premium em vermelho intenso com performance de pista.", 
            img: "./src/assests/img/modelo2.jpg" 
        },
        { 
            nome: "Volt Neon Pulse", 
            preco: 17200, 
            desc: "Estilo futurista com pintura azul metálica eletrizante e muita tecnologia.", 
            img: "./src/assests/img/modelo3.jpg" 
        },
        { 
            nome: "Volt Delivery Cute", 
            preco: 12800, 
            desc: "Prática, amarela e compacta. Perfeita para entregas com aquele estilo de dorama.", 
            img: "./src/assests/img/modelo4.jpg" 
        },
        { 
            nome: "Volt Heritage Classic", 
            preco: 28900, 
            desc: "Visual retrô refinado com acabamento em couro marrom e linhas clássicas.", 
            img: "./src/assests/img/modelo5.jpg" 
        }
    ];

    const container = document.getElementById("container-destaques");

    if (container) {
        container.innerHTML = ""; 
        
        motosDestaque.forEach(moto => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${moto.img}" alt="${moto.nome}" style="width: 100%; height: 180px; object-fit: cover; object-position: center; border-radius: 5px; margin-bottom: 15px;">
                <h4> ${moto.nome}</h4>
                <p>${moto.desc}</p>
                <p style="font-weight:bold; color:#00aa5b; margin-top:10px; font-size:1.2rem;">
                    R$ ${moto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
            `;

            container.appendChild(card);
        });
    }
});