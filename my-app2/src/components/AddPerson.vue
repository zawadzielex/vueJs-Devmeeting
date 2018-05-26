<template>
    <form @submit.prevent="addPerson()">
        <div>
          <input 
          name="name" 
          v-model="person.name" 
          v-validate="'required|min:3'" 
          placeholder="Type name" 
          />
          <div v-show="errors.has('name')">
            {{ errors.first('name') }}
          </div>
        </div>
        <div>
          <input 
            name="surname" 
            v-model="person.surname" 
            v-validate="'required|min:3'" 
            placeholder="Type surname" 
          />
          <div v-show="errors.has('surname')">
            {{ errors.first('surname') }}
          </div>
        </div>
        <div>
          <input 
            name="email" 
            v-model="person.email" 
            v-validate="'required|min:3'" 
            placeholder="Type email" 
          />
          <div v-show="errors.has('email')">
            {{ errors.first('email') }}
          </div>
       </div>
        
        <button v-on:click="addPerson()">Add person</button>
        </form>
</template>

<script>
export default {
  name: "AddPerson",
  data() {
    return {
      person: {
        name: "",
        surname: "",
        email: ""
      }
    };
  },
  props: {
        peopleLength: {
            type: Number
        }
    },
  methods: {
    addPerson() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.$emit('onAddPerson', {
            id: this.peopleLength-1,
          ...this.person
        });
        for (var item in this.person) {
          this.person[item] = "";
        }
      });
      this.$validator.reset();
    }
  }
};
</script>
