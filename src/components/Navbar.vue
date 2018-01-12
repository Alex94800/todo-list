<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand">Todo List</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><router-link :to="{name: 'activeTodos'}">Liste active</router-link></li>
                    <li><router-link :to="{name: 'archivedTodos'}">Liste archivée</router-link></li>
                    <li><router-link :to="{name: 'allTodos'}">Liste complète</router-link></li>
                </ul>
            </div>
        </nav>
        <br><br>
    </div>
</template>
