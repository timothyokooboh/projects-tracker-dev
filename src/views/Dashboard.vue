<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-4">
      <v-layout row class="mb-3">
        <v-btn text>Order by</v-btn>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" small text color="grey" @click="sort('title')">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Order project by project title</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn small text color="grey" @click="sort('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Order project by name of person</span>
        </v-tooltip>
      </v-layout>
      <v-card  flat row v-for="(project, index) in projects" :key="index">
        <v-layout row :class="` pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="text-right mr-3">
              <v-chip small :class="` my-2 chip ${project.status}`">{{project.status}}</v-chip>
            </div>
          </v-flex>
         </v-layout>
         <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '../fb'
export default {
    data(){
      return {
        projects: [
          
        ]
      }
    },
    methods: {
      sort(prop) {
        this.projects.sort((a, b)=> a[prop] < b[prop] ? -1 : 1)
      }
    },
     created(){
      db.collection('projects').onSnapshot((res)=>{
        const changes = res.docChanges()

        changes.forEach((change)=>{
          if(change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id:change.doc.id
            })
          }
        })
      })
    }
  }
</script>
<style>
  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }
  
  
</style>


