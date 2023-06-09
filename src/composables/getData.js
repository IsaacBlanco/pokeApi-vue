import {ref} from 'vue';
import axios from 'axios';


export const useGetData = () => {

    const data = ref(null)
    const loading = ref(true)
    const error = ref(null)

    const getData = async (url) =>{
        try {
            const response = await axios.get(url)
            console.log('axios repsonse', response)
            data.value = response.data
        } catch (e) {
            //console.error(error)
            error.value = "Error de Servidor"
        }finally{
            loading.value = false
        }
    }

    return{
        getData,
        data,
        loading,
        error,
    }
    
}