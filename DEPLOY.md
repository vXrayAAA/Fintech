# 🚀 Guia de Deploy - Fintech Web

Este documento explica como fazer deploy do projeto Fintech Web em diferentes plataformas.

## 🎯 **Opções Recomendadas (GRATUITAS)**

### 1. **GitHub Pages** ⭐ (CONFIGURADO)

✅ **Status:** Já configurado com GitHub Actions!

**URL do site:** https://vxrayaaa.github.io/Fintech/

**Como ativar:**
1. Acesse: https://github.com/vXrayAAA/Fintech/settings/pages
2. Em "Source", selecione "GitHub Actions"
3. O deploy acontece automaticamente a cada push na branch `master`

**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Deploy automático via GitHub Actions
- ✅ SSL/HTTPS incluído
- ✅ CDN global
- ✅ Domínio personalizado suportado

---

### 2. **Vercel** ⚡ (Deploy Alternativo)

**Como fazer deploy:**

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login no Vercel
vercel login

# 3. Deploy do projeto
vercel --prod

# 4. Configurar para deploy da pasta src/
# No arquivo vercel.json (já criado):
```

**Vantagens:**
- ✅ Deploy instantâneo
- ✅ Preview branches automático
- ✅ Analytics incluído
- ✅ Edge functions suportadas

---

### 3. **Netlify** 🌐 (Alternativa Robusta)

**Como fazer deploy:**

1. **Via Git (Recomendado):**
   - Acesse: https://netlify.com
   - Conecte seu repositório GitHub
   - Configure build: `Build command: (vazio)`, `Publish directory: src`

2. **Via Drag & Drop:**
   - Arraste a pasta `src/` para netlify.com/drop

**Vantagens:**
- ✅ Formulários serverless
- ✅ Redirects e rewrites
- ✅ Deploy previews
- ✅ Domain management

---

### 4. **Firebase Hosting** 🔥 (Google)

**Configuração:**

```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Login no Firebase
firebase login

# 3. Inicializar projeto
firebase init hosting

# 4. Configurar para usar pasta src/
# No firebase.json (configuração):
{
  "hosting": {
    "public": "src",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}

# 5. Deploy
firebase deploy
```

---

## 📋 **Configurações Adicionais**

### **Arquivo vercel.json** (para Vercel)
```json
{
  "buildCommand": "",
  "outputDirectory": "src",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### **Arquivo _redirects** (para Netlify)
```
/*    /index.html   200
```

### **Configuração GitHub Pages**
O arquivo `.github/workflows/deploy.yml` já está configurado para:
- ✅ Deploy automático na branch master
- ✅ Usar pasta `src/` como raiz do site
- ✅ Configurar permissões necessárias

---

## 🔧 **Preparação para Deploy**

### **Checklist Pré-Deploy:**
- [x] ✅ Repositório público no GitHub
- [x] ✅ Todos os arquivos na pasta `src/`
- [x] ✅ Links relativos nos arquivos
- [x] ✅ GitHub Actions configurado
- [x] ✅ README.md atualizado

### **Otimizações Aplicadas:**
- [x] ✅ CSS minificado via TailwindCSS
- [x] ✅ JavaScript modular e otimizado
- [x] ✅ Imagens SVG otimizadas
- [x] ✅ HTML semântico e válido

---

## 🌐 **URLs do Projeto**

### **Produção:**
- **GitHub Pages:** https://vxrayaaa.github.io/Fintech/
- **Repositório:** https://github.com/vXrayAAA/Fintech

### **Development:**
- **Local:** Abrir `src/index.html` no navegador
- **Servidor local:** `npx serve src` (porta 3000)

---

## 📱 **Testando o Deploy**

### **Verificações Essenciais:**
1. ✅ **Responsividade:** Teste em mobile, tablet, desktop
2. ✅ **Funcionalidades:** Toggle de senha funcionando
3. ✅ **Performance:** PageSpeed Insights > 90
4. ✅ **Acessibilidade:** Lighthouse Accessibility > 95
5. ✅ **SEO:** Meta tags e estrutura semântica

### **Ferramentas de Teste:**
- **Chrome DevTools:** F12 → Device simulation
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **Wave:** https://wave.webaim.org/

---

## 🚀 **Deploy Automático Configurado!**

**Status atual:**
- ✅ GitHub Actions ativo
- ✅ Deploy automático no push
- ✅ Site disponível publicamente
- ✅ SSL/HTTPS habilitado
- ✅ CDN global ativo

**Próximo push = Deploy automático!** 🎉

---

## 📞 **Suporte e Monitoramento**

### **Logs de Deploy:**
- GitHub Actions: https://github.com/vXrayAAA/Fintech/actions
- Status em tempo real dos deploys

### **Monitoramento:**
- Uptime via GitHub Pages status
- Performance via Lighthouse CI
- Erros via browser DevTools

---

<div align="center">
  <sub>🚀 Deploy configurado para o projeto FIAP - FASE 04</sub>
</div>
