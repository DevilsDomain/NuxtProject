import {defineStore} from 'pinia';

export const useUserStore = defineStore('user' , () => {
     // state
     const name = ref('');
     const logged = ref(false);
 
     // getters
     const userName = computed(() => name.value);
     const isLogged = computed(() => logged.value);
 
     //actions
     function login(_name: string):void {
         
         logged.value = true;
         name.value = _name;
 
     }

     function logout() {
        logged.value = false;
        name.value = '';
     }

    return {userName, isLogged, login, logout};

})