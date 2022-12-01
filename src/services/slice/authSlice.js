import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { authApi } from '../authApi'

const initialState = {
    // user: JSON.parse(localStorage.getItem('user')) || null,
    user : null,
    messageError: null,
    isLoading: false,
    isOpen: false,
    isOpenRight: false,
    
    isSignIn : false,
    isSignUp : false,
}

export const signIn = createAsyncThunk(
    'auth/signin',
    async (user) => {
        try {
            const {data} = await authApi.signIn(user);
            localStorage.setItem('user', JSON.stringify(data.content));
            return data.content;
        } catch (error) {
            throw(error);
        }        
    }
)

export const signUp = createAsyncThunk(
    'auth/signup',
    async (user) => {
        try {
            const {data} = await authApi.signUp(user);
            return data.content;
        } catch (error) {
            throw(error);
        }
    }
)

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        loginShow : (state) => {
            return {...state, isOpen : true}
        },
        loginClose : (state) => {
            return {...state, isOpen : false}
        },
        logout : (state) => {
            return {...state, user : null}
        },
        show : (state) => {
            return {...state, isOpenRight: true}
        },
        close : (state) => {
            return {...state, isOpenRight: false}
        },
        setIsSignUp : (state) => {
            return {...state, isSignUp : false};
        }, 
        clearError : (state) => {
            return {...state, messageError : null}
        }
    },
    extraReducers : (builder) => {
        builder.addCase(signIn.pending, (state) => {
            return {...state, isLoading: true};
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            return {...state, isLoading: false, user: action.payload};
        });
        builder.addCase(signIn.rejected, (state, action) => {
            return {...state, isLoading: false, messageError: action.error.message};
        });

        builder.addCase(signUp.pending, (state) => {
            return {...state, isLoading: true};
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            return {...state, isLoading: false, myAcount: action.payload, isSignUp: true};
        });
        builder.addCase(signUp.rejected, (state, action) => {
            return {...state, isLoading: false, messageError: action.error.message};
        });
    }
});


export const { loginShow, loginClose, logout, show, close, setIsSignUp, clearError } = authSlice.actions;
export default authSlice.reducer;