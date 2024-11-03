# Sistema de Catálogo de Carros 

## Sistema desenvolvido por: Jaime, Matheus, Rayanderson e Eduardo

### Requisitos Funcionais

1. Cadastro de Veículos

* O sistema deve permitir o cadastro de novos veículos com informações como:
Marca, modelo, ano de fabricação, ano do modelo
Cor, quilometragem, tipo de combustível, tipo de câmbio
Preço, data de entrada no estoque
Fotos do veículo
* O sistema deve permitir a edição das informações de veículos cadastrados.
* O sistema deve permitir a exclusão de veículos do estoque.

2. Gerenciamento de Usuários

* O sistema deve permitir o cadastro de usuários (ex.: administrador, vendedor e cliente).
* O sistema deve permitir login e autenticação de usuários.
* O sistema deve permitir a recuperação de senha.
* O sistema deve restringir o acesso a funcionalidades com base no tipo de usuário:
Administrador: Acesso total ao sistema.
Vendedor: Acesso à gestão de veículos e clientes.
Cliente: Acesso a visualização de veículos e realização de compra.

3. Busca e Filtros de Veículos

* O sistema deve permitir que o usuário busque veículos por diferentes filtros, como:
Marca, modelo, ano, faixa de preço, tipo de combustível, quilometragem.
* O sistema deve exibir uma lista de veículos conforme os critérios de busca.
* O sistema deve ordenar a lista de veículos por diferentes critérios, como preço ou ano de fabricação.

4. Gerenciamento de Clientes
 
* O sistema deve permitir o cadastro de novos clientes com informações como:
Nome, CPF, e-mail, telefone, endereço.
* O sistema deve permitir a atualização e exclusão de dados dos clientes.
* O sistema deve manter um histórico de compras realizadas por cada cliente.
 
5. Processo de Compra
* O sistema deve permitir que o cliente inicie um processo de compra de um veículo.
* O sistema deve permitir que o cliente realize um pagamento, que poderá ser:
Total ou em parcelas.
* O sistema deve registrar a venda e alterar o status do veículo para "Vendido".
* O sistema deve gerar uma nota fiscal ou comprovante de compra para o cliente.

### Requesitos Não Funcionais

1. Desempenho
O sistema deve ser capaz de processar até 1000 consultas de usuários simultaneamente.
O tempo de resposta para a pesquisa de veículos não deve exceder 2 segundos.

2. Disponibilidade
O sistema deve estar disponível 99,9% do tempo, com manutenção programada fora do horário comercial.

3. Segurança
Todos os dados de usuários devem ser criptografados.
O sistema deve ter autenticação multifatorial para acesso de administradores.

4. Usabilidade
A interface deve ser intuitiva, permitindo que um usuário sem experiência consiga completar uma compra em no máximo 5 minutos.
O sistema deve ser compatível com dispositivos móveis, garantindo uma experiência de uso adequada.

5. Manutenibilidade
O código deve ser modular, permitindo atualizações em componentes específicos sem impactar todo o sistema.
Documentação técnica deve ser fornecida para facilitar a manutenção futura.

6. Escalabilidade
O sistema deve ser capaz de suportar um aumento de 50% no número de usuários ativos sem degradação no desempenho.

7. Compatibilidade
O sistema deve ser compatível com os navegadores mais utilizados (Chrome, Firefox, Safari, Edge).
Deve ser possível integrar o sistema com plataformas de pagamento e serviços de logística.

8. Confiabilidade
O sistema deve ter um tempo médio de recuperação (MTTR) de menos de 30 minutos após uma falha.

9. Portabilidade
O sistema deve ser capaz de ser implantado em diferentes ambientes de nuvem com mínima reconfiguração.

10. Localização
O sistema deve oferecer suporte a múltiplos idiomas, permitindo a personalização da interface de acordo com a localização do usuário.

Esses requisitos ajudam a garantir que a loja de vendas de carros não apenas funcione corretamente, mas também proporcione uma boa experiência aos usuários e mantenha sua eficiência ao longo do tempo.


### Telas do sistema

> Link FIGMA https://www.figma.com/design/kl8SulAarp4OaIJ2zlhLi0/Carro?node-id=0-1&node-type=canvas&t=DDMMhh0nWLwTJ84C-0

![Carro](https://github.com/user-attachments/assets/aaf23b47-74d5-4aa6-88e9-09d48775be9d)
