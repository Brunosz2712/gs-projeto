document.addEventListener('DOMContentLoaded', function() {
    let chart; // Variável para armazenar o objeto do gráfico

    // Função para inicializar ou atualizar o gráfico
    function initChart() {
        const ctx = document.getElementById('collection-chart').getContext('2d');

        // Se o gráfico já existir, destrua-o antes de criar um novo
        if (chart) {
            chart.destroy();
        }

        // Inicializar o gráfico Chart.js
        chart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico: barras
            data: {
                labels: ['Santos', 'Ubatuba', 'Guarujá'], // Etiquetas para os dados
                datasets: [{
                    label: 'Quantidade de Resíduos Coletados (kg)', // Legenda do conjunto de dados
                    data: [0, 0, 0], // Dados iniciais (em kg)
                    backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'] // Cores de fundo das barras
                }]
            },
            options: {
                responsive: true, // Tornar o gráfico responsivo
                scales: {
                    y: {
                        beginAtZero: true, // Iniciar o eixo Y no zero
                        title: {
                            display: true,
                            text: 'Quilogramas (kg)' // Título do eixo Y
                        }
                    }
                }
            }
        });
    }

    // Chamar a função de inicialização do gráfico ao carregar a página
    initChart();

    // Função para atualizar o gráfico com os dados do formulário
    function updateChart(beach, weight) {
        // Encontrar o índice da praia no array de labels
        const index = ['Santos', 'Ubatuba', 'Guarujá'].indexOf(beach);
        if (index !== -1) {
            // Adicionar o peso coletado à praia correspondente
            chart.data.datasets[0].data[index] += weight;
            // Atualizar o gráfico
            chart.update();
        }
    }

    // Função para enviar o formulário
    window.submitForm = function() {
        const beach = document.getElementById('beach-select').value;
        const weight = parseFloat(document.getElementById('weight').value); // Captura o valor e converte para float

        // Exemplo de console.log para verificar os valores (remova isso depois de testar)
        console.log('Praia:', beach);
        console.log('Peso:', weight); // Verifica se o peso foi capturado corretamente

        updateChart(beach, weight);
    };

    // Evento para capturar o envio do formulário
    document.getElementById('beach-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar o comportamento padrão do formulário (recarregar a página)
        submitForm(); // Chamar a função para enviar o formulário
    });
});
