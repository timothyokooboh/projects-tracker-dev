<template>
  <div class="team">
    <h1 class="subheading grey--text">My team</h1>
    <v-container class="my-4">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, index) in team" :key="index">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-android-messages</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      team: [
        {name: 'Timothy', role: 'Web developer', avatar: '/ninja.png'},
        {name: 'Pete', role: 'Graphic designer', avatar: '/rui.png'},
        {name: 'Tamari', role: 'Client service executive', avatar: '/mata.png'},
        {name: 'Dolly', role: 'Graphic artist', avatar: '/dolly.png'},
        {name: 'Professor', role: 'Project manager', avatar: '/sifu.png'},
      ]
    }
  }
}
</script>