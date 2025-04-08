import { atom, selector, selectorFamily } from "recoil";


//normal
export const ThemeAtom = atom({
    key: 'themAtom',
    default: 'val'
})

export const ThemeColorSelector = selector({
    key: 'ThemeColor',
    get: ({ get }) => {
        const atomget = get(ThemeAtom);
        return atomget === 'val' ? 'red' : 'green'
    }
})


//API calls

export const selectAtomId = atom({
    key: 'productIdAtom',
    default: null
})

//api fetch

export const fetchProduct = selector({
    key: 'fetchProductSelector',
    get: async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        return response.json()
    }
})

export const fetchProductId = selector({
    key: 'fetchProductSelectorId',
    get: async ({ get }) => {
        const productId = get(selectAtomId)
        if (productId != null) {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            return response.json()
        }
        return null
    }
})

//Instead of 👆 this 👇 you can use SelectorFamily;


export const fetchProductIdFamily = selectorFamily({
    key: 'fetchProductSelectorIdfam',
    get: (id) => async () => {
        if (id) {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            return response.json()
        }
        return null
    }
})