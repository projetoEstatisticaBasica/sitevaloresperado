document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const victories = parseInt(document.getElementById('victories').value);
    const matches = parseInt(document.getElementById('matches').value);
    const odds = parseFloat(document.getElementById('odds').value);

    if (matches === 0) {
        document.getElementById('result').innerText = 'Número de partidas deve ser maior que zero.';
        return;
    }

    const probabilityVictory = (victories / matches) * 100;
    const impliedProbability = (1 / odds) * 100;
    const expectedValue = probabilityVictory - impliedProbability;

    document.getElementById('result').innerText = 
        `Probabilidade de Vitória: ${probabilityVictory.toFixed(2)}%\n` +
        `Probabilidade Imputada pela Casa de Apostas: ${impliedProbability.toFixed(2)}%\n` +
        `Valor Esperado: ${expectedValue.toFixed(2)}%`;
});
