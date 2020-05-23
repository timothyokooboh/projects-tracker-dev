<template>

  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span class="subheading text-center">Awesome! You added a new project</span>
    </v-snackbar>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn text color='grey' v-on="on">
          <v-icon left large>mdi-menu-down</v-icon>
          <span>MENU</span>
        </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in links"
            :key="index"
            router :to="item.route"
            
          >
          <v-list-item-icon> 
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text depressed>
        <span>Sign out</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class = "indigo"  >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/ninja.png" alt="">
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @opensnackbar="snackbar=true"/>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item-group>
        <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
          <v-list-item-icon >
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </nav>

</template>
<script>
import Popup from './Popup'
export default {
  components: {
    Popup
  },
  data(){
    return {
      drawer: false,
      snackbar: false,
      links: [
        {icon:'mdi-alert-decagram', text:'Dashboard', route:'/' },
        {icon:'mdi-folder', text:'My Projects', route:'/projects' },
        {icon:'mdi-account', text:'Team', route:'/team' },
      ]
    }
  }
 
}
</script>