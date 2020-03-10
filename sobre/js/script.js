var ht = new HT({
    // Troque por seu token de acesso
    token: '<SEU TOKEN>'
});
ht.on('translated', function () {
    console.log('Nova frase traduzida!');
});