<template>
    <ul class="navigation clearfix">
        <!--Keep This Empty / Menu will come through Javascript-->

        <li class="dropdown" :class="{ 'current': isActive.key === 1 }">
            <NuxtLink to="/">Home</NuxtLink>
            <ul :class="{ 'd-block': isActive.key === 1 }">
                <li>
                    <NuxtLink to="/">Home page 01</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/index-2">Home page 02</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/index-3">Home page 03</NuxtLink>
                </li>
            </ul>
            <div class="dropdown-btn" :class="{ 'active': isActive.key === 1 }" @click="handleClick(1)"><i class="fa fa-angle-down"></i></div>
        </li>
        <li>
            <NuxtLink to="/page-about">About</NuxtLink>
        </li>
        <li class="dropdown" :class="{ 'current': isActive.key === 2 }">
            <NuxtLink to="/#">Services</NuxtLink>
            <ul :class="{ 'd-block': isActive.key === 2 }">                
                    <li>
                        <NuxtLink to="/page-services">Services List</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/page-service-details">Service Details</NuxtLink>
                    </li>
            </ul>
            <div  class="dropdown-btn" :class="{ 'active': isActive.key === 2 }" @click="handleClick(2)"><i class="fa fa-angle-down"></i></div>
        </li>
        <li class="dropdown" :class="{ 'current': isActive.key === 3 }">
            <NuxtLink to="/#">Projects</NuxtLink>
            <ul :class="{ 'd-block': isActive.key === 3 }">
                <li>
                    <NuxtLink to="/page-projects">Projects grid</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/page-project-details">Projects Details</NuxtLink>
                </li>
            </ul>
            <div  class="dropdown-btn" :class="{ 'active': isActive.key === 3 }" @click="handleClick(3)"><i class="fa fa-angle-down"></i></div>
        </li>
        <li class="dropdown" :class="{ 'current': isActive.key === 4 }">
            <NuxtLink to="/#">Team</NuxtLink>
            <ul :class="{ 'd-block': isActive.key === 4 }">
                <li>
                    <NuxtLink to="/page-team">Team grid</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/page-team-details">Team Details</NuxtLink>
                </li>
            </ul>
            <div  class="dropdown-btn" :class="{ 'active': isActive.key === 4 }" @click="handleClick(4)"><i class="fa fa-angle-down"></i></div>
        </li>
        <li class="dropdown" :class="{ 'current': isActive.key === 6 }">
            <NuxtLink to="/#">News</NuxtLink>
            <ul :class="{ 'd-block': isActive.key === 6 }">
                <li>
                    <NuxtLink to="/news-grid">News Grid</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/news-details">News Details</NuxtLink>
                </li>
            </ul>
            <div  class="dropdown-btn" :class="{ 'active': isActive.key === 6 }" @click="handleClick(6)"><i class="fa fa-angle-down"></i></div>
        </li>
        <li>
            <NuxtLink to="/page-contact">Contact</NuxtLink>
        </li>
    </ul>
</template>
<script setup>
import { ref } from 'vue'

const isActive = ref({
    status: false,
    key: '',
})

const handleClick = (key) => {
    if (isActive.value.key === key) {
        isActive.value.status = false
    } else {
        isActive.value.status = true
        isActive.value.key = key
    }
}
</script>
