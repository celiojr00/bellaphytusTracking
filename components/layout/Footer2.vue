<template>
    <header class="main-header header-style-two" :class="{ 'moblie-search-active': isSearch }">
        <!-- Header Top -->
        <div class="header-top">
            <div class="top-left">
                <!-- Info List -->
                <ul class="list-style-one">
                    <li><i class="fa fa-map-marker-alt"></i> 380 St Kilda Road, Australia</li>
                    <li><i class="fa fa-clock"></i> Mon - Sat: 8am - 5pm</li>
                    <li><i class="fa fa-phone-volume"></i>
                        <NuxtLink to="/tel:+92(8800)87890">+92 (8800) 87890</NuxtLink>
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
                        <NuxtLink to="/"><img src="/images/logo_econo_pro.png" alt="" title="Tronis"></NuxtLink>
                    </div>
                </div>

                <!--Nav Box-->
                <div class="nav-outer">

                    <nav class="nav main-menu">
                        <LayoutMenu />
                    </nav>
                    <!-- Main Menu End-->

                    <div class="outer-box">

                        <button class="ui-btn ui-btn search-btn" @click="handleSearch">
                            <span class="icon lnr lnr-icon-search"></span>
                        </button>

                        <NuxtLink to="#" class="ui-btn"><i class="lnr-icon-shopping-cart"></i></NuxtLink>

                        <NuxtLink to="/page-contact" class="theme-btn btn-style-two hvr-light"><span class="btn-title">Get A
                                Quote</span></NuxtLink>

                        <!-- Mobile Nav toggler -->
                        <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Lower -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop" @click="handleToggled"></div>

            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            <nav class="menu-box">
                <div class="upper-box">
                    <div class="nav-logo">
                        <NuxtLink to="/"><img src="/images/logo_econo_pro.png" alt="" title="Fesho"></NuxtLink>
                    </div>
                    <div class="close-btn" @click="handleToggled"><i class="icon fa fa-times"></i></div>
                </div>

                <LayoutMobileMenu />
                <ul class="contact-list-one">
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <i class="icon lnr-icon-phone-handset"></i>
                            <span class="title">Call Now</span>
                            <NuxtLink to="/tel:+92880098670">+92 (8800) - 98670</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-envelope1"></span>
                            <span class="title">Send Email</span>
                            <NuxtLink to="/mailto:help@company.com">help@company.com</NuxtLink>
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
            <span class="search-back-drop" @click="handleSearch"></span>
            <button class="close-search" @click="handleSearch"><span class="fa fa-times"></span></button>

            <div class="search-inner">
                <form method="post" action="">
                    <div class="form-group">
                        <input type="search" name="search-field" value="" placeholder="Pesquisar...">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Header Search -->

        <!-- Sticky Header  -->
        <div class="sticky-header" :class="{ 'fixed-header animated slideInDown': scroll }">
            <div class="auto-container">
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
                                <LayoutMenu />
                            </div>
                        </nav><!-- Main Menu End-->

                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span>
                        </div>
                    </div>
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


const isToggled = ref(false)

const handleToggled = () => {
    isToggled.value = !isToggled.value
    document.body.classList.toggle("mobile-menu-visible", isToggled.value)
}
const isSearch = ref(false)

const handleSearch = () => {
    isSearch.value = !isSearch.value
}

</script>