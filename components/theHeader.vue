<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-indigo-lighten-4">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" to="/"><img :src="logo" height="50px" width="auto" alt="">
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end bg-indigo-lighten-4" id="offcanvasNavbar" tabindex="-1">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body" id="navbarScroll">
                        <ul class="navbar-nav text-white justify-content-start flex-grow-1 pe-3">
                            <li class="nav-item">
                                <NuxtLink class="nav-link text-white " aria-current="page" to="/">Home</NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink class="nav-link text-white" to="/about">
                                    About
                                </NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link text-white" to="/blogs/">
                                    Blog
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink class="nav-link text-white" to="/contact">Contact</NuxtLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<style>
.bg-faded {
    background: none;
}
</style>
<script setup>
import logo from '../assets/img/logo.webp'
</script>