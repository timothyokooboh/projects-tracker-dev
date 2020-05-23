<template>
  <div class="projects">
    <h1 class="subheading grey--text">This is the projects page</h1>
    <v-container class="my-4">
      <v-expansion-panels flat>
        <v-expansion-panel v-for="(project, index) in myProjects" :key="index">
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content >
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due by {{project.due}}</div>
                <div>{{project.status}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    
    </v-container>
  </div>
</template>
<script>
import db from '../fb'
export default {
  data(){
    return {
      projects: []
      }
    },
    computed:{
      myProjects(){
        return this.projects.filter((project)=>{
          return project.person === 'timothy' 
        })
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

