# 🏦 Fintech Web - Plataforma de Registro

Uma interface web moderna e responsiva para registro de usuários em plataforma fintech, desenvolvida com as melhores práticas de UX/UI e tecnologias web atuais.

![GitHub top language](https://img.shields.io/github/languages/top/vXrayAAA/Fintech?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/vXrayAAA/Fintech?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/vXrayAAA/Fintech?style=flat-square)

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte da **FASE 04** do curso FIAP, focando na criação de uma experiência de usuário moderna e acessível para registro em plataformas financeiras. O formulário implementa as melhores práticas de design responsivo e validação de dados.

## ✨ Funcionalidades

### 🎨 Interface & Design
- **Design Dark Mode**: Interface moderna com tema escuro elegante
- **Totalmente Responsivo**: Adaptação perfeita para mobile, tablet e desktop
- **Animações Suaves**: Transições e hover effects para melhor UX
- **Tipografia Moderna**: Integração com Google Fonts (Source Sans 3)

### 🔒 Segurança & Validação
- **Toggle de Senha**: Visualização opcional da senha com ícones dinâmicos
- **Validação de Campos**: Tipos apropriados (email, tel) com validação HTML5
- **Feedback Visual**: Ícones de validação em tempo real
- **Campos Obrigatórios**: Validação client-side integrada

### 📱 Experiência do Usuário
- **Navegação Intuitiva**: Botão de voltar com ícone customizado
- **Loading States**: Botões com estados desabilitados
- **Formulário Progressivo**: Campos organizados de forma lógica
- **Link de Login**: Acesso rápido para usuários existentes

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos customizados e animações
- **TailwindCSS**: Framework utility-first para estilização rápida
- **JavaScript (ES6+)**: Funcionalidades interativas separadas em módulos
- **SVG Icons**: Ícones vetoriais escaláveis para interface

## 📁 Estrutura do Projeto

```
Fintech_WEB/
├── 📄 package.json          # Dependências e scripts NPM
├── 📄 README.md            # Documentação do projeto
├── 📁 images/              # Assets visuais
│   └── Expand_left_light.svg
├── 📁 src/                 # Código fonte
│   ├── 📄 index.html       # Página principal
│   ├── 📄 style.css        # Estilos customizados
│   └── 📄 script.js        # Lógica JavaScript
└── 📁 node_modules/        # Dependências (gerado)
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v14 ou superior)
- NPM ou Yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/vXrayAAA/Fintech.git
   cd Fintech_WEB
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o build do CSS** (se necessário)
   ```bash
   npm run build:css
   ```

4. **Abra no navegador**
   ```bash
   # Opção 1: Abrir diretamente
   start src/index.html
   
   # Opção 2: Usar um servidor local
   npx serve src
   ```

## 📱 Preview

### Desktop
- Layout centralizado com card elegante
- Campos de entrada com foco visual aprimorado
- Botões com gradientes e animações hover

### Mobile
- Design mobile-first responsivo
- Toque otimizado para dispositivos móveis
- Navegação simplificada e intuitiva

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Background | `#1F2937` | Fundo principal |
| Card | `#374151` | Container do formulário |
| Primary Blue | `#3B82F6` | Elementos principais |
| Success Green | `#10B981` | Validação positiva |
| Text Light | `#F9FAFB` | Texto principal |
| Text Gray | `#9CA3AF` | Texto secundário |

## 🔧 Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Build CSS (se usando processador)
npm run build:css

# Desenvolvimento com watch
npm run dev

# Build para produção
npm run build
```

## 📈 Próximas Melhorias

- [ ] Integração com API backend
- [ ] Validação de senha em tempo real
- [ ] Máscaras de input mais robustas
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Desenvolvido com ❤️ por [vXrayAAA](https://github.com/vXrayAAA)**

---

<div align="center">
  <sub>Projeto desenvolvido durante a FASE 04 - FIAP</sub>
</div>
