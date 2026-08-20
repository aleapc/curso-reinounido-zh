// A CONFIG DE CURSO — o que muda entre SKUs mora AQUI e só aqui.

export const curso = {
  sku: 'curso-reinounido-zh',
  /** Idioma do comprador (a voz-guia). Mandarim — o turista chinês no Reino Unido. */
  buyerLang: 'zh',
  /** Idioma do destino (a fala nativa ensinada). Inglês BRITÂNICO — reusa a
   * camada-alvo criada em curso-reinounido-fr. Derivação: só a camada de guia
   * (mandarim) é nova. */
  targetLang: 'en',
  translatorPair: { sl: 'zh', tl: 'en' },
  destCurrency: 'GBP',
  /** O comprador chinês usa yuan; o destino, libra. Conversão real. */
  homeCurrencies: ['CNY'] as string[],
  timeZone: 'Europe/London',
  cidadeExibicao: '伦敦',
  /**
   * Faixas do dia, narradas em MANDARIM, sobre o ritmo BRITÂNICO. O jantar
   * chinês costuma ser ~18h-19h — perto do britânico, sem grande choque de
   * horário; a diferença real é o cardápio (full English) e a cozinha que
   * fecha mais cedo do que o esperado. PROVISÓRIO, revisar antes de tratar
   * como padrão.
   */
  faixasNow: [
    { de: 0, linha: '厨房都关了，但一家烤肉店或深夜炸薯条店（chip shop）还能救急。' },
    { de: 5 * 60, linha: '几乎还没开门。咖啡馆和几家连锁咖啡店大概六点开始营业。' },
    { de: 7 * 60, linha: 'Breakfast：一份热腾腾的全套英式早餐，或者只是咖啡加吐司。这里早餐吃得早。' },
    { de: 9 * 60 + 30, linha: '上午安静的时段。咖啡馆供应咖啡和糕点——你来得早，不算晚。' },
    { de: 11 * 60 + 30, linha: '午餐开始了。常见的是meal deal（三明治+小食+饮料）或一份快捷的酒吧简餐。' },
    { de: 12 * 60, linha: '午餐时间：到下午两点前都很快坐满。比家里吃得更快、更清淡。' },
    { de: 14 * 60, linha: '午餐渐渐结束。咖啡馆仍开着，供应下午茶和茶点——著名的afternoon tea。' },
    { de: 16 * 60, linha: '傍晚前的安静空档。喝杯茶或提前去酒吧来一品脱啤酒，打发时间。' },
    { de: 17 * 60, linha: '下班后去酒吧：晚上的第一品脱啤酒，往往比晚饭还早。' },
    { de: 18 * 60, linha: 'Dinnertime：这里吃晚饭比想象中早，厨房已经全速运转起来了。' },
    { de: 20 * 60 + 30, linha: '晚餐渐渐结束。很多厨房关得比你想的早——记得问一句"最后点单时间"（last order）。' },
    { de: 22 * 60 + 30, linha: '晚了。酒吧还在供酒（last orders约晚上11点），但厨房往往已经关了。' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
