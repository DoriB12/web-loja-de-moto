document.addEventListener("DOMContentLoaded", function() {
    
    const motosDestaque = [
        { 
            id: 1, 
            nome: "Volt Cyber Beast", 
            preco: 14900, 
            desc: "Presença imponente com visual All Black fosco e motor de alta potência.", 
            img: "src/assets/modelo-1.jpg"
        },
        { 
            id: 2, 
            nome: "Volt Red Pro", 
            preco: 22500, 
            desc: "Design aerodinâmico premium em vermelho intenso com performance de pista.", 
            img: "src/assets/modelo-2.jpg" 
        },
        { 
            id: 3, 
            nome: "Volt Neon Pulse", 
            preco: 17200, 
            desc: "Estilo futurista com pintura azul metálica eletrizante e muita tecnologia.", 
            img: "src/assets/modelo-3.jpg" 
        },
        { 
            id: 4, 
            nome: "Volt Delivery Cute", 
            preco: 12800, 
            desc: "Prática, amarela e compacta. Perfeita para entregas com aquele estilo de dorama.", 
            img: "src/assets/modelo-4.jpg" 
        },
        { 
            id: 5, 
            nome: "Volt Heritage Classic", 
            preco: 28900, 
            desc: "Visual retrô refinado com acabamento em couro marrom e linhas clássicas.", 
            img: "src/assets/modelo-5.jpg" 
        }
    ];


    let carrinho = [];

    const containerHome = document.getElementById("container-destaques");
    
    if (containerHome) {
        containerHome.innerHTML = "";
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
            containerHome.appendChild(card);
        });
    }

    const containerLoja = document.getElementById("lista-produtos");
    
    if (containerLoja) {
        containerLoja.innerHTML = "";
        motosDestaque.forEach(moto => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div>
                    <img src="${moto.img}" alt="${moto.nome}" style="width: 100%; height: 150px; object-fit: cover; object-position: center; border-radius: 5px; margin-bottom: 15px;">
                    <h4> ${moto.nome}</h4>
                    <p>${moto.desc}</p>
                </div>
                <div>
                    <div class="preco" style="font-weight:bold; color:#00aa5b; margin: 10px 0; font-size:1.2rem;">
                        R$ ${moto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <button class="btn-add" data-id="${moto.id}" style="width: 100%; background-color: #00aa5b; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        Adicionar ao Carrinho
                    </button>
                </div>
            `;
            containerLoja.appendChild(card);
        });


        containerLoja.addEventListener("click", function(e) {
            if (e.target.classList.contains("btn-add")) {
                const idSelecionado = parseInt(e.target.getAttribute("data-id"));
                const motoEscolhida = motosDestaque.find(m => m.id === idSelecionado);
                
                if (motoEscolhida) {
                    carrinho.push(motoEscolhida);
                    atualizarCarrinho();
                }
            }
        });
    }

    function atualizarCarrinho() {
        const itensContainer = document.getElementById("itens-carrinho");
        const totalContainer = document.getElementById("valor-total");

        if (!itensContainer || !totalContainer) return;

        itensContainer.innerHTML = "";
        carrinho.forEach(item => {
            const divItem = document.createElement("div");
            divItem.style.display = "flex";
            divItem.style.justify = "space-between";
            divItem.style.padding = "5px 0";
            divItem.innerHTML = `
                <span>${item.nome}</span>
                <strong>R$ ${item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
            `;
            itensContainer.appendChild(divItem);
        });

        const valorTotalAcumulado = carrinho.reduce((acumulador, itemAtual) => {
            return acumulador + itemAtual.preco;
        }, 0);

        totalContainer.innerText = `R$ ${valorTotalAcumulado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
});

/*Fim :)*/