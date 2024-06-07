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
        }
    }

       window.submitForm = function() {
        const beach = document.getElementById('beach-select').value;
        const weight = parseFloat(document.getElementById('weight').value);

 
        console.log('Praia:', beach);
        console.log('Peso:', weight);

        updateChart(beach, weight);
    };

    
    document.getElementById('beach-form').addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });
});
