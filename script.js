
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte e Sustentável</title>
    <style>
        /* Variáveis de Cores Premium */
        :root {
            --bg-escuro: #1e2022;          /* Cinza antracite profundo */
            --bg-medio: #2b2e32;           /* Cinza médio para contraste */
            --dourado: #dfb743;            /* Dourado vivo */
            --dourado-brilho: #f7e185;     /* Dourado claro para destaques */
            --texto-principal: #ffffff;    /* Branco puro para títulos */
            --texto-secundario: #c2c7ce;   /* Cinza claro para blocos de texto */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-escuro);
            color: var(--texto-principal);
            overflow-x: hidden;
        }

        /* Hero Section (Abertura com Imagem Gigante) */
        .hero {
            position: relative;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 2rem;
            background: linear-gradient(rgba(30, 32, 34, 0.7), rgba(30, 32, 34, 0.9)), 
                        url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
            border-bottom: 5px solid var(--dourado);
        }

        .hero-conteudo {
            max-width: 1000px;
        }

        /* Título Gigante */
        .hero h1 {
            font-size: 4.5rem;
            font-weight: 900;
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: -1px;
            color: var(--texto-principal);
            margin-bottom: 1.5rem;
        }

        .hero h1 span {
            color: var(--dourado);
            display: block;
            font-size: 5rem;
        }

        /* Subtítulo Grande */
        .hero p {
            font-size: 1.8rem;
            color: var(--texto-secundario);
            font-weight: 300;
            max-width: 800px;
            margin: 0 auto 2.5rem;
        }

        /* Seções de Conteúdo (Linhas Grandes) */
        .secao-impacto {
            max-width: 1400px;
            margin: 8rem auto;
            padding: 0 2rem;
        }

        /* Bloco de Destaque Lado a Lado */
        .bloco-agro {
            display: flex;
            align-items: center;
            gap: 4rem;
            margin-bottom: 8rem;
        }

        .bloco-agro:nth-child(even) {
            flex-direction: row-reverse;
        }

        /* Imagens Grandes */
        .imagem-grande {
            flex: 1.2;
            height: 550px;
            border-radius: 4px;
            border: 2px solid var(--dourado);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }

        .img-sustentavel {
            background: url('https://images.unsplash.com/photo-1625246333195-78d9c38ad451?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
        }

        .img-tecnologia {
            background: url('https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
        }

        /* Textos Grandes das Seções */
        .texto-grande {
            flex: 1;
        }

        .texto-grande h2 {
            font-size: 3rem;
            color: var(--dourado);
            margin-bottom: 1.5rem;
            line-height: 1.2;
            font-weight: 700;
        }

        .texto-grande p {
            font-size: 1.3rem;
            color: var(--texto-secundario);
            line-height: 1.8;
        }

        /* Botão de Destaque Estilizado */
        .btn-premium {
            display: inline-block;
            padding: 1.2rem 3rem;
            font-size: 1.1rem;
            font-weight: bold;
            color: var(--bg-escuro);
            background-color: var(--dourado);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 4px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(223, 183, 67, 0.3);
        }

        .btn-premium:hover {
            background-color: var(--dourado-brilho);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(223, 183, 67, 0.5);
        }

        /* Rodapé Lindo e Minimalista */
        footer {
            background-color: #151618;
            padding: 4rem 2rem;
            text-align: center;
            border-top: 1px solid rgba(223, 183, 67, 0.2);
        }

        footer p {
            color: var(--texto-secundario);
            font-size: 1.1rem;
        }

        footer strong {
            color: var(--dourado);
        }

        /* Responsividade para Telas Menores (Celulares) */
        @media (max-width: 968px) {
            .hero h1 { font-size: 2.8rem; }
            .hero h1 span { font-size: 3.2rem; }
            .hero p { font-size: 1.3rem; }
            
            .bloco-agro, .bloco-agro:nth-child(even) {
                flex-direction: column;
                gap: 2rem;
                margin-bottom: 5rem;
            }

            .imagem-grande {
                width: 100%;
                height: 350px;
            }

            .texto-grande h2 { font-size: 2.2rem; }
            .texto-grande p { font-size: 1.1rem; }
        }
    </style>
</head>
<body>

    <section class="hero">
        <div class="hero-conteudo">
            <h1>O Futuro é o <span>Agro Forte</span></h1>
            <p>Liderando a produção global com responsabilidade ecológica, tecnologia de precisão e respeito à terra.</p>
            <a href="#conteudo" class="btn-premium">Descubra a nossa força</a>
        </div>
    </section>

    <main id="conteudo" class="secao-impacto">

        <div class="bloco-agro">
            <div class="imagem-grande img-sustentavel"></div>
            <div class="texto-grande">
                <h2>Alimentando o Mundo, Preservando o Planeta</h2>
                <p>A verdadeira força do campo está no equilíbrio. Através de práticas de manejo inteligente, como o plantio direto, rotação de culturas e a conservação ativa de recursos hídricos, provamos diariamente que produzir em alta escala e proteger a biodiversidade são metas complementares.</p>
            </div>
        </div>

        <div class="bloco-agro">
            <div class="imagem-grande img-tecnologia"></div>
            <div class="texto-grande">
                <h2>Tecnologia de Precisão a Serviço da Vida</h2>
                <p>O uso de inteligência artificial, dados climáticos avançados, drones e sensores biométricos permite otimizar cada gota de água e cada semente plantada. Diminuímos o desperdício, eliminamos excessos e potencializamos a colheita com precisão cirúrgica e pegada de carbono reduzida.</p>
            </div>
        </div>

    </main>

    <footer>
        <p>&copy; 2026 <strong>Agro Forte & Sustentável</strong>. Todos os direitos reservados. Compromisso com o amanhã.</p>
    </footer>

</body>
</html>

