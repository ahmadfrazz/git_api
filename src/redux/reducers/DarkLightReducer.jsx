
const DarkLightReducer = (state = "DARK", action) => {
    switch(action.type){
        case 'MODE_TOGGEL':
            if(state=== "DARK"){
                return state = "LIGHT";
            }
            else{
                return state = "DARK"
            }
            default:
                return state;
    }
    
}
export default DarkLightReducer;
