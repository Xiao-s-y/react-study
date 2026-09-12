import {create} from 'zustand'

type store={
    count:number,
    increment:()=>void,
    decrement:()=>void,
}


export const useStore=create<store>((set)=>({
    count:0,
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
}))