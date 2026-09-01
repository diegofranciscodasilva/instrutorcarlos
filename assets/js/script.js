/* =====================================================================
   1) DETECÇÃO E APLICAÇÃO DO TEMA (executa imediatamente, antes do DOM
      terminar de carregar, para evitar "flash" de cor errada)
   ===================================================================== */

// Chave usada para salvar a preferência do usuário no navegador
const THEME_KEY = "instrutor-carlos-theme"

// Tenta recuperar o tema salvo anteriormente pelo usuário
const savedTheme = localStorage.getItem(THEME_KEY)

// Verifica se o sistema operacional/navegador está em modo escuro
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

// Define o tema inicial: prioridade para o que o usuário já escolheu antes
const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light")

// Aplica o atributo data-theme na tag <html>, o que ativa as variáveis CSS corretas
document.documentElement.setAttribute("data-theme", initialTheme)


/* =====================================================================
   2) INTERAÇÕES QUE DEPENDEM DO DOM (menu mobile, tema, FAQ)
   ===================================================================== */

// Espera o HTML terminar de carregar antes de buscar os elementos na página
document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Ano atual no rodapé ---------- */
    const yearNode = document.querySelector("[data-current-year]")
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear()
    }

    /* ---------- Alternância de tema (botão sol/lua) ---------- */

    // Referências aos elementos do botão de tema
    const themeToggleBtn = document.getElementById("theme-toggle")
    const themeIcon = document.getElementById("theme-icon")

    // Atualiza o ícone exibido de acordo com o tema atual
    const updateThemeIcon = (theme) => {
        // No modo claro, mostra a lua (ação: mudar para escuro)
        // No modo escuro, mostra o sol (ação: mudar para claro)
        themeIcon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"
        themeToggleBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false")
    }

    // Garante que o ícone já nasça correto, de acordo com o tema aplicado no passo 1
    updateThemeIcon(document.documentElement.getAttribute("data-theme"))

    // Ao clicar no botão, alterna entre os temas e salva a escolha
    themeToggleBtn.addEventListener("click", () => {
        // Lê o tema atualmente aplicado
        const currentTheme = document.documentElement.getAttribute("data-theme")

        // Calcula o novo tema (inverso do atual)
        const newTheme = currentTheme === "dark" ? "light" : "dark"

        // Aplica o novo tema na tag <html>
        document.documentElement.setAttribute("data-theme", newTheme)

        // Persiste a escolha do usuário para futuras visitas
        localStorage.setItem(THEME_KEY, newTheme)

        // Atualiza o ícone do botão
        updateThemeIcon(newTheme)
    })


    /* ---------- Menu mobile (hambúrguer) ---------- */

    // Referências aos elementos do menu mobile
    const menuBtn = document.getElementById("mobile-menu-btn")
    const menuIcon = document.getElementById("mobile-menu-icon")
    const mobileMenu = document.getElementById("mobile-menu")

    // Função para fechar o menu mobile (reutilizada em vários pontos)
    const closeMobileMenu = () => {
        mobileMenu.classList.remove("is-open")
        menuIcon.className = "fa-solid fa-bars"
        menuBtn.setAttribute("aria-expanded", "false")
    }

    // Função para abrir o menu mobile
    const openMobileMenu = () => {
        mobileMenu.classList.add("is-open")
        menuIcon.className = "fa-solid fa-xmark"
        menuBtn.setAttribute("aria-expanded", "true")
    };

    // Ao clicar no botão hambúrguer, alterna entre abrir e fechar
    menuBtn.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("is-open")
        isOpen ? closeMobileMenu() : openMobileMenu()
    })

    // Fecha o menu automaticamente ao clicar em qualquer link dentro dele
    const mobileLinks = mobileMenu.querySelectorAll("a")
    mobileLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu)
    })

    /* ---------- Bot\u00e3o Scroll to Top ---------- */

    const scrollToTopBtn = document.getElementById("scroll-to-top")

    // Mostrar/esconder o bot\u00e3o baseado no scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("is-visible")
        } else {
            scrollToTopBtn.classList.remove("is-visible")
        }
    })

    // Fazer scroll suave para o topo ao clicar
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

})
