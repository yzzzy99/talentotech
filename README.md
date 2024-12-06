# talentotech
Documentação do Processo de Desenvolvimento
Descrição do Projeto
O projeto consiste em um jogo simples de adivinhação de números. O objetivo do jogo é adivinhar um número aleatório gerado pelo sistema entre 1 e 100. O usuário insere um palpite e recebe feedback se o palpite está correto, muito alto ou muito baixo. O jogo também mantém um contador de tentativas e permite reiniciar o jogo a qualquer momento.

Funcionalidades Implementadas
Gerar Número Aleatório: O jogo gera um número aleatório entre 1 e 100.

Entrada do Usuário: O usuário insere um palpite para adivinhar o número.

Verificar Palpite: O jogo verifica se o palpite do usuário está correto, muito alto ou muito baixo.

Contador de Tentativas: O jogo mantém um contador de tentativas do usuário.

Reiniciar Jogo: O usuário pode reiniciar o jogo a qualquer momento.

Desafios Enfrentados
Durante o desenvolvimento do projeto, alguns desafios foram encontrados:

Gerenciamento de Estado: Manter o estado do jogo (número aleatório, tentativas, feedback) de forma consistente foi um desafio inicial. A solução foi utilizar variáveis globais para armazenar esses estados e funções para manipulá-los.

Interatividade: Garantir que a interface do usuário fosse responsiva e interativa exigiu atenção especial ao uso de eventos JavaScript, como onclick, para capturar as ações do usuário.

Feedback Visual: Implementar feedback visual claro e intuitivo para o usuário foi essencial para melhorar a experiência do jogo. Utilizamos estilos CSS para diferenciar visualmente os palpites corretos e incorretos.

Uso do Git para Gerenciamento do Projeto
O Git foi uma ferramenta essencial para gerenciar o desenvolvimento do projeto. Aqui estão algumas maneiras pelas quais o Git ajudou:

Controle de Versão: O Git permitiu rastrear todas as mudanças feitas no código, facilitando a identificação e correção de erros.

Branches: Utilizamos branches para desenvolver novas funcionalidades de forma isolada, sem interferir no código principal. Isso permitiu testar e integrar novas funcionalidades de maneira organizada.

Commits: Fazer commits frequentes ajudou a manter um histórico detalhado do desenvolvimento, permitindo reverter mudanças se necessário.

Colaboração: Embora este projeto tenha sido desenvolvido individualmente, o Git facilita a colaboração em equipe, permitindo que múltiplos desenvolvedores trabalhem no mesmo projeto simultaneamente.

Estrutura do Projeto
O projeto é composto por dois arquivos principais:

index.html: Contém a estrutura HTML e o estilo CSS do jogo.

app.js: Contém a lógica JavaScript do jogo.
