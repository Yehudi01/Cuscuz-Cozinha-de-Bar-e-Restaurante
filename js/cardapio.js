/* Cuscuz Restaurante — cardapio.js (dados do cardápio 2026 + renderização) */
(function () {
  'use strict';

  // item: [código, nome, preço, descrição]  — preço pode ser texto livre (ex.: "22,90 | 39,90 | 69,90")
  var MENU = [
    { id: 'burgers', title: 'Burgers Gourmet', note: 'Combos: 0259 Refri + Batata R$ 14,90 · 2591 Suco + Batata R$ 15,90', items: [
      ['250', 'Especial do Cuscuz', '33,90', 'Pão brioche com gergelim, hambúrguer de 180g, blend de cortes nobres, queijo prato, crisps de bacon, cebola caramelizada, alface americana, tomate e molho especial'],
      ['2501', 'Camarão Burguer do Cuscuz', '45,90', 'Pão australiano, hambúrguer de 180g, blend de cortes nobres, camarões flambados, queijo cheddar, crisps de bacon, alface americana, tomate e molho especial'],
      ['251', 'Aborígene do Cuscuz', '33,90', 'Pão australiano, hambúrguer de 180g, blend de cortes nobres, queijo cheddar, crisps de bacon, alface americana, tomate e molho especial'],
      ['252', 'Premium do Cuscuz', '33,90', 'Pão premium com gergelim, hambúrguer de 180g, blend de cortes nobres, queijo prato, crisps de bacon, cebola caramelizada, alface americana, tomate e molho especial'],
      ['253', 'Fish do Cuscuz', '28,90', 'Pão premium com gergelim, filé de peixe empanado na farinha panko, queijo prato, alface americana, tomate e molho especial'],
      ['254', 'Chicken do Cuscuz', '27,90', 'Pão premium com gergelim, hambúrguer gourmet de frango, queijo prato, alface americana, tomate e molho especial'],
      ['255', 'X do Cuscuz', '24,90', 'Pão premium com gergelim, hambúrguer de 100g, blend de cortes nobres, queijo prato e molho especial'],
      ['256', 'Cuscuz Cheddar', '24,90', 'Pão premium com gergelim, hambúrguer de 100g, blend de cortes nobres, queijo cheddar e molho especial'],
      ['257', 'X Salada do Cuscuz', '27,90', 'Pão premium com gergelim, hambúrguer de 100g, blend de cortes nobres, queijo prato, alface americana, tomate e molho especial'],
      ['258', 'Cheddar Salada Cuscuz', '27,90', 'Pão premium com gergelim, hambúrguer de 100g, blend de cortes nobres, queijo cheddar, alface americana, tomate e molho especial']
    ]},
    { id: 'especialidades', title: 'Especialidades da Casa', items: [
      ['01', 'Galinha Caipira Cuscuz', '259,90', 'Galinha caipira inteira, arroz, quiabo, salada, farofa de cuscuz e creme de milho'],
      ['02', 'Picanha Família', '239,90', '700g de picanha, arroz, tropeiro, farofa de cuscuz, salada'],
      ['03', 'Ancho Angus', '239,90', '700g de ancho, arroz, tropeiro, farofa de cuscuz, salada'],
      ['04', 'Chorizo Angus', '239,90', '700g de chorizo, arroz, tropeiro, farofa de cuscuz, salada'],
      ['05', 'Carne de Sol Nordestino', '199,90', '700g de carne de sol, arroz branco, salada, tropeiro, farofa de cuscuz e mandioca cozida'],
      ['06', 'Moqueca de Camarão', '249,90', 'Camarões, molho sugo, azeite de dendê, cebola, tomate, pimentão, coentro, arroz branco e pirão'],
      ['07', 'Moqueca de Pescada com Camarão', '239,90', 'Postas de peixe, molho sugo, azeite de dendê, cebola, tomate, pimentão, coentro, arroz branco e pirão'],
      ['08', 'Camarão Internacional — 2 pessoas', '139,90', 'Camarão no arroz cremoso com topping de batata palha'],
      ['09', 'Camarão Internacional — 4 pessoas', '239,90', 'Camarão no arroz cremoso com topping de batata palha'],
      ['11', 'Boião de Picanha', '209,90', '500g de picanha grill, mandioca, fritas, legumes, banana milanesa, arroz, tropeiro, farofa de cuscuz e salada'],
      ['12', 'Boião de Frango', '149,90', '500g de filé de frango, mandioca, fritas, legumes, banana milanesa, arroz, tropeiro, farofa de cuscuz e salada'],
      ['801', 'Cuscuz Recheado — Sugestão do Cuscuz', '28,90', 'Cuscuz recheado com carne seca, presunto, queijo, ovo e pimenta biquinho']
    ]},
    { id: 'guarnicoes', title: 'Guarnições', items: [
      ['076', 'Arroz branco', '13,90'], ['078', 'Arroz c. brócolis', '19,90'], ['079', 'Feijão tropeiro', '19,90'],
      ['080', 'Farofa de cuscuz', '19,90'], ['081', 'Mandioca cozida', '17,90'], ['082', 'Banana milanesa', '17,90'],
      ['083', 'Vinagrete', '17,90'], ['084', 'Cesta de pães', '7,90'], ['087', 'Mandioca frita', '25,90'], ['820', 'Ovo frito', '2,99']
    ]},
    { id: 'petiscos', title: 'Chapas e Petiscos Gourmet', items: [
      ['18', 'Aperitivo de Picanha', '139,90', '500g de picanha fatiada, tomate, cebola, pimentão, mandioca coberta com queijo muçarela e farofa de cuscuz'],
      ['19', 'Aperitivo de Filé', '139,90', '500g de filé, tomate, cebola, pimentão, mandioca coberta de queijo muçarela e farofa de cuscuz'],
      ['20', 'Carne de Sol com Mandioca', '89,90', '500g de carne de sol a palito, mandioca cozida e farofa de cuscuz'],
      ['21', 'Assado de Tiras Angus', '119,90', '500g de assado de tiras, mandioca frita e vinagrete'],
      ['39', 'Confusão do Cuscuz', '99,90', '4 kibes, 3 discos de aipim com cupim e catupiry, 4 bolinhos de bacalhau, mandioca frita, linguiça acebolada, molho verde e geleia picante'],
      ['41', 'Kibe', '38,90', '8 kibes acompanhados de molho da casa'],
      ['42', 'Fritas da Casa', '45,90', 'Acompanha cheddar e bacon'],
      ['43', 'Fritas', '37,90', 'Acompanha molho da casa'],
      ['44', 'Bolinho de Bacalhau', '54,90', '8 unidades acompanhadas de molho da casa'],
      ['45', 'Disco de Aipim c. Cupim, Muçarela e Catupiry', '49,90', '5 unidades acompanhadas de molho da casa'],
      ['46', 'Camarão Alho e Óleo', '79,90', '400g de camarão médio flambado no conhaque'],
      ['61/661', 'Camarão Recheado com Catupiry', '73,90 | 105,90', '8 unidades | 12 unidades, acompanhados de molho da casa'],
      ['47/48/50', 'Disquinho de Carne à Parmegiana', '26,90 | 49,90 | 89,90', '2 | 4 | 8 unidades, acompanha molho da casa'],
      ['499/449/49', 'Disquinho de Carne', '22,90 | 39,90 | 69,90', '2 | 4 | 8 unidades, acompanha molho da casa'],
      ['51', 'Iscas de Peixe', '58,90', '400g de iscas de peixe, acompanhadas de molho da casa'],
      ['551', 'Iscas de Frango', '48,90', '400g de filé de frango, acompanhadas de molho da casa'],
      ['702', 'Dadinho de Tapioca', '47,90', '15 unidades acompanhadas de geleia de pimenta'],
      ['52', 'Torresmo à Moda Antiga', '24,90', 'Acompanha molho da casa'],
      ['520', 'Torresminho do Cuscuz', '9,90'],
      ['53', 'Frango a Passarinho', '48,90', '12 coxinhas da asa frita, acompanha cebola, alho e geleia picante'],
      ['530', 'Frango a Passarinho c. Fritas', '58,90', '12 coxinhas da asa frita, acompanha cebola, alho e geleia picante'],
      ['54', '8 Pastelzinhos', '39,90', 'Carne ou queijo'],
      ['58', '(8) Pasteizinhos à Parmegiana', '48,90', 'Carne, queijo e molho de tomate especial da casa'],
      ['55', 'Fígado Acebolado com Jiló', '55,90', '500g de fígado, acompanha cesta de pães e farofa de cuscuz'],
      ['56', 'Filé ao Gorgonzola', '139,90', '500g de filé, acompanha cesta de pães e farofa de cuscuz'],
      ['57', 'Filé a Palito Acebolado', '129,90', '500g de filé, acompanha cesta de pães e farofa de cuscuz'],
      ['59', 'Filé ao Molho Madeira', '129,90', '500g de filé, acompanha cesta de pães e farofa de cuscuz'],
      ['60', 'Linguiça de Pernil', '57,90', '500g de linguiça, flambada na cachaça, acompanha vinagrete e farofa de cuscuz'],
      ['750', 'Costelinha de Porco com Fritas', '53,90', '500g de costela de porco e molho barbecue']
    ]},
    { id: 'individuais', title: 'Petiscos Individuais', items: [
      ['703', 'Picanha', '65,90', '250g de picanha, fritas e vinagrete'],
      ['704', 'Chorizo Angus', '59,90', '250g de chorizo, fritas e vinagrete'],
      ['705', 'Ancho Angus', '59,90', '250g de ancho, fritas e vinagrete'],
      ['706', 'Linguiça de Pernil', '28,90', '200g de linguiça, fritas e vinagrete'],
      ['707', 'Fígado com Jiló', '28,90', '200g de fígado, fritas e farofa de cuscuz']
    ]},
    { id: 'alacarte', title: 'À la Carte Gourmet', items: [
      ['64', 'Picanha Café Paris', '69,90', 'Picanha, arroz biro biro, legumes ao vapor e molho café Paris'],
      ['65', 'Picanha do Cuscuz', '69,90', 'Arroz branco ou integral, feijão tropeiro, batata frita e legumes a vapor'],
      ['66', 'Ancho Angus do Cuscuz', '69,90', 'Arroz branco ou integral, feijão tropeiro, batata frita e legumes a vapor'],
      ['67', 'Chorizo Angus do Cuscuz', '69,90', 'Arroz branco ou integral, feijão tropeiro, batata frita e legumes a vapor'],
      ['68', 'Filé ao Molho Madeira', '69,90', 'Filé, molho madeira, arroz branco ou integral, batata frita e legumes a vapor'],
      ['73', 'Filé à Cavalo', '69,90', 'Filé grelhado, arroz branco ou integral, fritas, feijão, ovo frito e legumes ao vapor'],
      ['69', 'Tilápia Provençal', '62,90', 'Arroz branco ou integral e legumes ao vapor'],
      ['75', 'Tilápia Provençal c/ Camarão', '75,90', 'Arroz branco ou integral e legumes ao vapor'],
      ['70', 'Parmegiana de Filé Mignon', '72,90', 'Arroz branco ou integral, legumes ao vapor e batata frita'],
      ['71', 'Filé de Frango Grelhado', '44,90', 'Arroz branco ou integral, feijão, legumes ao vapor e batata frita'],
      ['72', 'Parmegiana de Frango', '49,90', 'Arroz branco ou integral, legumes ao vapor e batata frita'],
      ['74', 'Filé de Frango Empanado', '48,90', 'Arroz branco ou integral, feijão, legumes ao vapor e batata frita'],
      ['085', 'Parmegiana de Tilápia', '64,90', 'Arroz com brócolis, branco ou integral, legumes e batata frita']
    ]},
    { id: 'massas', title: 'Massas, Saladas, Caldos e Kids', items: [
      ['23', 'Espaguete à Bolonhesa', '35,90', 'Massa italiana e molho bolonhesa'],
      ['24', 'Espaguete à Carbonara', '39,90', 'Massa italiana, bacon, cebola, creme de leite e parmesão'],
      ['30', 'Salada da Casa', '45,90', 'Mix de folhas verdes, tomate, palmito, azeitonas, cenoura e cebola'],
      ['31', 'Salada Caesar', '45,90', 'Alface americana, croutons, frango, parmesão e molho caesar'],
      ['33', 'Caldo de Feijão', '25,90'], ['34', 'Caldo de Mocotó', '25,90'], ['35', 'Caldo de Frango', '25,90'],
      ['36', 'Kids · Amarelinha', '31,90', 'Frango em cubos, feijão de caldo, arroz branco e fritas'],
      ['37', 'Kids · Pula Corda', '34,90', 'Filé em cubos, feijão de caldo, arroz branco e fritas']
    ]},
    { id: 'sobremesas', title: 'Sobremesas', items: [
      ['86', 'Pudim', '12,90', 'Delicioso pudim caseiro']
    ]},
    { id: 'executivos', title: 'Pratos Executivos', note: 'Almoço · terça a sábado · * arroz branco', items: [
      ['200', 'Bife Acebolado', '37,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['201', 'Bife à Cavalo', '38,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['203', 'Iscas de Fígado', '34,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['204', 'Filé Grelhado (frango)', '35,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['206', 'Filé Empanado (frango)', '37,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['205', 'Costelinha Barbecue', '37,90', 'Arroz branco, feijão, purê de batatas e salada'],
      ['208', 'Filé Empanado (peixe)', '38,90', 'Arroz branco, feijão, purê de batatas e salada'],
      ['202', 'Parmegiana de Frango', '37,90', 'Arroz branco e purê de batatas'],
      ['210', 'Parmegiana de Carne', '39,90', 'Arroz branco e purê de batatas'],
      ['211', 'Parmegiana de Tilápia', '39,90', 'Arroz branco, brócolis e fritas'],
      ['490', 'Feijoada à vontade', '44,90', 'Arroz, farofa couve, torresmo e laranja · somente sextas e sábados']
    ], extras: { title: 'Adicionais', list: [
      ['Carne/Peixe', '28,90'], ['Parmegiana', '32,90'], ['Arroz', '6,99'], ['Feijão', '6,99'],
      ['Costelinha/Frango empanado', '27,90'], ['Fígado/Frango grelhado', '25,90'], ['Farofa de cuscuz', '9,90'],
      ['Fritas', '8,99'], ['Macarrão', '9,90'], ['Mandioca', '8,90'], ['Purê', '8,90'], ['Salada', '6,99'], ['Ovo frito', '2,99']
    ]}},
    { id: 'marmitas', title: 'Marmitas Gourmet', note: 'Terça a sábado, somente no almoço · retirada ou entrega · todos os pratos podem vir com arroz integral', items: [
      ['481', 'Bife Acebolado', '31,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['484', 'Bife à Cavalo', '32,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['487', 'Iscas de Fígado', '28,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['485', 'Filé Grelhado (frango)', '28,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['486', 'Filé Empanado (frango)', '29,90', 'Arroz branco, feijão, macarrão ao molho sugo e salada'],
      ['488', 'Costelinha Barbecue', '31,90', 'Arroz branco, feijão, purê de batatas e salada'],
      ['489', 'Filé Empanado (peixe)', '32,90', 'Arroz branco, feijão, purê de batatas e salada'],
      ['482', 'Parmegiana de Frango ou Carne', '33,90', 'Arroz branco e purê de batatas'],
      ['483', 'Parmegiana de Tilápia', '33,90', 'Arroz branco, brócolis e fritas'],
      ['480', 'Feijoada', '33,90', 'Arroz, farofa couve e torresmo · somente sextas e sábados']
    ]},
    { id: 'drinks', title: 'Drinks Maravilhosos', note: 'Happy Hour — Chopp Brahma a R$ 9,90: terça a quinta o dia todo (exceto feriado) e sexta a domingo das 16h às 20h', items: [
      ['—', 'Chopp Brahma', '18,90', 'Happy hour: R$ 9,90'],
      ['146', 'Caipirinha', '18,90'],
      ['147', 'Caipivodka', '18,90', 'Stolichnaya ou Wyborowa'],
      ['148', 'Caipivodka', '18,90', 'Nacional'],
      ['151', 'Caipivodka Absolut', '18,90'],
      ['149', 'Cozumel', '18,90'],
      ['150', 'Margarita', '29,90', 'Tequila, licor de laranja e suco de limão'],
      ['155', 'Piña Colada', '18,90', 'Rum Malibu, leite, leite de coco, leite condensado e abacaxi'],
      ['160', 'Gin Tônica', '18,90', 'Gin, água tônica e laranja'],
      ['630', 'Cuba Libre', '18,90', 'Coca-Cola e rum Montilla'],
      ['631', 'Gin Tropical', '18,90'],
      ['632', 'Gin Tropical Tanqueray', '18,90', 'Energético tropical com gin Tanqueray e laranja'],
      ['632', 'Gin Tônica Tanqueray', '18,90', 'Laranja e água tônica']
    ]},
    { id: 'cervejas', title: 'Cervejas', items: [
      ['090', 'Heineken 600 ml', '18,99'], ['091', 'Corona 600 ml', '18,99'], ['092', 'Stella 600 ml', '17,99'],
      ['093', 'Amstel 600 ml', '14,99'], ['095', 'Antártica Original 600 ml', '15,99'], ['096', 'Spaten 600 ml', '15,99'],
      ['097', 'Stella Pure Gold Longneck', '11,99'], ['098', 'Corona Longneck', '12,99'], ['920', 'Heineken Longneck', '11,99'],
      ['930', 'Michelob Longneck', '11,99'], ['950', 'Cerveja Zero Longneck', '12,99']
    ]},
    { id: 'doses', title: 'Doses de Bebidas', groups: [
      { t: 'Whisky', l: [['122', 'Johnnie Walker Double Black', '33,90'], ['123', 'Chivas Regal', '28,90'], ['124', 'Johnnie Walker Black Label', '28,90'], ['125', 'Johnnie Walker Red Label', '14,90'], ['126', 'Old Parr', '25,90'], ['127', "Jack Daniel's", '26,90'], ['128', 'White Horse', '14,90'], ['129', 'J&B', '12,90'], ['130', 'Buchanans', '29,90']] },
      { t: 'Vodka', l: [['131', 'Ciroc', '22,90'], ['132', 'Absolut', '17,90'], ['133', 'Stolichnaya', '16,90'], ['134', 'Smirnoff', '11,90']] },
      { t: 'Conhaque', l: [['136', 'Domecq', '7,90']] },
      { t: 'Aperitivos', l: [['137', 'Steinhaeger (alemão)', '17,90'], ['138', 'Campari', '14,90'], ['139', 'Rum Bacardi', '14,90'], ['140', 'Martini Bianco', '14,90'], ['141', 'Tanqueray', '22,90'], ['142', 'Aperol', '14,90'], ['341', 'Rum Montilla', '14,90']] },
      { t: 'Tequila', l: [['143', 'José Cuervo (ouro)', '22,90'], ['144', 'José Cuervo (prata)', '22,90']] },
      { t: 'Cachaça', l: [['163', 'Lua Nova', '9,90'], ['164', 'Salinas Carval', '17,90'], ['166', 'Valle Verde', '16,90'], ['167', 'Ypióca 150', '22,90'], ['168', 'Sagatiba Prata', '10,90'], ['170', 'Chico Mineiro', '14,90'], ['171', 'São Francisco', '7,90'], ['270', 'Bananinha', '9,90'], ['271', 'Gabriela', '9,90']] },
      { t: 'Licores e digestivos', l: [['172', 'Licor 43', '23,90'], ['173', 'Amarula', '23,90'], ['174', 'Cointreau', '23,90']] }
    ]},
    { id: 'vinhos', title: 'Carta de Vinhos', groups: [
      { t: 'Espumantes', l: [['185', 'Brut', '99,90'], ['185', 'Moscatel', '99,90'], ['188', 'Lambrusco', '69,90']] },
      { t: 'Vinhos', l: [['190', 'Blend Malbec, Tempranillo e Bonarda — Argentina', '79,90'], ['191', 'Cabernet Sauvignon — Chile', '89,90'], ['192', 'Carménère — Chile', '89,90'], ['193', 'Malbec — Argentina', '89,90'], ['194', 'Blend Aragonez, Trincadeira e Castelão — Portugal', '109,90']] }
    ]},
    { id: 'soft', title: 'Soft Drinks', groups: [
      { t: 'Água', l: [['099', 'Com gás', '6,49'], ['100', 'Sem gás', '5,99']] },
      { t: 'Sucos', l: [['102', 'Laranja', '11,90'], ['103', 'Laranja (jarra 800 ml)', '26,99'], ['104', 'Abacaxi', '9,99'], ['105', 'Abacaxi c/ hortelã', '10,99'], ['106', 'Abacaxi c/ hortelã (jarra 800 ml)', '27,99'], ['107', 'Morango c/ laranja (jarra 800 ml)', '29,99'], ['108', 'Morango', '11,99'], ['111', 'Morango (jarra 800 ml)', '27,90'], ['300', 'Limão', '9,99'], ['301', 'Limonada suíça', '13,99'], ['302', 'Limão (jarra 800 ml)', '26,90']] },
      { t: 'Refrigerantes e sucos lata', l: [['101', 'Suco de maracujá', '9,99'], ['109', 'Suco de uva', '9,99'], ['110', 'Suco de caju', '9,99'], ['112', 'Schweppes Citrus', '8,50'], ['113', 'Schweppes Tônica', '8,50'], ['114', 'Coca-Cola', '8,50'], ['115', 'Fanta Laranja', '8,50'], ['116', 'Fanta Uva', '8,50'], ['117', 'Sprite', '8,50'], ['118', 'Guaraná', '8,50'], ['119', 'H2O e Limoneto', '10,90'], ['120', 'Coca-Cola KS', '7,99'], ['121', 'Guaraná Zero', '8,50'], ['800', 'Coca-Cola Zero', '8,50']] },
      { t: 'Energético', l: [['178', 'Red Bull', '14,99']] }
    ]}
  ];

  var NAV = [
    ['burgers', 'Burgers'], ['especialidades', 'Especialidades'], ['petiscos', 'Chapas e Petiscos'], ['alacarte', 'À la Carte'],
    ['massas', 'Massas e Saladas'], ['executivos', 'Executivos'], ['marmitas', 'Marmitas'], ['drinks', 'Drinks'],
    ['cervejas', 'Cervejas'], ['doses', 'Doses'], ['vinhos', 'Vinhos'], ['soft', 'Soft Drinks']
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function price(p) {
    return p.split(' | ').map(function (v) { return '<span class="mi__p"><small>R$</small> ' + esc(v) + '</span>'; }).join('<span class="mi__sep">|</span>');
  }
  function item(it) {
    var code = it[0] === '—' ? '' : '<span class="mi__code">' + esc(it[0]) + '</span>';
    return '<li class="mi" data-search="' + esc((it[0] + ' ' + it[1] + ' ' + (it[3] || '')).toLowerCase()) + '">' +
      '<div class="mi__main">' + code + '<h3>' + esc(it[1]) + '</h3>' + (it[3] ? '<p>' + esc(it[3]) + '</p>' : '') + '</div>' +
      '<span class="mi__dots"></span><div class="mi__price">' + price(it[2]) + '</div></li>';
  }

  var out = '';
  MENU.forEach(function (s) {
    out += '<section class="ms" id="' + s.id + '" data-sec><header class="ms__head"><h2>' + esc(s.title) + '</h2>' +
      (s.note ? '<p class="ms__note">' + esc(s.note) + '</p>' : '') + '</header>';
    if (s.items) out += '<ul class="ms__list">' + s.items.map(item).join('') + '</ul>';
    if (s.groups) s.groups.forEach(function (g) {
      out += '<h3 class="ms__sub">' + esc(g.t) + '</h3><ul class="ms__list">' + g.l.map(function (l) { return item([l[0], l[1], l[2]]); }).join('') + '</ul>';
    });
    if (s.extras) {
      out += '<h3 class="ms__sub">' + esc(s.extras.title) + '</h3><ul class="ms__list">' +
        s.extras.list.map(function (l) { return item(['', l[0], l[1]]).replace('<span class="mi__code"></span>', ''); }).join('') + '</ul>';
    }
    out += '</section>';
  });
  document.getElementById('menuRoot').innerHTML = out;

  /* chips */
  var chips = document.getElementById('chips');
  chips.innerHTML = NAV.map(function (n) { return '<a href="#' + n[0] + '" data-id="' + n[0] + '">' + n[1] + '</a>'; }).join('');

  /* busca */
  var input = document.getElementById('search'), empty = document.getElementById('empty');
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase(), any = false;
    Array.prototype.forEach.call(document.querySelectorAll('.mi'), function (li) {
      var show = !q || li.getAttribute('data-search').indexOf(q) > -1;
      li.hidden = !show;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-sec]'), function (sec) {
      var has = sec.querySelectorAll('.mi:not([hidden])').length > 0;
      sec.hidden = !has; if (has) any = true;
    });
    empty.hidden = any;
  });

  /* chip ativo */
  if ('IntersectionObserver' in window) {
    var chipLinks = Array.prototype.slice.call(chips.querySelectorAll('a'));
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          chipLinks.forEach(function (c) {
            var on = c.getAttribute('data-id') === e.target.id;
            c.classList.toggle('is-on', on);
            if (on) chips.scrollTo({ left: c.offsetLeft - 40, behavior: 'smooth' });
          });
        }
      });
    }, { rootMargin: '-30% 0px -65% 0px' });
    NAV.forEach(function (n) { var el = document.getElementById(n[0]); if (el) spy.observe(el); });
  }

  document.getElementById('printBtn').addEventListener('click', function () { window.print(); });
  var hdr = document.getElementById('header');
  window.addEventListener('scroll', function () { hdr.classList.toggle('is-stuck', window.scrollY > 30); }, { passive: true });
})();
