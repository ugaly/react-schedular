import API from "../api";






export default class AuthService{
    static login(payload){
       /* axios.post("http://localhost:8000/api/login",payload,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Kizingiti '+sessionStorage.getItem("access")
            }
        })*/
        return API.ax.post('login',payload).catch(e=>console.log(e))
    }
    static refresh(payload){
        return API.ax.post('',payload).catch(e=>console.log(e))
    }

     static createVenueManager(data){
        return API.ax.post('system-users/',data).catch(e=>console.log(e))
    }

     static loadByUsersRoleAndId(user_id, role){
        return API.ax.get('serial/list/system/user/'+user_id +'/'+ role).catch(e=>console.log(e))
    }


    static loadByUsersRoleAndIdNoPaging(user_id, role){
        return API.ax.get(`serial/list/system/user-no-paging/${user_id}/${role}`).catch(e=>console.log(e))
    }

      static createVenue(data){
        return API.ax.post('venues/create/',data).catch(e=>console.log(e))
    }

     static listVenue(user_id=0){
        return API.ax.get(`venues/?system_user_id=${user_id}`).catch(e=>console.log(e))
    }

     static venueCount(){
        return API.ax.get(`venue/count/`).catch(e=>console.log(e))
    }

     static venueManagerCount(){
        return API.ax.get(`venue-manager/count/`).catch(e=>console.log(e))
    }

    static userUpdate(user_id, data){
        return API.ax.put(`users-update/${user_id}/`, data).catch(e=>console.log(e))
    }


    static postschedule(data){
        return API.ax.post(`scheduler-data/`, data).catch(e=>console.log(e))
    }



     static loadUsers(srch){
        return API.ax.get('serial/list/system/user?search='+srch).catch(e=>console.log(e))
    }
     static loadAllUsers(){
        return API.ax.get('system-users/').catch(e=>console.log(e))
    }
     static createUsers(){
        return API.ax.get('serial/create/system/user').catch(e=>console.log(e))
    }
      static loadByUsersById(user_id){
        return API.ax.get('serial/list/system/user/byid/'+user_id).catch(e=>console.log(e))
    }



}