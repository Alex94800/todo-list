import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  fr: {
    message: {
      title: 'Liste des taches',
      addTask: "Ajout d'une tache",
      modifyTask: 'Modifier une tache',
      list: 'Listes',
      activeList: 'Liste active',
      archivedList: 'Liste archivée',
      completeList: 'Liste complète',
      todo: 'A faire',
      done: 'Fait',
      error: {
        add: 'Veuillez ajouter une tache',
        modify: 'Veuillez entrer un nouveau nom pour la tache'
      }
    },
    button: {
      addTask: 'Ajouter tache',
      add: 'Ajouter',
      abort: 'Retour',
      modify: 'Modifier',
      destroy: 'Supprimer',
      archive: 'Archiver'
    },
    form: {
      placeholder: {
        add: 'Ajouter une tache'
      }
    }
  },
  en: {
    message: {
      title: 'Tasks list',
      addTask: 'Add a task',
      modifyTask: 'Modify a task',
      list: 'Lists',
      activeList: 'Active List',
      archivedList: 'Archived List',
      completeList: 'Complete List',
      todo: 'To do',
      done: 'Done',
      error: {
        add: 'Please add a task',
        modify: 'Please add a new name for the task'
      }
    },
    button: {
      addTask: 'Add Task',
      add: 'Add',
      abort: 'Back',
      modify: 'Modify',
      destroy: 'Delete',
      archive: 'Archive'
    },
    form: {
      placeholder: {
        add: 'Add a task'
      }
    }
  }

}

const i18n = new VueI18n({
  locale: 'fr',
  messages
})

export default i18n
