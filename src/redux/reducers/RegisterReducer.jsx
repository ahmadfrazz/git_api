
const initialState = {
users: [
        {
        isLogin: false,
        id: "b6859b61-70dd-4945-ba21-605e28cca80c",
        uname: "aa",
        email: "aa@aa.com",
        password: "41"
        }
    ]
    }

const RegisterReducer = (state = initialState,  action) => {
    switch(action.type){
        case 'REGISTER':
            {
                return state = {
                    users: [
                        ...state.users,
                        {
                            isLogin: false,
                            id: action.payload.id,
                            uname: action.payload.uname,
                            email: action.payload.email,
                            password: action.payload.password
                        }
                    ]
                }
            }
            case 'LOGIN':
            {
                state.users.map((user) => {
                    if(user.email === action.payload.email && user.password === action.payload.password)
                    {
                        return state = {
                            users: [
                                // ...state.users,
                                ...state.users.filter((user) => user.email !==  action.payload.email),
                                {
                                    isLogin: true,
                                    // ...user
                                    id: user.id,
                                    uname: user.uname,
                                    email: user.email,
                                    password: user.password
                                }
                            ]
                        }
                    }
                })
            }
                // const user_found = state.users.filter((user) => {
                //     if(user.email === action.payload.email && user.password === action.payload.password){
                //         return user;
                //         // console.log("found this======",user);
                //     }
                // })
                // debugger

                // let newObjs = state.users.map((user, index) => {
                //     if(user.email === action.payload.email && user.password === action.payload.password){
                //         debugger
                //         return {
                //             isLogin: true,
                //             id: user.id,
                //             uname: user.uname,
                //             email: user.email,
                //             password: user.password
                //         }     
                //     }
                // });
                // console.log("user updated==>", newObjs);
                
                
                // state.users.filter((user)=> user.email !== action.payload.email)
                // console.log("new users===>",  user.isLogin, user);
                // console.log("State===>", [
                //         ...newUsers,
                //         {
                //             isLogin: true,
                //             ...user
                //         }
                //     ]);
                // return state = {
                //     users: [
                //         ...state.users.filter((user) => user.email !==  action.payload.email),
                //         {
                //             isLogin: true,
                //             ...user
                //         }
                //     ]
                // }
                // return state = {
                //     users: [
                //         ...state.users,
                //         {
                //             isLogin: true,
                //             ...user_found
                //         }
                //     ]
                // }
                // console.log(user_found);
                // return state = {
                //     users: [
                //         ...state.users,
                //         state.users.filter((user) => {
                        
                //     })
                // ]
                // }

                // return state = {
                //     users: state.users.filter((user) => {
                //     if(user.email === action.payload.email && user.password === action.payload.password){
                //         [
                //             ...state.users,
                //             {
                //                 isLogin: true,
                //                 ...user
                //             }
                //         ]
                //     }
                        
                //     })
                    
                // }
            
            // {
            //     state.users.filter((user) => {
                    
            //         if(user.email === action.payload.email && user.password === action.payload.password){
            //             console.log("user==", user);
            //             // return console.log("user====",user)
            //             // user update oper state 
            //         }
            //     })
            //     // debugger;
            // }   
        default:
            return state;
    }
    
}
export default RegisterReducer;




