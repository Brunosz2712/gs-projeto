// document.addEventListener('DOMContentLoaded', function() {
//     let chart; // Variável para armazenar o objeto do gráfico

//     // Função para inicializar ou atualizar o gráfico
//     function initChart() {
//         const ctx = document.getElementById('collection-chart').getContext('2d');

//         // Se o gráfico já existir, destrua-o antes de criar um novo
//         if (chart) {
//             chart.destroy();
//         }

//         // Inicializar o gráfico Chart.js
//         chart = new Chart(ctx, {
//             type: 'bar', // Tipo de gráfico: barras
//             data: {
//                 labels: ['Praia de Santos', 'Praia Grande', 'Guarujá'], // Etiquetas para os dados
//                 datasets: [{
//                     label: 'Quantidade de Resíduos Coletados (kg)', // Legenda do conjunto de dados
//                     data: [0, 0, 0], // Dados iniciais (em kg)
//                     backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'] // Cores de fundo das barras
//                 }]
//             },
//             options: {
//                 responsive: true, // Tornar o gráfico responsivo
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Iniciar o eixo Y no zero
//                         title: {
//                             display: true,
//                             text: 'Quilogramas (kg)' // Título do eixo Y
//                         }
//                     }
//                 }
//             }
//         });
//     }

//     // Chamar a função de inicialização do gráfico ao carregar a página
//     initChart();

//     // Função para atualizar o gráfico com os dados do formulário
//     function updateChart(beach, weight) {
//         // Encontrar o índice da praia no array de labels
//         const index = ['Praia de Santos', 'Praia Grande', 'Guarujá'].indexOf(beach);
//         if (index !== -1) {
//             // Adicionar o peso coletado à praia correspondente
//             chart.data.datasets[0].data[index] += weight;
//             // Atualizar o gráfico
//             chart.update();
//             updateRanking(); // Atualizar o ranking
//         }
//     }

//     // Função para limpar os campos do formulário
//     function clearFormFields() {
//         document.getElementById('beach-select').value = 'escolha';
//         document.getElementById('photo').value = '';
//         document.getElementById('location').value = '';
//         document.getElementById('weight').value = '';
//     }

//     // Função para enviar o formulário
//     window.submitForm = function() {
//         const beach = document.getElementById('beach-select').value;
//         const weight = parseFloat(document.getElementById('weight').value); // Captura o valor e converte para float

//         // Verifica se os campos estão preenchidos corretamente
//         if (beach !== 'escolha' && !isNaN(weight) && weight > 0) {
//             updateChart(beach, weight);
//             clearFormFields(); // Limpar os campos do formulário
//         } else {
//             // Adicione sua lógica para tratar erros (por exemplo, exibir mensagens de erro)
//             alert('Por favor, selecione uma praia e insira um peso válido.');
//         }
//     };

//     // Evento para capturar o envio do formulário
//     document.getElementById('beach-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Evitar o comportamento padrão do formulário (recarregar a página)
//         submitForm(); // Chamar a função para enviar o formulário
//     });

//     // Função para atualizar o ranking das praias
//     function updateRanking() {
//         const beachRanking = document.getElementById('beach-ranking');
//         const beachData = chart.data.datasets[0].data.map((weight, index) => {
//             return { beach: chart.data.labels[index], weight: weight };
//         });

//         // Ordenar as praias pela quantidade de resíduos coletados (maior para menor)
//         beachData.sort((a, b) => b.weight - a.weight);

//         // Limpar o ranking atual
//         beachRanking.innerHTML = '';

//         // Adicionar as praias ordenadas ao ranking
//         beachData.forEach((data) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${data.beach}: ${data.weight} kg`;
//             beachRanking.appendChild(listItem);
//         });
//     }
// });












// document.addEventListener('DOMContentLoaded', function() {
//     let chart; // Variável para armazenar o objeto do gráfico

//     // Função para inicializar ou atualizar o gráfico
//     function initChart() {
//         const ctx = document.getElementById('collection-chart').getContext('2d');

//         // Se o gráfico já existir, destrua-o antes de criar um novo
//         if (chart) {
//             chart.destroy();
//         }

//         // Inicializar o gráfico Chart.js
//         chart = new Chart(ctx, {
//             type: 'bar', // Tipo de gráfico: barras
//             data: {
//                 labels: ['Praia de Santos', 'Praia Grande', 'Guarujá'], // Etiquetas para os dados
//                 datasets: [{
//                     label: 'Quantidade de Resíduos Coletados (kg)', // Legenda do conjunto de dados
//                     data: [0, 0, 0], // Dados iniciais (em kg)
//                     backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'] // Cores de fundo das barras
//                 }]
//             },
//             options: {
//                 responsive: true, // Tornar o gráfico responsivo
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Iniciar o eixo Y no zero
//                         title: {
//                             display: true,
//                             text: 'Quilogramas (kg)' // Título do eixo Y
//                         }
//                     }
//                 }
//             }
//         });
//     }

//     // Chamar a função de inicialização do gráfico ao carregar a página
//     initChart();

//     // Função para atualizar o gráfico com os dados do formulário
//     function updateChart(beach, weight) {
//         // Encontrar o índice da praia no array de labels
//         const index = ['Praia de Santos', 'Praia Grande', 'Guarujá'].indexOf(beach);
//         if (index !== -1) {
//             // Adicionar o peso coletado à praia correspondente
//             chart.data.datasets[0].data[index] += weight;
//             // Atualizar o gráfico
//             chart.update();
//             updateRanking(); // Atualizar o ranking
//         }
//     }

//     // Função para limpar os campos do formulário
//     function clearFormFields() {
//         document.getElementById('beach-select').value = 'escolha';
//         document.getElementById('photo').value = '';
//         document.getElementById('location').value = '';
//         document.getElementById('weight').value = '';
//     }

//     // Função para enviar o formulário
//     window.submitForm = function() {
//         const beach = document.getElementById('beach-select').value;
//         const weight = parseFloat(document.getElementById('weight').value); // Captura o valor e converte para float

//         // Verifica se os campos estão preenchidos corretamente
//         if (beach !== 'escolha' && !isNaN(weight) && weight > 0) {
//             updateChart(beach, weight);
//             clearFormFields(); // Limpar os campos do formulário
//         } else {
//             // Adicione sua lógica para tratar erros (por exemplo, exibir mensagens de erro)
//             alert('Por favor, selecione uma praia e insira um peso válido.');
//         }
//     };

//     // Evento para capturar o envio do formulário
//     document.getElementById('beach-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Evitar o comportamento padrão do formulário (recarregar a página)
//         submitForm(); // Chamar a função para enviar o formulário
//     });

//     // Função para atualizar o ranking das praias
//     function updateRanking() {
//         const beachRanking = document.getElementById('beach-ranking');
//         const beachData = chart.data.datasets[0].data.map((weight, index) => {
//             return { beach: chart.data.labels[index], weight: weight };
//         });

//         // Ordenar as praias pela quantidade de resíduos coletados (maior para menor)
//         beachData.sort((a, b) => b.weight - a.weight);

//         // Limpar o ranking atual
//         beachRanking.innerHTML = '';

//         // Adicionar as praias ordenadas ao ranking
//         beachData.forEach((data) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${data.beach}: ${data.weight} kg`;
//             beachRanking.appendChild(listItem);
//         });
//     }
// });





// document.addEventListener('DOMContentLoaded', function() {
//     let chart; // Variável para armazenar o objeto do gráfico

//     // Função para inicializar ou atualizar o gráfico
//     function initChart() {
//         const ctx = document.getElementById('collection-chart').getContext('2d');

//         // Se o gráfico já existir, destrua-o antes de criar um novo
//         if (chart) {
//             chart.destroy();
//         }

//         // Inicializar o gráfico Chart.js
//         chart = new Chart(ctx, {
//             type: 'bar', // Tipo de gráfico: barras
//             data: {
//                 labels: ['Praia de Santos', 'Praia Grande', 'Guarujá'], // Etiquetas para os dados
//                 datasets: [{
//                     label: 'Quantidade de Resíduos Coletados (kg)', // Legenda do conjunto de dados
//                     data: [0, 0, 0], // Dados iniciais (em kg)
//                     backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'] // Cores de fundo das barras
//                 }]
//             },
//             options: {
//                 responsive: true, // Tornar o gráfico responsivo
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Iniciar o eixo Y no zero
//                         title: {
//                             display: true,
//                             text: 'Quilogramas (kg)' // Título do eixo Y
//                         }
//                     }
//                 }
//             }
//         });
//     }

//     // Chamar a função de inicialização do gráfico ao carregar a página
//     initChart();

//     // Função para atualizar o gráfico com os dados do formulário
//     function updateChart(beach, weight) {
//         // Encontrar o índice da praia no array de labels
//         const index = ['Praia de Santos', 'Praia Grande', 'Guarujá'].indexOf(beach);
//         if (index !== -1) {
//             // Adicionar o peso coletado à praia correspondente
//             chart.data.datasets[0].data[index] += weight;
//             // Atualizar o gráfico
//             chart.update();
//             updateRanking(); // Atualizar o ranking
//         }
//     }

//     // Função para limpar os campos do formulário
//     function clearFormFields() {
//         document.getElementById('beach-select').value = 'escolha';
//         document.getElementById('photo').value = '';
//         document.getElementById('location').value = '';
//         document.getElementById('weight').value = '';
//     }

//     // Função para enviar o formulário
//     window.submitForm = function() {
//         const beach = document.getElementById('beach-select').value;
//         const weight = parseFloat(document.getElementById('weight').value); // Captura o valor e converte para float

//         // Verifica se os campos estão preenchidos corretamente
//         if (beach !== 'escolha' && !isNaN(weight) && weight > 0) {
//             updateChart(beach, weight);
//             clearFormFields(); // Limpar os campos do formulário
//         } else {
//             // Adicione sua lógica para tratar erros (por exemplo, exibir mensagens de erro)
//             alert('Por favor, selecione uma praia e insira um peso válido.');
//         }
//     };

//     // Evento para capturar o envio do formulário
//     document.getElementById('beach-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Evitar o comportamento padrão do formulário (recarregar a página)
//         submitForm(); // Chamar a função para enviar o formulário
//     });

//     // Função para atualizar o ranking das praias
//     function updateRanking() {
//         const beachRanking = document.getElementById('beach-ranking');
//         if (!beachRanking) {
//             console.error('Elemento com ID "beach-ranking" não encontrado.');
//             return;
//         }
//         const beachData = chart.data.datasets[0].data.map((weight, index) => {
//             return { beach: chart.data.labels[index], weight: weight };
//         });

//         // Ordenar as praias pela quantidade de resíduos coletados (maior para menor)
//         beachData.sort((a, b) => b.weight - a.weight);

//         // Limpar o ranking atual
//         beachRanking.innerHTML = '';

//         // Adicionar as praias ordenadas ao ranking
//         beachData.forEach((data) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${data.beach}: ${data.weight} kg`;
//             beachRanking.appendChild(listItem);
//         });
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let chart; // Variável para armazenar o objeto do gráfico

//     // Função para inicializar ou atualizar o gráfico
//     function initChart() {
//         const ctx = document.getElementById('collection-chart').getContext('2d');

//         // Se o gráfico já existir, destrua-o antes de criar um novo
//         if (chart) {
//             chart.destroy();
//         }

//         // Inicializar o gráfico Chart.js
//         chart = new Chart(ctx, {
//             type: 'bar', // Tipo de gráfico: barras
//             data: {
//                 labels: ['Praia de Santos', 'Praia Grande', 'Guarujá'], // Etiquetas para os dados
//                 datasets: [{
//                     label: 'Quantidade de Resíduos Coletados (kg)', // Legenda do conjunto de dados
//                     data: [0, 0, 0], // Dados iniciais (em kg)
//                     backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'] // Cores de fundo das barras
//                 }]
//             },
//             options: {
//                 responsive: true, // Tornar o gráfico responsivo
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Iniciar o eixo Y no zero
//                         title: {
//                             display: true,
//                             text: 'Quilogramas (kg)' // Título do eixo Y
//                         }
//                     }
//                 }
//             }
//         });
//     }

//     // Chamar a função de inicialização do gráfico ao carregar a página
//     initChart();

//     // Função para atualizar o gráfico com os dados do formulário
//     function updateChart(beach, weight) {
//         // Encontrar o índice da praia no array de labels
//         const index = ['Praia de Santos', 'Praia Grande', 'Guarujá'].indexOf(beach);
//         if (index !== -1) {
//             // Adicionar o peso coletado à praia correspondente
//             chart.data.datasets[0].data[index] += weight;
//             // Atualizar o gráfico
//             chart.update();
//             updateRanking(); // Atualizar o ranking
//         }
//     }

//     // Função para limpar os campos do formulário
//     function clearFormFields() {
//         document.getElementById('beach-select').value = 'escolha';
//         document.getElementById('photo').value = '';
//         document.getElementById('location').value = '';
//         document.getElementById('weight').value = '';
//     }

//     // Função para enviar o formulário
//     window.submitForm = function() {
//         const beach = document.getElementById('beach-select').value;
//         const weight = parseFloat(document.getElementById('weight').value); // Captura o valor e converte para float

//         // Verifica se os campos estão preenchidos corretamente
//         if (beach !== 'escolha' && !isNaN(weight) && weight > 0) {
//             updateChart(beach, weight);
//             clearFormFields(); // Limpar os campos do formulário
//         } else {
//             // Adicione sua lógica para tratar erros (por exemplo, exibir mensagens de erro)
//             alert('Por favor, selecione uma praia e insira um peso válido.');
//         }
//     };

//     // Evento para capturar o envio do formulário
//     document.getElementById('beach-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Evitar o comportamento padrão do formulário (recarregar a página)
//         submitForm(); // Chamar a função para enviar o formulário
//     });

//     // Função para atualizar o ranking das praias
//     function updateRanking() {
//         const beachRanking = document.getElementById('beach-ranking');
//         if (!beachRanking) {
//             console.error('Elemento com ID "beach-ranking" não encontrado.');
//             return;
//         }
//         const beachData = chart.data.datasets[0].data.map((weight, index) => {
//             return { beach: chart.data.labels[index], weight: weight };
//         });

//         // Ordenar as praias pela quantidade de resíduos coletados (maior para menor)
//         beachData.sort((a, b) => b.weight - a.weight);

//         // Limpar o ranking atual
//         beachRanking.innerHTML = '';

//         // Adicionar as praias ordenadas ao ranking
//         beachData.forEach((data, index) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${data.beach}: ${data.weight} kg`;

//             // Adicionar uma classe especial para o primeiro item
//             if (index === 0) {
//                 listItem.classList.add('first-place');
//             }

//             beachRanking.appendChild(listItem);
//         });
//     }
// });

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
            updateRanking(); // Atualizar o ranking
        }
    }

    // Função para limpar os campos do formulário
    function clearFormFields() {
        document.getElementById('beach-select').value = 'escolha';
        document.getElementById('photo').value = '';
        document.getElementById('location').value = '';
        document.getElementById('weight').value = '';
    }

    // Função para enviar o formulário
    window.submitForm = function() {
        const beach = document.getElementById('beach-select').value;
        const weight = parseFloat(document.getElementById('weight').value); // Captura o valor e converte para float

        // Verifica se os campos estão preenchidos corretamente
        if (beach !== 'escolha' && !isNaN(weight) && weight > 0) {
            updateChart(beach, weight);
            clearFormFields(); // Limpar os campos do formulário
        } else {
            // Adicione sua lógica para tratar erros (por exemplo, exibir mensagens de erro)
            alert('Por favor, selecione uma praia e insira um peso válido.');
        }
    };

    // Evento para capturar o envio do formulário
    document.getElementById('beach-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar o comportamento padrão do formulário (recarregar a página)
        submitForm(); // Chamar a função para enviar o formulário
    });

    // Função para atualizar o ranking das praias
    function updateRanking() {
        const beachRanking = document.getElementById('beach-ranking');
        if (!beachRanking) {
            console.error('Elemento com ID "beach-ranking" não encontrado.');
            return;
        }
        const beachData = chart.data.datasets[0].data.map((weight, index) => {
            return { beach: chart.data.labels[index], weight: weight };
        });

        // Ordenar as praias pela quantidade de resíduos coletados (maior para menor)
        beachData.sort((a, b) => b.weight - a.weight);

        // Limpar o ranking atual
        beachRanking.innerHTML = '';

        // Adicionar as praias ordenadas ao ranking
        beachData.forEach((data, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${data.beach}: ${data.weight} kg`;

            beachRanking.appendChild(listItem);
        });

        // Atualizar a mensagem de destaque da praia com mais lixo coletado
        const topBeachMessage = document.getElementById('top-beach-message');
        if (beachData.length > 0 && topBeachMessage) {
            topBeachMessage.textContent = `A  Praia de ${beachData[0].beach} coletou ${beachData[0].weight} quilos de lixo.`;
        }
    }
});



