<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/"><a class="navbar-brand">Todo List</a></router-link>
                </div>
                <ul class="nav navbar-nav">
                    <li><router-link :to="{path: '/'}">{{ $t("message.activeList") }}</router-link></li>
                    <li><router-link :to="{name: 'archivedTodos'}">{{ $t("message.archivedList") }}</router-link></li>
                    <li><router-link :to="{name: 'allTodos'}">{{ $t("message.completeList")}}</router-link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#"
                         @click="changeLanguage">
                            <span
                            v-if="this.$i18n.locale === 'fr'">English</span>
                            <span
                            v-else-if="this.$i18n.locale === 'en'">Francais</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <br><br>
    </div>
</template>

<script>
    import store from '../config/store.js'
    export default{
      data () {
        return {
          store
        }
      },

      methods: {
        changeLanguage () {
          if (this.$i18n.locale === 'fr') { this.$i18n.locale = 'en' } else if (this.$i18n.locale === 'en') { this.$i18n.locale = 'fr' }
        }
      }
    }
</script>
