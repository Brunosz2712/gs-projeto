document.addEventListener('DOMContentLoaded', function() {
    let chart; 

    
    function initChart() {
        const ctx = document.getElementById('collection-chart').getContext('2d');

        
        if (chart) {
            chart.destroy();
        }

        
        chart = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: ['Santos', 'Ubatuba', 'Guarujá'], 
                datasets: [{
                    label: 'Quantidade de Resíduos Coletados (kg)', 
                    data: [0, 0, 0], 
                    backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'] 
                }]
            },
            options: {
                responsive: true, 
                scales: {
                    y: {
                        beginAtZero: true, 
                        title: {
                            display: true,
                            text: 'Quilogramas (kg)' 
                        }
                    }
                }
            }
        });
    }

    
    initChart();

    
    function updateChart(beach, weight) {
        
        const index = ['Santos', 'Ubatuba', 'Guarujá'].indexOf(beach);
        if (index !== -1) {
            
            chart.data.datasets[0].data[index] += weight;
            
            chart.update();
            updateRanking(); 
        }
    }

    
    function clearFormFields() {
        document.getElementById('beach-select').value = 'escolha';
        document.getElementById('photo').value = '';
        document.getElementById('location').value = '';
        document.getElementById('weight').value = '';
    }


    window.submitForm = function() {
        const beach = document.getElementById('beach-select').value;
        const weight = parseFloat(document.getElementById('weight').value); 


        if (beach !== 'escolha' && !isNaN(weight) && weight > 0) {
            updateChart(beach, weight);
            clearFormFields(); 
        } else {
    
            alert('Por favor, selecione uma praia e insira um peso válido.');
        }
    };

    
    document.getElementById('beach-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        submitForm(); 
    });


    function updateRanking() {
        const beachRanking = document.getElementById('beach-ranking');
        if (!beachRanking) {
            console.error('Elemento com ID "beach-ranking" não encontrado.');
            return;
        }
        const beachData = chart.data.datasets[0].data.map((weight, index) => {
            return { beach: chart.data.labels[index], weight: weight };
        });

        
        beachData.sort((a, b) => b.weight - a.weight);

        
        beachRanking.innerHTML = '';

    
        beachData.forEach((data, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${data.beach}: ${data.weight} kg`;

            beachRanking.appendChild(listItem);
        });

        
        const topBeachMessage = document.getElementById('top-beach-message');
        if (beachData.length > 0 && topBeachMessage) {
            topBeachMessage.textContent = `A  Praia de ${beachData[0].beach} coletou ${beachData[0].weight} quilos de lixo.`;
        }
    }
});

window.watsonAssistantChatOptions = {
    integrationID: "6288e39b-e52c-49f8-83bc-f67fd3150e51",
    region: "us-south",
    serviceInstanceID: "f7ffc27f-c748-4afb-b070-600216d22e92", 
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

  
function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("toggle-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.innerHTML = "Ocultar Texto";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Mostrar Texto Completo";
    }
}


document.getElementById("toggle-btn").addEventListener("click", toggleText);





