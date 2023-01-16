import {defineStore} from 'pinia';

export const useUserStore = defineStore('user' , () => {
     // state
     let name = "";
     const logged = ref(false);

     // getters
     const userName = computed(() => {
         if (logged.value) {
             return name;
         }
         return "";
     });
     const isLogged = computed(() => logged.value);

     // actions
     function login(_name: string):void {
         
         logged.value = true;
         name = _name;
 
     }

     function logout() {
        logged.value = false;
        name = "";
     }

    return {userName, isLogged, login, logout};

})