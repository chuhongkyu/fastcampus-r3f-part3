import { atom } from 'recoil';

export const stage1 = atom({
    key: 'stage1',
    default: false,
});

export const onStartScene = atom({
    key: 'isStart',
    default: false,
});