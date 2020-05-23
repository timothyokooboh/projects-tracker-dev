<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{on}">
      <v-btn class="success" v-on="on" @click="dialog=true">Add new project</v-btn>
    </template>
   
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea label="information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
          <v-menu offset-y>
            <template v-slot:activator="{on}">
              <v-text-field label ="Due date" :value="due" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loadingContent" ref="submit">{{submitButtonText}}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '../fb'
export default {
  data(){
    return {
      title: '',
      content: '',
      due: '',
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters',
      ],
      loadingContent: false,
      submitButtonText: 'Add Project',
      dialog: false,
      snackbar: false
    }
  },
  methods: {
    submit(){
      if(this.$refs.form.validate()){
        this.loadingContent = true
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'timothy',
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(()=>{
          this.loadingContent = false
          this.submitButtonText = 'Data added successfully'
          setTimeout(this.closeDialog, 1500)
          console.log('Added to db')
        })
      }
      
    },
    closeDialog(){
      this.dialog=false
      this.$emit('opensnackbar', this.snackbar===true)
    }
  }
}
</script>
