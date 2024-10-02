import { atom } from "recoil";

export const isStartScene = atom({
    key: 'isStart',
    default: false,
})

export const stage1 = atom({
    key: 'stage1',
    default: false
})

export const stage2 = atom({
    key: 'stage2',
    default: false
})