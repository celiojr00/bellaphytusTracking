<template>
    <!-- <header  :class="{ 'sticky': scroll }">
        Header 2
    </header> -->
    <header class="main-header header-style-two">
        <!-- Header Top -->
        <div class="header-top">
            <div class="top-left">
                <!-- Info List -->
                <ul class="list-style-one">
                    <li><i class="fa fa-map-marker-alt"></i> 380 St Kilda Road, Australia</li>
                    <li><i class="fa fa-clock"></i> Mon - Sat: 8am - 5pm</li>
                    <li><i class="fa fa-phone-volume"></i>
                        <NuxtLink to="tel:+92(8800)87890">+92 (8800) 87890</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="top-right">
                <ul class="social-icon-one">
                    <li>
                        <NuxtLink to="#"><span class="fab fa-facebook-square"></span></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#"><span class="fab fa-twitter"></span></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#"><span class="fab fa-pinterest-p"></span></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#"><span class="fab fa-instagram"></span></NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Header Top -->

        <!-- Header Lower -->
        <div class="header-lower">
            <!-- Main box -->
            <div class="main-box">
                <div class="logo-box">
                    <div class="logo">
                        <NuxtLink to="/"><img src="/images/logo_econoPro.png" alt="" title="EconoPro"></NuxtLink>
                    </div>
                </div>

                <!--Nav Box-->
                <div class="nav-outer">

                    <nav class="nav main-menu">
                        <ul class="navigation">
                            <li class="current dropdown">
                                <NuxtLink to="/">Home</NuxtLink>
                                <ul>
                                    <li>
                                        <NuxtLink to="/">Home page 01</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/index-2">Home page 02</NuxtLink>
                                    </li>
                                    <li class="dropdown">
                                        <NuxtLink to="#">Header Styles</NuxtLink>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/">Header Style One</NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/index-2">Header Style Two</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <NuxtLink to="#">Pages</NuxtLink>
                                <ul>
                                    <li>
                                        <NuxtLink to="/page-about">Sobre nós</NuxtLink>
                                    </li>
                                    <li class="dropdown">
                                        <NuxtLink to="#">Serviços</NuxtLink>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/page-services">Lista de Serviços</NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/page-service-details">Detalhes Serviço</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <NuxtLink to="#">Projetos</NuxtLink>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/page-projects">Lista de Projetos</NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/page-project-details">Detalhes Projeto</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <NuxtLink to="#">Equipe</NuxtLink>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/page-team">Lista Equipe</NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/page-team-details">Detalhes Equipe</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NuxtLink to="/page-testimonial">Avaliações</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/page-pricing">Preços</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/page-faq">Perguntas Frequentes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/page-404">Página 404</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <NuxtLink to="#">Loja</NuxtLink>
                                <ul>
                                    <li>
                                        <NuxtLink to="/shop-products">Produtos</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/shop-products-sidebar">Produtos Barra Lateral</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/shop-product-details">Detalhes Produto</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/shop-cart">Carrinho</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/shop-checkout">Checkout</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <NuxtLink to="#">Notícias</NuxtLink>
                                <ul>
                                    <li>
                                        <NuxtLink to="/news-grid">Grid de Notícias</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/news-details">Detalhes Notícia</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NuxtLink to="/page-contact">Contato</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <!-- Main Menu End-->

                    <div class="outer-box">

                        <button class="ui-btn ui-btn search-btn">
                            <span class="icon lnr lnr-icon-search"></span>
                        </button>

                        <NuxtLink to="#" class="ui-btn"><i class="lnr-icon-shopping-cart"></i></NuxtLink>

                        <NuxtLink to="/page-contact" class="theme-btn btn-style-two hvr-light"><span class="btn-title">Get A
                                Quote</span></NuxtLink>

                        <!-- Mobile Nav toggler -->
                        <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Lower -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>

            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            <nav class="menu-box">
                <div class="upper-box">
                    <div class="nav-logo">

                        <NuxtLink to="/"><img src="/images/logo_econoPro.png" alt="" title="EconoPro"></NuxtLink>

                        <NuxtLink to="/"><img src="/images/logo_econoPro-2.png" alt="" title="EconoPro"></NuxtLink>

                    </div>
                    <div class="close-btn"><i class="icon fa fa-times"></i></div>
                </div>

                <ul class="navigation clearfix">
                    <!--Keep This Empty / Menu will come through Javascript-->
                </ul>
                <ul class="contact-list-one">
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <i class="icon lnr-icon-phone-handset"></i>
                            <span class="title">Call Now</span>
                            <NuxtLink to="tel:+92880098670">+92 (8800) - 98670</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-envelope1"></span>
                            <span class="title">Send Email</span>
                            <NuxtLink to="mailto:help@company.com">help@company.com</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-clock"></span>
                            <span class="title">Send Email</span>
                            Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                        </div>
                    </li>
                </ul>


                <ul class="social-links">
                    <li>
                        <NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#"><i class="fab fa-facebook-f"></i></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#"><i class="fab fa-pinterest"></i></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink>
                    </li>
                </ul>
            </nav>
        </div><!-- End Mobile Menu -->

        <!-- Header Search -->
        <div class="search-popup">
            <span class="search-back-drop"></span>
            <button class="close-search"><span class="fa fa-times"></span></button>

            <div class="search-inner">
                <form method="post" action="">
                    <div class="form-group">
                        <input type="search" name="search-field" value="" placeholder="Pesquisar..." required="">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Header Search -->

        <!-- Sticky Header  -->
        <div class="sticky-header">
            <div class="auto-container"></div>
            <div class="inner-container">
                <!--Logo-->
                <div class="logo">
                    <NuxtLink to="/" title=""><img src="/images/logo_econo_pro.png" alt="" title=""></NuxtLink>
                </div>

                <!--Right Col-->
                <div class="nav-outer">
                    <!-- Main Menu -->
                    <nav class="main-menu">
                        <div class="navbar-collapse show collapse clearfix">
                            <ul class="navigation clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </ul>
                        </div>
                    </nav><!-- Main Menu End-->

                    <!--Mobile Navigation Toggler-->
                    <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                </div>
            </div>
        </div><!-- End Sticky Menu -->
    </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scroll = ref(false)

const handleScroll = () => {
    const scrollCheck = window.scrollY > 100
    if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck
    }
}

onMounted(() => {
    document.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    document.removeEventListener("scroll", handleScroll)
})
</script>