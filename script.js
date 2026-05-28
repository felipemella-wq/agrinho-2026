
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte e Sustentável - O Futuro do Campo</title>
    <style>
        /* Paleta de Cores e Configurações Base */
        :root {
            --bg-principal: #1f2124;       /* Cinza antracite escuro */
            --bg-secundario: #2a2d32;      /* Cinza médio para contraste */
            --dourado: #dfb73c;             /* Dourado vivo */
            --dourado-suave: #bc9c31;       /* Dourado escuro para bordas */
            --texto-principal: #f0f0f2;     /* Branco acinzentado confortável */
            --texto-mutado: #a0a6b0;        /* Cinza claro para descrições */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-principal);
            color: var(--texto-principal);
            line-height: 1.8;
            font-size: 1.1rem;
        }

        /* Linha de detalhe dourada no topo da página */
        .linha-topo {
            height: 5px;
            background: linear-gradient(90deg, var(--bg-principal), var(--dourado), var(--bg-principal));
            width: 100%;
        }

        /* Hero Section (Abertura Grande) */
        .hero {
            padding: 6rem 1.5rem 4rem 1.5rem;
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }

        .hero h1 {
            font-size: 3.5rem;
            color: var(--dourado);
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .hero .subtitulo {
            font-size: 1.4rem;
            color: var(--texto-mutado);
            font-style: italic;
            margin-bottom: 2rem;
        }

        .divisoria-dourada {
            width: 150px;
            height: 2px;
            background-color: var(--dourado);
            margin: 2rem auto;
        }

        /* Container de Conteúdo */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        /* Seções de Texto Longo + Imagens Grandes */
        .secao-agro {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            margin-bottom: 6rem;
            background-color: var(--bg-secundario);
            border: 1px solid rgba(223, 183, 60, 0.15);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Imagem Grande ocupando toda a largura ou metade */
        .imagem-grande {
            width: 100%;
            height: 500px; /* Altura imponente para as imagens */
            object-fit: cover;
            border-bottom: 4px solid var(--dourado);
        }

        .texto-longo {
            padding: 3rem;
        }

        .texto-longo h2 {
            color: var(--dourado);
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Detalhe dourado antes do título interno */
        .texto-longo h2::before {
            content: '';
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: var(--dourado);
            transform: rotate(45deg);
        }

        .texto-longo p {
            margin-bottom: 1.5rem;
            color: var(--texto-principal);
            text-align: justify;
        }

        .texto-longo p:last-child {
            margin-bottom: 0;
        }

        /* Alceamento de layout para telas maiores (Efeito de alternância) */
        @media (min-width: 992px) {
            .secao-agro.alternada {
                flex-direction: row;
            }
            .secao-agro.alternada-inversa {
                flex-direction: row-reverse;
            }
            .imagem-grande {
                width: 50%;
                height: auto;
                min-height: 550px;
                border-bottom: none;
            }
            .secao-agro.alternada .imagem-grande {
                border-right: 4px solid var(--dourado);
            }
            .secao-agro.alternada-inversa .imagem-grande {
                border-left: 4px solid var(--dourado);
            }
            .texto-longo {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 4rem;
            }
        }

        /* Rodapé Elegante */
        footer {
            background-color: #151618;
            padding: 3rem 1.5rem;
            text-align: center;
            border-top: 2px solid var(--dourado);
            color: var(--texto-mutado);
            margin-top: 8rem;
        }

        footer p {
            font-size: 1rem;
        }

        footer .destaque-dourado {
            color: var(--dourado);
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="linha-topo"></div>

    <header class="hero">
        <h1>Agro Forte & Sustentável</h1>
        <p class="subtitulo">A harmonia exata entre a alta produtividade do campo e a preservação ecossistêmica.</p>
        <div class="divisoria-dourada"></div>
    </header>

    <main class="container">

        <section class="secao-agro alternada">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80" alt="Plantação vasta e sustentável sob o sol" class="imagem-grande">
            <div class="texto-longo">
                <h2>A Nova Era da Produção Consciente</h2>
                <p>O conceito de um agronegócio forte e sustentável deixou de ser uma tendência de mercado para se transformar em uma necessidade vital global. Diante do desafio de alimentar uma população em constante crescimento, a agricultura moderna responde com responsabilidade, provando que o ganho de eficiência não precisa resultar no desgaste dos recursos naturais do planeta.</p>
                <p>Através da implementação de técnicas como a rotação de culturas e o plantio direto, produtores conseguem manter a vitalidade do solo por gerações. Esse modelo reduz drasticamente a necessidade de intervenções químicas pesadas, protegendo lençóis freáticos e permitindo que o microecossistema da terra trabalhe a favor da própria lavoura.</p>
            </div>
        </section>

        <section class="secao-agro alternada-inversa">
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" alt="Tecnologia e monitoramento de cultivo em detalhes" class="imagem-grande">
            <div class="texto-longo">
                <h2>Tecnologia Inteligente e Recursos Renováveis</h2>
                <p>A força do agro atual está diretamente ligada à ciência. A agricultura de precisão utiliza sensores de umidade, imagens de satélite e mapeamento via inteligência artificial para entender a necessidade exata de cada hectare. O resultado é o uso cirúrgico da água e de bioinsumos, evitando desperdícios e otimizando cada gota de recurso empregado.</p>
                <p>Além disso, as propriedades rurais modernas atuam como usinas de energia limpa. Telhados de galpões cobertos por painéis fotovoltaicos e a conversão de resíduos orgânicos e biomassa em combustível reduzem a pegada de carbono operacional a quase zero. É a autonomia energética consolidando um ciclo produtivo verdadeiramente fechado e sustentável.</p>
            </div>
        </section>

        <section class="secao-agro">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80" alt="Mãos segurando terra fértil com um broto" class="imagem-grande">
            <div class="texto-longo">
                <h2>O Impacto Socioeconômico e o Legado para o Futuro</h2>
                <p>Garantir um agro forte significa blindar a economia e promover a segurança alimentar. No entanto, a verdadeira força reside na longevidade desse impacto. O manejo sustentável preserva as florestas nativas adjacentes, mantém polinizadores naturais ativos e resguarda a rica biodiversidade local, criando uma barreira natural contra pragas e variações climáticas extremas.</p>
                <p>Ao alinhar o respeito às leis ambientais com o orgulho de produzir, o produtor rural se torna um guardião do bioma. O legado dessa transição ecológica é um ecossistema equilibrado, comunidades locais valorizadas e a certeza de que as próximas gerações herdarão terras ainda férteis, prósperas e capazes de sustentar a vida.</p>
            </div>
        </section>

    </main>

    <footer>
        <p>&copy; 2026 Manifesto Agro Forte & Sustentável. Todos os direitos reservados.</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem; color: #7f858d;">Produzido sob a visão de um <span class="destaque-dourado">Futuro Eficiente e Verde</span>.</p>
    </footer>

</body>
</html>
