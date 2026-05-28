
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte e Sustentável - O Manifesto</title>
    <style>
        /* Paleta de Cores e Configurações Base */
        :root {
            --bg-principal: #1f2124;       /* Cinza escuro profundo */
            --bg-secundario: #2a2d32;      /* Cinza intermediário */
            --dourado: #d4af37;             /* Dourado Metálico */
            --dourado-brilhante: #f7d774;   /* Dourado para realces */
            --texto-principal: #e1e4e6;     /* Branco acinzentado confortável para leitura */
            --texto-mutado: #9ca3af;        /* Cinza claro para subtítulos e dados */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Georgia', 'Times New Roman', Times, serif; /* Fonte serifada para textos longos */
        }

        body {
            background-color: var(--bg-principal);
            color: var(--texto-principal);
            line-height: 1.8;
            font-size: 1.2rem;
        }

        h1, h2, h3, .btn-dourado {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Sem serifa para títulos */
            font-weight: 700;
        }

        /* Hero Banner (Abertura Impactante) */
        .hero {
            position: relative;
            height: 80vh;
            background: linear-gradient(rgba(31, 33, 36, 0.6), rgba(31, 33, 36, 0.95)), 
                        url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat fixed;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
            border-bottom: 4px solid var(--dourado);
        }

        .hero h1 {
            font-size: 4rem;
            color: var(--dourado);
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
        }

        .hero p {
            font-size: 1.5rem;
            color: var(--texto-principal);
            max-width: 800px;
            font-style: italic;
        }

        /* Container de Conteúdo */
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        /* Estilização de Textos Longos */
        .artigo-secao {
            margin-bottom: 6rem;
        }

        .artigo-secao h2 {
            font-size: 2.2rem;
            color: var(--dourado);
            margin-bottom: 1.5rem;
            border-left: 5px solid var(--dourado);
            padding-left: 1rem;
        }

        .artigo-secao p {
            margin-bottom: 1.5rem;
            text-align: justify;
        }

        /* Imagens Grandes e Destacadas */
        .imagem-grande {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            height: 550px;
            margin-top: 3rem;
            margin-bottom: 3rem;
            border-top: 2px solid var(--dourado);
            border-bottom: 2px solid var(--dourado);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .img-agro-1 {
            background: url('https://images.unsplash.com/photo-1625246333195-78d9c38ad451?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat fixed;
        }

        .img-agro-2 {
            background: url('https://images.unsplash.com/photo-1530605663039-d509d06d996f?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat fixed;
        }

        /* Bloco de Citação em Destaque */
        .citacao-bloco {
            background-color: var(--bg-secundario);
            border-top: 1px solid var(--dourado);
            border-bottom: 1px solid var(--dourado);
            padding: 3rem;
            margin: 4rem 0;
            text-align: center;
            position: relative;
        }

        .citacao-bloco p {
            font-size: 1.6rem;
            color: var(--dourado-brilhante);
            font-style: italic;
            line-height: 1.6;
        }

        .citacao-bloco span {
            display: block;
            margin-top: 1rem;
            font-size: 1rem;
            color: var(--texto-mutado);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Rodapé */
        footer {
            background-color: #151618;
            padding: 4rem 2rem;
            text-align: center;
            border-top: 3px solid var(--dourado);
            color: var(--texto-mutado);
            font-size: 1rem;
        }

        footer a {
            color: var(--dourado);
            text-decoration: none;
        }

        footer a:hover {
            color: var(--dourado-brilhante);
        }

        /* Responsividade para Telas Menores */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .hero p { font-size: 1.2rem; }
            .artigo-secao h2 { font-size: 1.8rem; }
            body { font-size: 1.1rem; }
            .imagem-grande { height: 350px; }
            .citacao-bloco { padding: 1.5rem; }
            .citacao-bloco p { font-size: 1.3rem; }
        }
    </style>
</head>
<body>

    <section class="hero">
        <h1>O Agro Forte e Sustentável</h1>
        <p>A ciência, a terra e a responsabilidade social desenhando a nova era da segurança alimentar global.</p>
    </section>

    <main class="container">

        <article class="artigo-secao">
            <h2>A Revolução Verde do Século XXI</h2>
            <p>O conceito de um agronegócio forte e sustentável deixou de ser uma tendência mercadológica para se transformar em uma necessidade vital de sobrevivência global. Diante do crescimento demográfico acelerado e das severas mudanças climáticas que desafiam as fronteiras agrícolas tradicionais, o campo respondeu com o recurso mais valioso disponível: a inteligência tecnológica aliada ao respeito ancestral pela terra.</p>
            <p>Diferente das décadas passadas, onde o aumento da produção estava invariavelmente atrelado à expansão horizontal de áreas desmatadas, a agricultura moderna opera na verticalização e na eficiência. A otimização dos recursos tornou-se a regra de ouro. Hoje, a preservação ambiental não compete com o lucro; pelo contrário, dados mostram que propriedades que adotam manejos conservacionistas severos reduzem seus custos operacionais a longo prazo, blindam-se contra quebras climáticas e conquistam mercados internacionais com exigências de conformidade ambiental implacáveis.</p>
            <p>Essa força sustentável se manifesta desde a pequena agricultura familiar, que adota sistemas de policultura e manejo agroecológico, até as grandes corporações agrícolas, que implementam frotas inteiras movidas a biocombustíveis e monitoramento via satélite para evitar o desperdício de insumos essenciais.</p>
        </article>

        <div class="imagem-grande img-agro-1"></div>

        <article class="artigo-secao">
            <h2>Pilares da Produção Consciente</h2>
            <p>Para sustentar o título de "Forte e Sustentável", o setor apoia-se em pilares fundamentais de engenharia e biologia aplicadas. O primeiro deles é a conservação do solo. Através do Sistema de Plantio Direto (SPD), a palhada da safra anterior é mantida sobre a terra, criando uma manta térmica natural que protege o solo contra a erosão provocada por chuvas torrenciais e mantém a umidade necessária nos períodos de estiagem, reduzindo drasticamente a necessidade de irrigação artificial.</p>
            <p>O segundo pilar repousa sobre o Manejo Integrado de Pragas (MIP) e o avanço avassalador dos bioinsumos. O uso de defensores biológicos — como fungos, bactérias e insetos benéficos que combatem naturalmente as ameaças às lavouras — cresce a taxas geométricas no mundo inteiro. Isso diminui a dependência de compostos químicos pesados, garantindo alimentos mais limpos e protegendo os lençóis freáticos de contaminações acidentais.</p>
            <p>Além disso, a Integração Lavoura-Pecuária-Floresta (ILPF) surge como a obra-prima do design sustentável contemporâneo. Ao consorciar árvores, pastagens e grãos em uma mesma área, o produtor gera conforto térmico para o gado, diversifica suas fontes de renda e cria um ecossistema altamente eficiente no sequestro de carbono, neutralizando as emissões de gases de efeito estufa inerentes à atividade biológica animal.</p>
        </article>

        <div class="citacao-bloco">
            <p>"Produzir mais com menos impacto não é apenas uma meta de engenharia agrícola, é o compromisso ético da nossa geração com as gerações que herdarão a Terra."</p>
            <span>— Aliança Global pelo Desenvolvimento Agrícola</span>
        </div>

        <div class="imagem-grande img-agro-2"></div>

        <article class="artigo-secao">
            <h2>O Papel da Tecnologia e o Futuro da Transparência</h2>
            <p>O futuro da sustentabilidade no campo está intrinsecamente ligado à digitalização. A agricultura de precisão utiliza sensores em tempo real inseridos no solo para ditar exatamente a quantidade de água e nutrientes que cada planta necessita, gota a gota. Drones sobrevoam milhares de hectares mapeando focos iniciais de pragas, permitindo intervenções cirúrgicas ao invés de pulverizações generalizadas em toda a propriedade.</p>
            <p>Somado a isso, sistemas de rastreabilidade baseados em blockchain estão dando voz ao consumidor final. Através de um simples QR Code na embalagem de um produto no supermercado, é possível rastrear toda a jornada daquele alimento: desde as coordenadas geográficas da fazenda onde foi colhido, passando pelas certificações de trabalho justo e ausência de desmatamento ilegal, até o pegada de carbono gerada pelo transporte.</p>
            <p>O agro forte e sustentável prova que a economia verde é viável, lucrativa e soberana. Proteger os biomas, restaurar áreas degradadas e alimentar bilhões de indivíduos são missões que convergem em uma única direção: o campo é o motor da sustentabilidade global.</p>
        </article>

    </main>

    <footer>
        <p>&copy; 2026 Agro Forte & Sustentável. Todos os direitos reservados.</p>
        <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--dourado);">Foco na Conservação, Inovação e Segurança Alimentar Mundial.</p>
    </footer>

</body>
</html>
